import Link from "next/link"
import { Facebook, Heart, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                <Image src="/logo.png" alt="Waste Not Logo" className="h-full w-full object-cover" width={100} height={100} />
              </div>
              <span className="font-serif text-xl font-medium text-white">Waste Not</span>
            </Link>
            <p className="mt-4">
              Turning old fabrics into new fashion. A student initiative from the Faculty of Arts and Humanities of
              Sousse.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-emerald-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-emerald-400">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-emerald-400" />
                <a href="tel:+21673123456" className="hover:text-emerald-400">
                  +216 73 123 456
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-emerald-400" />
                <a href="mailto:contact@wastenot.org" className="hover:text-emerald-400">
                  contact@wastenot.org
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-emerald-400 shrink-0 mt-1" />
                <span>Faculty of Arts and Humanities, Sousse, Tunisia</span>
              </li>
            </ul>

            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-emerald-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-emerald-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-emerald-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Waste Not. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center text-sm text-slate-400">
            Made with <Heart className="mx-1 h-4 w-4 text-emerald-500" />by  <Link href="https://www.findmalek.com" className="text-white hover:text-emerald-400 pl-1">Malek Gara-Hellal</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

