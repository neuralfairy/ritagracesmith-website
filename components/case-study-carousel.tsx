"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    company: "TechFlow Solutions",
    industry: "B2B SaaS",
    results: "340% increase in qualified leads",
    revenue: "$2.4M additional revenue",
    quote:
      "Ritagracesmith transformed our email marketing. We went from generic blasts to personalized journeys that actually convert.",
    name: "Sarah Chen",
    title: "VP of Marketing",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    company: "GrowthCorp",
    industry: "E-commerce",
    results: "285% ROI improvement",
    revenue: "$1.8M recovered revenue",
    quote: "The automation sequences helped us recover abandoned carts and turn one-time buyers into loyal customers.",
    name: "Michael Rodriguez",
    title: "Head of Digital Marketing",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    company: "InnovateLab",
    industry: "Professional Services",
    results: "450% engagement increase",
    revenue: "$950K new business",
    quote: "Our nurture campaigns now feel personal and timely. Prospects actually look forward to our emails.",
    name: "Emily Watson",
    title: "Marketing Director",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function CaseStudyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCase = caseStudies[currentSlide]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Real Results from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies like yours are achieving remarkable growth with our platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="h-12 w-12 text-red-600 mb-4" />
                    <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed mb-6">
                      "{currentCase.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="font-semibold text-gray-900">{currentCase.name}</div>
                        <div className="text-gray-600">{currentCase.title}</div>
                        <div className="text-red-600 font-medium">{currentCase.company}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-1">{currentCase.results}</div>
                      <div className="text-sm text-gray-600">Performance Boost</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">{currentCase.revenue}</div>
                      <div className="text-sm text-gray-600">Revenue Impact</div>
                    </div>
                  </div>

                  <Button asChild className="btn-primary w-full">
                    <Link href="https://salescentri.com/success-stories?utm_source=ritagracesmith.com&utm_medium=case_studies&utm_campaign=psa_success_stories">
                      View All Success Stories
                    </Link>
                  </Button>
                </div>

                <div className="relative">
                  <img
                    src={currentCase.image || "/placeholder.svg"}
                    alt={`${currentCase.company} case study`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevSlide} className="p-2 bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextSlide} className="p-2 bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
