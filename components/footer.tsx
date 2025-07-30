import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-poppins font-bold text-2xl text-red-400 mb-4">Ritagracesmith</h3>
            <p className="text-gray-300 mb-6">
              Smarter email campaigns, automated for engagement. Transform your marketing with AI-powered automation.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <MapPin size={16} />
              <span>Austin, Texas</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Phone size={16} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail size={16} />
              <span>hello@ritagracesmith.com</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-red-400 transition-colors">
                  Career Openings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-red-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-red-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-red-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-300 hover:text-red-400 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-300 hover:text-red-400 transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-red-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-300 hover:text-red-400 transition-colors">
                  Whitepapers & Guides
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-300 hover:text-red-400 transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-red-400 transition-colors">
                  Support Request
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 Ritagracesmith Solutions. All rights reserved.</p>
          <p className="text-gray-400">
            <Link
              href="https://salescentri.com?utm_source=ritagracesmith.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-black hover:text-red-400 transition-colors"
            >
              Powered by Sales Intelligence Platform
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
