import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer Park",
    title: "Marketing Manager",
    company: "TechStart Inc.",
    rating: 5,
    text: "Our email open rates increased by 200% in just 3 months. The automation features are incredible!",
  },
  {
    name: "David Thompson",
    title: "CEO",
    company: "GrowthLab",
    rating: 5,
    text: "Best investment we made this year. The ROI speaks for itself - $500K in additional revenue.",
  },
  {
    name: "Lisa Rodriguez",
    title: "Digital Marketing Director",
    company: "ScaleUp Solutions",
    rating: 5,
    text: "The personalization engine is game-changing. Our customers actually engage with our emails now.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses that have transformed their email marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                  <div className="text-red-600 font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
