"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import Link from "next/link"

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-2xl">
        <CardHeader className="relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
          <CardTitle className="text-2xl font-poppins font-bold text-center">Wait! Don't Miss Out</CardTitle>
          <CardDescription className="text-center">
            Get a custom email marketing strategy for your business
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">FREE</div>
            <div className="text-lg font-semibold mb-4">Email Marketing Audit</div>
            <p className="text-gray-600 mb-6">
              Our experts will analyze your current email marketing and provide personalized recommendations to boost
              your ROI.
            </p>
          </div>

          <div className="space-y-3">
            <Input placeholder="Enter your email address" type="email" />
            <Input placeholder="Company name" />
            <Button asChild className="btn-primary w-full">
              <Link href="https://salescentri.com/quote?utm_source=ritagracesmith.com&utm_medium=exit_popup&utm_campaign=request_quote">
                Request Free Audit
              </Link>
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">No spam, unsubscribe anytime. We respect your privacy.</p>
        </CardContent>
      </Card>
    </div>
  )
}
