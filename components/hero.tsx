import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-20 pb-16 gradient-bg min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-gray-900 mb-6 animate-fade-in-up">
            Smarter Email Campaigns,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Automated for Engagement
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Transform your email marketing with AI-powered automation that delivers personalized campaigns, boosts
            engagement rates, and drives conversions on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
              <Link href="https://salescentri.com/trial?utm_source=ritagracesmith.com&utm_medium=hero&utm_campaign=start_trial">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4 bg-transparent">
              <Link href="https://salescentri.com/demo?utm_source=ritagracesmith.com&utm_medium=hero&utm_campaign=book_demo">
                <Play className="mr-2 h-5 w-5" />
                Book a Demo
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">85%</div>
              <div className="text-gray-600">Open Rate Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">10k+</div>
              <div className="text-gray-600">Businesses Trust Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
