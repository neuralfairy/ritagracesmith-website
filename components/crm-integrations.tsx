import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

const integrations = [
  {
    name: "Salesforce",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Sync contacts, leads, and opportunities seamlessly",
  },
  {
    name: "HubSpot",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Complete marketing automation integration",
  },
  {
    name: "Pipedrive",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Pipeline-driven email sequences",
  },
  {
    name: "Zoho CRM",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Unified customer data management",
  },
  {
    name: "Microsoft Dynamics",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Enterprise-grade CRM integration",
  },
  {
    name: "ActiveCampaign",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Advanced automation workflows",
  },
]

const features = [
  "Real-time data synchronization",
  "Bi-directional contact updates",
  "Automated lead scoring",
  "Custom field mapping",
  "Trigger-based campaigns",
  "Advanced segmentation",
]

export default function CRMIntegrations() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Seamless{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              CRM Integration
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your existing tools and workflows for a unified marketing experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center card-hover bg-white">
                <CardHeader>
                  <img
                    src={integration.logo || "/placeholder.svg"}
                    alt={`${integration.name} logo`}
                    className="h-12 mx-auto mb-4"
                  />
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{integration.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-xl bg-white">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-6">Everything Works Together</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Our platform integrates with your existing CRM to create a seamless workflow that saves time and
                    improves results.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="btn-primary">
                    <Link href="https://salescentri.com/integrations?utm_source=ritagracesmith.com&utm_medium=crm_integrations&utm_campaign=psa_integrations">
                      View All Integrations
                    </Link>
                  </Button>
                </div>

                <div className="relative">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="CRM Integration Dashboard"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
