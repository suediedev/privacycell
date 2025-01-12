"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Lock, Smartphone, Key, Wifi, Clock, Globe, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Encryption } from '@/lib/encryption'

export default function TechnologyPage() {
  const [message, setMessage] = useState('')
  const [encryptedMessage, setEncryptedMessage] = useState('')
  const [decryptedMessage, setDecryptedMessage] = useState('')
  const [key, setKey] = useState<CryptoKey | null>(null)

  const handleGenerateKey = async () => {
    const newKey = await Encryption.generateKey()
    setKey(newKey)
  }

  const handleEncrypt = async () => {
    if (!key || !message) return
    const encrypted = await Encryption.encrypt(message, key)
    setEncryptedMessage(encrypted)
  }

  const handleDecrypt = async () => {
    if (!key || !encryptedMessage) return
    const decrypted = await Encryption.decrypt(encryptedMessage, key)
    setDecryptedMessage(decrypted)
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Technology
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience our military-grade encryption technology firsthand
          </p>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Try Our Encryption</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <Button onClick={handleGenerateKey} className="mb-4">
                    Generate Encryption Key
                  </Button>
                  {key && <p className="text-sm text-muted-foreground">✓ Key generated</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message to Encrypt</label>
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter a message to encrypt"
                    className="mb-2"
                  />
                  <Button onClick={handleEncrypt} disabled={!key || !message}>
                    Encrypt Message
                  </Button>
                </div>

                {encryptedMessage && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Encrypted Message</label>
                    <div className="p-4 bg-muted rounded-md break-all">
                      {encryptedMessage}
                    </div>
                  </div>
                )}

                {encryptedMessage && (
                  <div>
                    <Button onClick={handleDecrypt} className="mb-2">
                      Decrypt Message
                    </Button>
                    {decryptedMessage && (
                      <div className="p-4 bg-muted rounded-md">
                        <p className="font-medium">Decrypted Message:</p>
                        <p>{decryptedMessage}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Encryption Standards</CardTitle>
                <CardDescription>Our encryption standards ensure maximum security</CardDescription>
                <div className="mt-4 space-y-2">
                  <div>• AES-256-GCM for data encryption</div>
                  <div>• RSA-4096 for key exchange</div>
                  <div>• Perfect Forward Secrecy</div>
                  <div>• Zero-knowledge architecture</div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Network Security</CardTitle>
                <CardDescription>Comprehensive network protection measures</CardDescription>
                <div className="mt-4 space-y-2">
                  <div>• End-to-end encrypted VoIP</div>
                  <div>• Encrypted DNS queries</div>
                  <div>• TLS 1.3 for all connections</div>
                  <div>• No metadata retention</div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Security Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Clock className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Real-Time Encryption</CardTitle>
                <CardDescription>
                  All data is encrypted instantly before leaving your device
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Key className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Key Management</CardTitle>
                <CardDescription>
                  Encryption keys never leave your device
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Zero Knowledge</CardTitle>
                <CardDescription>
                  We can't access your data, even if required by law
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience True Privacy</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the thousands who have already switched to secure communications.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/plans">Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}