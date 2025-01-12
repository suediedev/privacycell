"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentationPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about PrivacyTel's secure communication system
            </p>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search documentation..."
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#getting-started">Getting Started</a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#security">Security</a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#api">API Reference</a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#faq">FAQ</a>
                  </Button>
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-3xl">
              <div className="space-y-12">
                <section id="getting-started">
                  <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Start Guide</CardTitle>
                      <CardDescription>
                        Follow these steps to set up your secure communication system
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-4 list-decimal list-inside">
                        <li>Choose your plan and complete registration</li>
                        <li>Download the PrivacyTel app</li>
                        <li>Generate your encryption keys</li>
                        <li>Start making secure calls and sending encrypted messages</li>
                      </ol>
                    </CardContent>
                  </Card>
                </section>

                <section id="security">
                  <h2 className="text-3xl font-bold mb-6">Security</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Encryption Protocol</CardTitle>
                        <CardDescription>
                          Understanding our AES-256 implementation
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Our encryption protocol uses AES-256-GCM for data encryption and RSA-4096 for key exchange.
                          All encryption happens on your device before data transmission.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Zero-Knowledge Architecture</CardTitle>
                        <CardDescription>
                          How we ensure your privacy
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Our zero-knowledge architecture ensures that we never have access to your unencrypted data
                          or encryption keys. Learn how this protects your privacy even in case of government requests.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section id="api">
                  <h2 className="text-3xl font-bold mb-6">API Reference</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle>REST API Documentation</CardTitle>
                      <CardDescription>
                        Complete API reference for developers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Authentication</h4>
                          <code className="block bg-muted p-4 rounded-md mt-2">
                            POST /api/auth/token
                          </code>
                        </div>
                        <div>
                          <h4 className="font-semibold">Encryption</h4>
                          <code className="block bg-muted p-4 rounded-md mt-2">
                            POST /api/encrypt
                          </code>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id="faq">
                  <h2 className="text-3xl font-bold mb-6">FAQ</h2>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>How secure is the encryption?</CardTitle>
                        <CardDescription>
                          We use military-grade AES-256 encryption, the same standard used by governments worldwide.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>What happens if I lose my device?</CardTitle>
                        <CardDescription>
                          Your data remains secure. We provide secure backup options and remote wipe capabilities.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions.
          </p>
          <Button size="lg" variant="secondary">
            Contact Support
          </Button>
        </div>
      </section>
    </main> </section>
    </main>
  )
}