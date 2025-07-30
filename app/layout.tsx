import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ExitPopup from "@/components/exit-popup"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Ritagracesmith Solutions - Email Marketing Automation Platform",
  description:
    "Smarter Email Campaigns, Automated for Engagement. Boost your email marketing ROI with our advanced automation platform.",
  keywords: "email marketing automation, drip campaigns, B2B email marketing, marketing sequences",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Ritagracesmith Solutions",
              applicationCategory: "BusinessApplication",
              description: "Email Marketing Automation Platform for B2B businesses",
              url: "https://ritagracesmith.com",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free trial available",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <ExitPopup />
      </body>
    </html>
  )
}
