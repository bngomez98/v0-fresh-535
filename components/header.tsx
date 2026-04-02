"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Heart, Users } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/my-district", label: "My District" },
    { href: "/analysis", label: "The Problem" },
    { href: "/solution", label: "The Solution" },
    { href: "/data", label: "Data & Evidence" },
    { href: "/resources", label: "Resources" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-header shadow-sm border-b" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2.5 group">
            <Image
              src="/brand-logo.png"
              alt="Fresh 535 Logo"
              width={40}
              height={40}
              className="transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="text-xl font-semibold tracking-tight text-primary font-inter">FRESH 535</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild className="bg-transparent btn-professional">
              <Link href="/donate">
                <Heart className="h-4 w-4 mr-1.5" />
                Donate
              </Link>
            </Button>
            <Button asChild size="sm" variant="destructive" className="btn-professional">
              <Link href="/pledge">
                <Users className="h-4 w-4 mr-1.5" />
                Take the Pledge
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t">
          <div className="container mx-auto container-padding py-4 flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2.5 px-4 text-center font-medium rounded-lg transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2.5 pt-4 mt-2 border-t">
              <div className="flex justify-center pb-2">
                <ThemeToggle />
              </div>
              <Button variant="outline" className="w-full bg-transparent btn-professional" asChild>
                <Link href="/donate">
                  <Heart className="h-4 w-4 mr-1.5" />
                  Donate
                </Link>
              </Button>
              <Button variant="destructive" className="w-full btn-professional" asChild>
                <Link href="/pledge">
                  <Users className="h-4 w-4 mr-1.5" />
                  Take the Pledge
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
