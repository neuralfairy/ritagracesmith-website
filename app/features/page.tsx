import Features from "@/components/features"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Workflow, Shield } from "lucide-react"
import Link from "next/link"

const additionalFeatures = [
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description: "Create complex automation sequences with our intuitive drag-and-drop interface",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and advanced data protection",
  },
]

export default function FeaturesPage() {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
              Powerful Features for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Email Success
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, automate, and optimize your email marketing campaigns
            </p>
          </div>
        </div>
      </section>

      <Features />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your email marketing to the next level with these powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                      <feature.icon size={24} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="btn-primary">
              <Link href="https://salescentri.com/trial?utm_source=ritagracesmith.com&utm_medium=features&utm_campaign=start_trial">
                Start Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
