import type { Feature, FeatureCollection, Geometry } from 'geojson'

interface TowerProperties {
  id: string
  provider: string
  type: '4G' | '5G'
  height: number
  coverage: number
  signal_strength: number
  frequency: string
  lastMaintenance: string
  status: 'active' | 'maintenance' | 'offline'
  capacity: number
}

// Generate sample data points around Stockholm
function generateSampleTowers(): Feature<Geometry, TowerProperties>[] {
  const stockholm = [18.0686, 59.3293]
  const towers = []
  
  // Create a grid of towers around Stockholm
  for (let i = -5; i <= 5; i++) {
    for (let j = -5; j <= 5; j++) {
      const lat = stockholm[1] + (i * 0.02)
      const lng = stockholm[0] + (j * 0.03)
      
      // Add some randomization to make it look more natural
      const type = Math.random() > 0.3 ? '4G' : '5G'
      const status = Math.random() > 0.1 ? 'active' : 'maintenance'
      
      towers.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        },
        properties: {
          id: `tower-${i}-${j}`,
          provider: 'PrivacyTel',
          type,
          height: 30 + Math.floor(Math.random() * 20),
          coverage: 3 + Math.floor(Math.random() * 4),
          signal_strength: -85 + Math.floor(Math.random() * 30),
          frequency: type === '5G' ? '3.5 GHz' : '800 MHz',
          lastMaintenance: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          status,
          capacity: type === '5G' ? 1000 + Math.floor(Math.random() * 500) : 400 + Math.floor(Math.random() * 200)
        }
      })
    }
  }
  
  return towers
}

function generateCoverageArea(tower: Feature<Geometry, TowerProperties>): Feature {
  const [lng, lat] = tower.geometry.coordinates
  const radius = tower.properties.coverage / 100
  
  const points = []
  const segments = 32
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2
    points.push([
      lng + Math.cos(angle) * radius,
      lat + Math.sin(angle) * radius
    ])
  }
  points.push(points[0])
  
  return {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [points]
    },
    properties: {
      signal_strength: tower.properties.signal_strength,
      towerId: tower.properties.id
    }
  }
}

// Cache for loaded tower data
let towerCache: FeatureCollection<Geometry, TowerProperties> | null = null
let coverageCache: FeatureCollection | null = null

export async function loadTowerData(): Promise<[FeatureCollection<Geometry, TowerProperties>, FeatureCollection]> {
  if (towerCache && coverageCache) {
    return [towerCache, coverageCache]
  }

  // Generate sample data instead of making API call
  const sampleTowers = generateSampleTowers()
  
  towerCache = {
    type: 'FeatureCollection',
    features: sampleTowers
  } as FeatureCollection<Geometry, TowerProperties>

  coverageCache = {
    type: 'FeatureCollection',
    features: sampleTowers.map(generateCoverageArea)
  } as FeatureCollection

  return [towerCache, coverageCache]
}

export const euTowers = { loadTowerData }