import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Ultimate Guide to Email Automation Sequences",
    excerpt: "Learn how to create high-converting drip campaigns that nurture leads and drive sales on autopilot.",
    author: "Rita Grace Smith",
    date: "2024-01-15",
    category: "Email Automation",
    image: "/placeholder.svg?height=300&width=500",
    slug: "ultimate-guide-email-automation-sequences",
  },
  {
    title: "B2B Email Marketing: Best Practices for 2024",
    excerpt: "Discover the latest strategies and tactics that are driving results for B2B companies this year.",
    author: "Michael Chen",
    date: "2024-01-12",
    category: "B2B Marketing",
    image: "/placeholder.svg?height=300&width=500",
    slug: "b2b-email-marketing-best-practices-2024",
  },
  {
    title: "How to Increase Email Open Rates by 300%",
    excerpt: "Proven techniques to craft subject lines and optimize send times for maximum engagement.",
    author: "Sarah Johnson",
    date: "2024-01-10",
    category: "Email Optimization",
    image: "/placeholder.svg?height=300&width=500",
    slug: "increase-email-open-rates-300-percent",
  },
  {
    title: "Marketing Sequences That Convert: A Step-by-Step Guide",
    excerpt: "Build sophisticated email sequences that guide prospects through your sales funnel.",
    author: "Rita Grace Smith",
    date: "2024-01-08",
    category: "Marketing Sequences",
    image: "/placeholder.svg?height=300&width=500",
    slug: "marketing-sequences-that-convert-guide",
  },
  {
    title: "Advanced Segmentation Strategies for Email Marketing",
    excerpt: "Go beyond basic demographics to create hyper-targeted campaigns that resonate.",
    author: "Michael Chen",
    date: "2024-01-05",
    category: "Segmentation",
    image: "/placeholder.svg?height=300&width=500",
    slug: "advanced-segmentation-strategies-email-marketing",
  },
  {
    title: "The Psychology of Email Marketing: What Makes People Click",
    excerpt: "Understanding the psychological triggers that drive email engagement and conversions.",
    author: "Sarah Johnson",
    date: "2024-01-03",
    category: "Psychology",
    image: "/placeholder.svg?height=300&width=500",
    slug: "psychology-email-marketing-what-makes-people-click",
  },
]

const categories = [
  "All",
  "Email Automation",
  "B2B Marketing",
  "Email Optimization",
  "Marketing Sequences",
  "Segmentation",
  "Psychology",
]

export default function BlogPage() {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
              Email Marketing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert tips, strategies, and insights to help you master email marketing automation
            </p>
          </div>

          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Input placeholder="Search articles..." className="pr-12" />
              <Button size="sm" className="absolute right-1 top-1 btn-primary">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "btn-primary" : "btn-secondary"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2 hover:text-red-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full btn-secondary bg-transparent">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="max-w-md mx-auto shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Stay Updated</CardTitle>
                <CardDescription>Get the latest email marketing insights delivered to your inbox</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter your email address" type="email" />
                <Button asChild className="btn-primary w-full">
                  <Link href="https://salescentri.com/guides?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=whitepapers_guides">
                    Subscribe & Get Free Guides
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
