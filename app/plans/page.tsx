"use client"

import { Shield, Check, Signal, Radio, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlansPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-destructive/5 to-background">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Secure Your Cellular Signal
          </h1>
          <p className="text-xl text-destructive mb-8 max-w-2xl mx-auto">
            Every second on a traditional network exposes your location and communications.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="text-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-2 border-muted">
                  <CardHeader>
                    <CardTitle>Basic Protection</CardTitle>
                    <CardDescription>Essential signal security</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">249 kr</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <Signal className="w-5 h-5 mr-2 text-green-500" />
                        <span>10GB Protected Data</span>
                      </li>
                      <li className="flex items-center">
                        <Radio className="w-5 h-5 mr-2 text-green-500" />
                        <span>IMSI Protection (Sweden)</span>
                      </li>
                      <li className="flex items-center">
                        <Lock className="w-5 h-5 mr-2 text-green-500" />
                        <span>Basic SS7 Protection</span>
                      </li>
                      <li className="flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-green-500" />
                        <span>Stingray Detection</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/checkout?plan=basic">Choose Basic</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Maximum Security
                  </div>
                  <CardHeader>
                    <CardTitle>Advanced Protection</CardTitle>
                    <CardDescription>Complete signal privacy</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">349 kr</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <Signal className="w-5 h-5 mr-2 text-green-500" />
                        <span>20GB Protected Data</span>
                      </li>
                      <li className="flex items-center">
                        <Radio className="w-5 h-5 mr-2 text-green-500" />
                        <span>Global IMSI Protection</span>
                      </li>
                      <li className="flex items-center">
                        <Lock className="w-5 h-5 mr-2 text-green-500" />
                        <span>Advanced SS7 Firewall</span>
                      </li>
                      <li className="flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-green-500" />
                        <span>Active IMSI Catcher Defense</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/checkout?plan=pro">Choose Advanced</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-muted">
                  <CardHeader>
                    <CardTitle>Military Grade</CardTitle>
                    <CardDescription>Nation-state level protection</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">549 kr</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <Signal className="w-5 h-5 mr-2 text-green-500" />
                        <span>Unlimited Protected Data</span>
                      </li>
                      <li className="flex items-center">
                        <Radio className="w-5 h-5 mr-2 text-green-500" />
                        <span>Quantum-Safe Encryption</span>
                      </li>
                      <li className="flex items-center">
                        <Lock className="w-5 h-5 mr-2 text-green-500" />
                        <span>Multi-Network Routing</span>
                      </li>
                      <li className="flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-green-500" />
                        <span>Zero-Knowledge Protocol</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/checkout?plan=ultimate">Choose Military</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="yearly">
              {/* Similar structure as monthly but with discounted prices */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Security Concerns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>What about IMSI catchers?</CardTitle>
                <CardDescription>
                  Our Dynamic IMSI Protection™ makes your phone invisible to IMSI catchers and stingray devices.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Is SS7 still vulnerable?</CardTitle>
                <CardDescription>
                  We use proprietary SS7 firewall technology to block all known SS7 attack vectors.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How's the coverage?</CardTitle>
                <CardDescription>
                  We maintain secure roaming agreements with trusted carriers worldwide, ensuring protection everywhere.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What about 5G security?</CardTitle>
                <CardDescription>
                  Our network adds additional encryption layers even to 5G's existing security features.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-destructive text-destructive-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stop Broadcasting Your Data</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every minute on an unsecured network puts your privacy at risk.
          </p>
          <Button size="lg" variant="secondary">
            Secure Your Signal Now
          </Button>
        </div>
      </section>
    </main>
  )
}