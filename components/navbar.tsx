"use client"

import { Shield, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isSignedIn, user } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">PrivacyTel</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-foreground/80 hover:text-foreground">Features</Link>
            <Link href="/plans" className="text-foreground/80 hover:text-foreground">Plans</Link>
            <Link href="/technology" className="text-foreground/80 hover:text-foreground">Technology</Link>
            <Link href="/docs" className="text-foreground/80 hover:text-foreground">Documentation</Link>
            {isSignedIn ? (
              <>
                <Link href="/dashboard">
                  <Button variant="outline">Dashboard</Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button>Get Started</Button>
                </SignUpButton>
              </>
            )}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/features" className="block px-3 py-2 text-foreground/80 hover:text-foreground">Features</Link>
              <Link href="/plans" className="block px-3 py-2 text-foreground/80 hover:text-foreground">Plans</Link>
              <Link href="/technology" className="block px-3 py-2 text-foreground/80 hover:text-foreground">Technology</Link>
              <Link href="/docs" className="block px-3 py-2 text-foreground/80 hover:text-foreground">Documentation</Link>
              {isSignedIn ? (
                <>
                  <Link href="/dashboard" className="block px-3 py-2">
                    <Button variant="outline" className="w-full">Dashboard</Button>
                  </Link>
                  <div className="px-3 py-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </>
              ) : (
                <>
                  <div className="px-3 py-2">
                    <SignInButton mode="modal">
                      <Button variant="ghost" className="w-full">Sign In</Button>
                    </SignInButton>
                  </div>
                  <div className="px-3 py-2">
                    <SignUpButton mode="modal">
                      <Button className="w-full">Get Started</Button>
                    </SignUpButton>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}