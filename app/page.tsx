import Hero from "@/components/hero"
import Features from "@/components/features"
import ROICalculator from "@/components/roi-calculator"
import CaseStudyCarousel from "@/components/case-study-carousel"
import CRMIntegrations from "@/components/crm-integrations"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ROICalculator />
      <CaseStudyCarousel />
      <CRMIntegrations />
      <Testimonials />
      <CTA />
    </main>
  )
}
