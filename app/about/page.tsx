import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Award, Target } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Rita Grace Smith",
    title: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former VP of Marketing at Fortune 500 companies with 15+ years in email marketing automation.",
  },
  {
    name: "Michael Chen",
    title: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ex-Google engineer specializing in AI and machine learning applications for marketing technology.",
  },
  {
    name: "Sarah Johnson",
    title: "VP of Customer Success",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Customer success expert who has helped 1000+ businesses optimize their email marketing strategies.",
  },
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by our customers' ROI and growth metrics",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Every feature we build starts with understanding our customers' needs",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We continuously push the boundaries of what's possible in email marketing",
  },
]

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Ritagracesmith
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to help businesses build meaningful relationships with their customers through
              intelligent email marketing automation.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>Founded in Austin, Texas • 2019</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-hover">
                <CardHeader>
                  <div className="mx-auto p-4 bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <value.icon size={32} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate experts behind Ritagracesmith Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {team.map((member, index) => (
              <Card key={index} className="text-center card-hover">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-red-600 font-semibold">{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">Join Our Growing Team</h3>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for innovation
            </p>
            <Button asChild className="btn-primary">
              <Link href="https://salescentri.com/careers?utm_source=ritagracesmith.com&utm_medium=about&utm_campaign=career_openings">
                View Career Openings
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
