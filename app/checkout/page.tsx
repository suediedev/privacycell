"use client"

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

const plans = {
  basic: {
    name: "Basic Privacy",
    price: "249 kr",
    features: [
      "10GB Encrypted Data",
      "Unlimited Secure Calls (Sweden)",
      "End-to-End Encryption",
      "Zero Data Collection"
    ]
  },
  pro: {
    name: "Pro Privacy",
    price: "349 kr",
    features: [
      "20GB Encrypted Data",
      "Unlimited Global Secure Calls",
      "Priority Network Access",
      "Secure Cloud Backup"
    ]
  },
  ultimate: {
    name: "Ultimate Privacy",
    price: "549 kr",
    features: [
      "Unlimited Encrypted Data",
      "Global Secure Calls & Roaming",
      "Multi-Device Support",
      "24/7 Priority Support"
    ]
  }
}

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const planId = searchParams.get('plan')
  const plan = planId ? plans[planId as keyof typeof plans] : plans.pro
  const { toast } = useToast()
  
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would handle payment processing and account creation
    toast({
      title: "Order Submitted",
      description: "We'll contact you shortly to complete your registration.",
    })
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="container px-4 mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Order Summary */}
            <div className="md:w-1/2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review your selected plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold">{plan.name}</h3>
                      <p className="text-2xl font-bold mt-2">{plan.price}</p>
                      <p className="text-sm text-muted-foreground">per month</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Includes:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <Shield className="w-4 h-4 mr-2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <div className="md:w-1/2">
              <Card>
                <CardHeader>
                  <CardTitle>Your Information</CardTitle>
                  <CardDescription>Enter your details to get started</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Complete Order
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}