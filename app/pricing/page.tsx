import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: 49,
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 5,000 contacts",
      "Basic email automation",
      "10 email templates",
      "Email support",
      "Basic analytics",
      "A/B testing",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: 149,
    description: "Ideal for growing businesses",
    features: [
      "Up to 25,000 contacts",
      "Advanced automation workflows",
      "Unlimited templates",
      "Priority support",
      "Advanced analytics",
      "CRM integrations",
      "Custom fields",
      "Landing pages",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 399,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited contacts",
      "Custom automation builder",
      "White-label options",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced segmentation",
      "Multi-user permissions",
      "API access",
    ],
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
              Simple, Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative card-hover ${
                  plan.popular ? "border-red-500 shadow-xl scale-105" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-poppins font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>
                  <div className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                    <span className="text-lg text-gray-600 font-normal">/month</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className={`w-full ${plan.popular ? "btn-primary" : "btn-secondary"}`}>
                    <Link href="https://salescentri.com/pricing?utm_source=ritagracesmith.com&utm_medium=pricing&utm_campaign=get_pricing">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">Need a custom solution for your enterprise?</p>
            <Button asChild variant="outline" size="lg" className="btn-secondary bg-transparent">
              <Link href="https://salescentri.com/enterprise?utm_source=ritagracesmith.com&utm_medium=pricing&utm_campaign=enterprise_custom">
                Enterprise & Custom Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
