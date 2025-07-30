import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Zap className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">Ready to Transform Your Email Marketing?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join thousands of businesses already seeing incredible results with our platform
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              <Link href="https://salescentri.com/trial?utm_source=ritagracesmith.com&utm_medium=cta&utm_campaign=start_trial">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg bg-transparent"
            >
              <Link href="https://salescentri.com/demo?utm_source=ritagracesmith.com&utm_medium=cta&utm_campaign=book_demo">
                Book a Demo
              </Link>
            </Button>
          </div>

          <p className="text-lg opacity-80">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
