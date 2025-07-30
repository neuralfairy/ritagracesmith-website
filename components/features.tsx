"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Users, BarChart3, Zap, Target, Brain } from "lucide-react"

const features = [
  {
    icon: Mail,
    title: "Drip Sequences",
    description: "Create sophisticated email sequences that nurture leads automatically",
    details:
      "Build complex workflows with conditional logic, timing controls, and personalized content that adapts to subscriber behavior.",
  },
  {
    icon: Users,
    title: "Contact Tagging",
    description: "Segment and organize your audience with intelligent tagging",
    details:
      "Automatically tag contacts based on behavior, demographics, and engagement patterns for hyper-targeted campaigns.",
  },
  {
    icon: BarChart3,
    title: "A/B Testing",
    description: "Optimize campaigns with built-in split testing capabilities",
    details: "Test subject lines, content, send times, and more to continuously improve your email performance.",
  },
  {
    icon: Zap,
    title: "Automation Triggers",
    description: "Launch campaigns based on user actions and behaviors",
    details:
      "Set up triggers for website visits, purchases, form submissions, and custom events to send timely, relevant emails.",
  },
  {
    icon: Target,
    title: "Personalization Engine",
    description: "Deliver personalized content at scale",
    details:
      "Use dynamic content blocks, merge tags, and AI-powered recommendations to create unique experiences for each subscriber.",
  },
  {
    icon: Brain,
    title: "AI Optimization",
    description: "Let AI optimize send times and content for maximum engagement",
    details:
      "Machine learning algorithms analyze subscriber behavior to determine optimal send times and content preferences.",
  },
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Email Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, automate, and optimize your email marketing campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "border-red-500 shadow-lg bg-red-50"
                    : "border-gray-200 hover:border-red-300"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg ${
                        activeFeature === index ? "bg-red-500 text-white" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <feature.icon size={24} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:pl-8">
            <Card className="border-red-200 shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-500 text-white rounded-lg">
                    {React.createElement(features[activeFeature].icon, { size: 32 })}
                  </div>
                  <CardTitle className="text-2xl">{features[activeFeature].title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg mb-6">{features[activeFeature].details}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="btn-primary">
                    <Link href="https://salescentri.com/demo?utm_source=ritagracesmith.com&utm_medium=features&utm_campaign=interactive_demo">
                      Interactive Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="btn-secondary bg-transparent">
                    <Link href="https://salescentri.com/recommendations?utm_source=ritagracesmith.com&utm_medium=features&utm_campaign=custom_recommendations">
                      Custom Recommendations
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
