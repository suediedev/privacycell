import { Shield, Lock, Eye, Server, AlertTriangle, Signal, Radio, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-white/10" />
        </div>
        <div className="container px-4 mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Cell Signal is Being Intercepted
          </h1>
          <p className="text-xl md:text-2xl text-destructive mb-8 max-w-2xl mx-auto">
            Traditional carriers expose your IMSI, TMSI, and cell tower data to anyone with a $50 interceptor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="destructive" asChild>
              <Link href="/plans">Protect Your Signal</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#exposure">See What's Exposed</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Exposure Section */}
      <section id="exposure" className="py-24 bg-destructive/5">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Your Current Carrier is Leaking Data</h2>
          <p className="text-xl text-destructive text-center mb-16 max-w-2xl mx-auto">
            Every time your phone connects to a cell tower, it broadcasts sensitive data
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Signal className="w-12 h-12 mb-4 text-destructive" />
                <CardTitle>Cell Tower Triangulation</CardTitle>
                <CardDescription>
                  Your phone connects to multiple towers, allowing precise location tracking through TDOA and RSSI data.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Radio className="w-12 h-12 mb-4 text-destructive" />
                <CardTitle>SS7 Protocol Exposure</CardTitle>
                <CardDescription>
                  Legacy SS7 networks allow interception of SMS, calls, and location data through network vulnerabilities.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Smartphone className="w-12 h-12 mb-4 text-destructive" />
                <CardTitle>IMSI Catcher Vulnerable</CardTitle>
                <CardDescription>
                  Your IMSI/IMEI identifiers are exposed to fake cell towers (stingrays) used by attackers.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">PrivacyTel's Secure Network Architecture</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Military-grade protection for your cellular communications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-muted">
              <CardHeader>
                <CardTitle>Traditional Carrier</CardTitle>
                <CardDescription>Vulnerable Network</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">399 kr</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>✓ Standard GSM/LTE</li>
                  <li>✓ Basic Coverage</li>
                  <li className="text-destructive">✗ IMSI Exposed</li>
                  <li className="text-destructive">✗ Location Tracked</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Maximum Security
              </div>
              <CardHeader>
                <CardTitle>PrivacyTel</CardTitle>
                <CardDescription>Encrypted Network</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">349 kr</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>✓ Dynamic IMSI Rotation</li>
                  <li>✓ Encrypted VoLTE</li>
                  <li>✓ Anti-IMSI Catcher</li>
                  <li>✓ Location Masking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-muted">
              <CardHeader>
                <CardTitle>Other Carriers</CardTitle>
                <CardDescription>Basic Network</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">429 kr</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>✓ Standard GSM/LTE</li>
                  <li>✓ Basic Coverage</li>
                  <li className="text-destructive">✗ SS7 Vulnerable</li>
                  <li className="text-destructive">✗ Data Exposed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Advanced Cellular Protection</h2>
          <p className="text-xl text-primary-foreground/80 text-center mb-16 max-w-2xl mx-auto">
            Our proprietary network architecture ensures complete signal privacy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Dynamic IMSI Protection™</h3>
              <p>Our network rotates your IMSI identifier every 15 minutes, making tracking impossible.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Quantum-Resistant Encryption</h3>
              <p>Post-quantum cryptography protects against future decryption attempts.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/technology">View Network Architecture</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}