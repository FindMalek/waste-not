import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import "@/styles/globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Waste Not - Sustainable Fashion from Recycled Denim",
  description:
    "Turning old fabrics into new fashion. A student initiative from the Faculty of Arts and Humanities of Sousse.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased">
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
      </body>
    </html>
  )
}

