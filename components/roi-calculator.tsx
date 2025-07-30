"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ROICalculator() {
  const [subscribers, setSubscribers] = useState(1000)
  const [currentOpenRate, setCurrentOpenRate] = useState(20)
  const [avgOrderValue, setAvgOrderValue] = useState(100)
  const [emailsPerMonth, setEmailsPerMonth] = useState(4)

  const calculateROI = () => {
    const improvedOpenRate = currentOpenRate * 1.85 // 85% improvement
    const improvedClickRate = 3.5 // Industry average improvement
    const conversionRate = 2.5 // Conservative conversion rate

    const currentRevenue = subscribers * (currentOpenRate / 100) * 0.02 * avgOrderValue * emailsPerMonth
    const improvedRevenue =
      subscribers *
      (improvedOpenRate / 100) *
      (improvedClickRate / 100) *
      (conversionRate / 100) *
      avgOrderValue *
      emailsPerMonth

    const monthlyIncrease = improvedRevenue - currentRevenue
    const annualIncrease = monthlyIncrease * 12
    const roi = ((annualIncrease - 1200) / 1200) * 100 // Assuming $100/month cost

    return {
      currentRevenue: Math.round(currentRevenue),
      improvedRevenue: Math.round(improvedRevenue),
      monthlyIncrease: Math.round(monthlyIncrease),
      annualIncrease: Math.round(annualIncrease),
      roi: Math.round(roi),
    }
  }

  const results = calculateROI()

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Calculate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Email ROI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much revenue you could generate with our email automation platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calculator className="h-8 w-8 text-red-600" />
                  <CardTitle className="text-2xl">ROI Calculator</CardTitle>
                </div>
                <CardDescription>Enter your current email marketing metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="subscribers">Email Subscribers</Label>
                  <Input
                    id="subscribers"
                    type="number"
                    value={subscribers}
                    onChange={(e) => setSubscribers(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="openRate">Current Open Rate (%)</Label>
                  <Input
                    id="openRate"
                    type="number"
                    value={currentOpenRate}
                    onChange={(e) => setCurrentOpenRate(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="orderValue">Average Order Value ($)</Label>
                  <Input
                    id="orderValue"
                    type="number"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="emailsPerMonth">Emails per Month</Label>
                  <Input
                    id="emailsPerMonth"
                    type="number"
                    value={emailsPerMonth}
                    onChange={(e) => setEmailsPerMonth(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-red-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                  <CardTitle className="text-2xl">Your Potential Results</CardTitle>
                </div>
                <CardDescription>Based on average improvements with our platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-600">${results.currentRevenue.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Current Monthly Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">${results.improvedRevenue.toLocaleString()}</div>
                    <div className="text-sm text-red-500">Projected Monthly Revenue</div>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg">
                  <div className="text-3xl font-bold mb-2">${results.annualIncrease.toLocaleString()}</div>
                  <div className="text-lg">Additional Annual Revenue</div>
                  <div className="text-sm opacity-90 mt-2">{results.roi}% ROI</div>
                </div>

                <Button asChild className="btn-primary w-full text-lg py-4">
                  <Link href="https://salescentri.com/trial?utm_source=ritagracesmith.com&utm_medium=roi_calculator&utm_campaign=start_trial">
                    Start Free Trial - See Real Results
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
