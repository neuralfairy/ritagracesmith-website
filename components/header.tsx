"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-poppins font-bold text-2xl text-red-600">
            Ritagracesmith
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-red-600 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-red-600 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="btn-primary">
              <Link href="https://salescentri.com/demo?utm_source=ritagracesmith.com&utm_medium=header&utm_campaign=book_demo">
                Book Demo
              </Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/features" className="text-gray-700 hover:text-red-600">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-red-600">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-red-600">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600">
                Contact
              </Link>
              <Button asChild className="btn-primary w-full">
                <Link href="https://salescentri.com/demo?utm_source=ritagracesmith.com&utm_medium=mobile_menu&utm_campaign=book_demo">
                  Book Demo
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
