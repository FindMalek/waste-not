import { Heart, Leaf, Recycle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export default function FeaturesSection() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-medium text-slate-900 md:text-4xl">
          Why Choose <span className="text-emerald-700">Waste Not</span>
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <Recycle className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Sustainable Materials</h3>
              <p className="mt-2 text-slate-600">
                Each tote bag is handcrafted from disposed jeans, giving new life to materials that would otherwise end
                up in landfills.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <Heart className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Handmade with Care</h3>
              <p className="mt-2 text-slate-600">
                Our team of passionate students puts love and attention into every stitch, ensuring quality and
                uniqueness.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <Leaf className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Positive Impact</h3>
              <p className="mt-2 text-slate-600">
                By supporting Waste Not, you&apos;re contributing to a cleaner planet and promoting sustainable fashion
                practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

