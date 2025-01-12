"use client"

import { Shield, Lock, Smartphone, Key, Wifi, Clock, Globe, MessageSquare, Phone, Database, UserX, FileKey } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Features That Matter
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every feature is designed with your privacy in mind, giving you complete control over your communications.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>End-to-End Encryption</CardTitle>
                <CardDescription>
                  Military-grade AES-256 encryption for all your calls, messages, and data.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <UserX className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Zero Data Collection</CardTitle>
                <CardDescription>
                  We don't collect, store, or analyze any of your personal data or metadata.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileKey className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Personal Key Management</CardTitle>
                <CardDescription>
                  You own and control your encryption keys. No backdoors, no exceptions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Global Coverage</CardTitle>
                <CardDescription>
                  Secure roaming in over 180 countries with local encryption laws compliance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Secure Messaging</CardTitle>
                <CardDescription>
                  Built-in encrypted messaging platform with self-destructing messages.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Secure Cloud Backup</CardTitle>
                <CardDescription>
                  Optional encrypted backup of your messages and contacts.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Compare</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">PrivacyTel</th>
                  <th className="py-4 px-6 text-center">Traditional Carriers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6">End-to-End Encryption</td>
                  <td className="py-4 px-6 text-center text-green-500">✓</td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Zero Data Collection</td>
                  <td className="py-4 px-6 text-center text-green-500">✓</td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Personal Key Management</td>
                  <td className="py-4 px-6 text-center text-green-500">✓</td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Metadata Protection</td>
                  <td className="py-4 px-6 text-center text-green-500">✓</td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Privacy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of privacy-conscious individuals who have already made the switch.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/plans">View Plans</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}