"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "How does email marketing automation work?",
    answer:
      "Email marketing automation uses triggers and workflows to send personalized emails based on subscriber behavior, preferences, and actions. Our platform monitors user interactions and automatically sends relevant messages at the optimal time.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Our customers typically see a 200-300% increase in email engagement, 85% improvement in open rates, and significant ROI improvements. Results vary based on industry, list size, and implementation strategy.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Basic setup can be completed in under 30 minutes. Our onboarding team will help you import contacts, create your first automation sequence, and integrate with your existing tools within the first week.",
  },
  {
    question: "Do you integrate with my existing CRM?",
    answer:
      "Yes, we integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, Zoho, and many others. Our integration ensures seamless data synchronization and unified customer profiles.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start, and you can cancel anytime during the trial period.",
  },
  {
    question: "What support do you provide?",
    answer:
      "We provide 24/7 email support, live chat during business hours, comprehensive documentation, video tutorials, and dedicated account managers for enterprise customers.",
  },
  {
    question: "How do you ensure email deliverability?",
    answer:
      "We maintain high deliverability rates through dedicated IP addresses, authentication protocols (SPF, DKIM, DMARC), reputation monitoring, and partnerships with major email providers.",
  },
  {
    question: "Can I customize email templates?",
    answer:
      "Our drag-and-drop editor allows you to create custom templates, or you can choose from our library of professionally designed templates. You can also import your own HTML templates.",
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <main className="pt-20 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our email marketing automation platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader className="cursor-pointer" onClick={() => toggleItem(index)}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-red-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                  </CardHeader>
                  {openItems.includes(index) && (
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            <Card className="shadow-xl text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Still have questions?</CardTitle>
                <CardDescription>Our support team is here to help you get the most out of our platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="btn-primary">
                    <Link href="https://salescentri.com/support?utm_source=ritagracesmith.com&utm_medium=faq&utm_campaign=submit_ticket">
                      Submit Ticket
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="btn-secondary bg-transparent">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
