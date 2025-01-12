"use client"

import { useEffect, useRef, useState } from 'react'
import * as maptilersdk from '@maptiler/sdk'
import '@maptiler/sdk/dist/maptiler-sdk.css'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Signal, Radio, MapPin, Mountain, Tree, Water, Building, Activity, Calendar, Wifi } from "lucide-react"
import { euTowers } from '@/lib/infrastructure/data'

interface TowerPopupInfo {
  id: string
  location: [number, number]
  provider: string
  type: '4G' | '5G'
  height: number
  coverage: number
  frequency: string
  lastMaintenance: string
  status: 'active' | 'maintenance' | 'offline'
  capacity: number
  signal_strength: number
}

export default function InfrastructurePage() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maptilersdk.Map | null>(null)
  const [popupInfo, setPopupInfo] = useState<TowerPopupInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (map.current) return

    const apiKey = process.env.NEXT_PUBLIC_MAPTILER_KEY
    
    if (!apiKey) {
      setError('MapTiler API key is missing')
      setLoading(false)
      return
    }

    maptilersdk.config.apiKey = apiKey

    map.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.DARK,
      center: [18.0686, 59.3293], // Stockholm
      zoom: 10
    })

    map.current.on('load', async () => {
      if (!map.current) return

      try {
        const [towers, coverage] = await euTowers.loadTowerData()

        // Add coverage layer
        map.current.addSource('coverage', {
          type: 'geojson',
          data: coverage
        })

        map.current.addLayer({
          id: 'coverage-layer',
          type: 'fill',
          source: 'coverage',
          paint: {
            'fill-color': [
              'interpolate',
              ['linear'],
              ['get', 'signal_strength'],
              -100, '#ef4444',
              -80, '#eab308',
              -60, '#22c55e'
            ],
            'fill-opacity': 0.3
          }
        })

        // Add tower locations
        map.current.addSource('towers', {
          type: 'geojson',
          data: towers
        })

        map.current.addLayer({
          id: 'tower-layer',
          type: 'circle',
          source: 'towers',
          paint: {
            'circle-radius': 6,
            'circle-color': [
              'match',
              ['get', 'type'],
              '5G', '#22c55e',
              '#3b82f6'
            ],
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
          }
        })

        // Handle tower clicks
        map.current.on('click', 'tower-layer', (e) => {
          if (!e.features?.[0]) return

          const feature = e.features[0]
          const coords = feature.geometry.type === 'Point' ? feature.geometry.coordinates : null
          
          if (!coords) return

          const properties = feature.properties as TowerPopupInfo
          setPopupInfo({
            ...properties,
            location: coords as [number, number]
          })
        })

        setLoading(false)
      } catch (error) {
        console.error('Error loading tower data:', error)
        setError('Failed to load tower data')
        setLoading(false)
      }
    })

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl font-bold mb-4">European Network Infrastructure</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Comprehensive visualization of cellular network coverage across the EU
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center space-x-2">
                  <Signal className="w-4 h-4 text-primary" />
                  <CardTitle className="text-lg">Coverage</CardTitle>
                </div>
                <CardDescription>Signal strength analysis</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center space-x-2">
                  <Radio className="w-4 h-4 text-primary" />
                  <CardTitle className="text-lg">Towers</CardTitle>
                </div>
                <CardDescription>Infrastructure details</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-primary" />
                  <CardTitle className="text-lg">Urban</CardTitle>
                </div>
                <CardDescription>Population density impact</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center space-x-2">
                  <Mountain className="w-4 h-4 text-primary" />
                  <CardTitle className="text-lg">Terrain</CardTitle>
                </div>
                <CardDescription>Geographical features</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Network Layers</CardTitle>
                  <CardDescription>Toggle map features</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="coverage" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="coverage">Coverage</TabsTrigger>
                      <TabsTrigger value="terrain">Terrain</TabsTrigger>
                    </TabsList>
                    <TabsContent value="coverage">
                      <div className="space-y-4 pt-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">4G Coverage</span>
                          <Badge variant="outline">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">5G Coverage</span>
                          <Badge variant="outline">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Dead Zones</span>
                          <Badge variant="outline">Active</Badge>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="terrain">
                      <div className="space-y-4 pt-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Mountains</span>
                          <Badge variant="outline">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Forests</span>
                          <Badge variant="outline">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Water Bodies</span>
                          <Badge variant="outline">Active</Badge>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Legend</CardTitle>
                  <CardDescription>Map symbols and colors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span className="text-sm">5G Tower</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                    <span className="text-sm">4G Tower</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500/30" />
                    <span className="text-sm">Strong Signal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500/30" />
                    <span className="text-sm">Weak Signal</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:col-span-3 h-[800px] rounded-lg overflow-hidden relative">
              <div ref={mapContainer} className="h-full w-full" />
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                  <div className="text-lg">Loading tower data...</div>
                </div>
              )}
              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                  <div className="text-lg text-destructive">{error}</div>
                </div>
              )}
              {popupInfo && (
                <Card className="absolute top-4 right-4 w-80">
                  <CardHeader className="relative pb-2">
                    <button 
                      className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                      onClick={() => setPopupInfo(null)}
                    >
                      ×
                    </button>
                    <CardTitle className="text-lg">{popupInfo.provider}</CardTitle>
                    <CardDescription>Tower ID: {popupInfo.id}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Radio className="w-4 h-4 mr-2 text-primary" />
                          Type: {popupInfo.type}
                        </div>
                        <div className="flex items-center text-sm">
                          <Activity className="w-4 h-4 mr-2 text-primary" />
                          Status: {popupInfo.status}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Signal className="w-4 h-4 mr-2 text-primary" />
                          {popupInfo.signal_strength} dBm
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {popupInfo.lastMaintenance}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Wifi className="w-4 h-4 mr-2 text-primary" />
                        Frequency: {popupInfo.frequency}
                      </div>
                      <div className="flex items-center text-sm">
                        <Building className="w-4 h-4 mr-2 text-primary" />
                        Height: {popupInfo.height}m
                      </div>
                      <div className="flex items-center text-sm">
                        <Signal className="w-4 h-4 mr-2 text-primary" />
                        Coverage: {popupInfo.coverage}km
                      </div>
                      <div className="flex items-center text-sm">
                        <Activity className="w-4 h-4 mr-2 text-primary" />
                        Capacity: {popupInfo.capacity} connections
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}