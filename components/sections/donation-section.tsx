import { Phone } from "lucide-react"

export default function DonationSection() {
  return (
    <section className="bg-emerald-100 px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-xl bg-white p-8 shadow-lg md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-medium text-slate-900 md:text-4xl">
              Support Our <span className="text-emerald-700">Mission</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Help us expand our impact by donating to our cause. Your contribution will help us acquire materials,
              improve our workshop, and spread sustainable fashion practices.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center rounded-full bg-emerald-100 p-4">
                <Phone className="h-8 w-8 text-emerald-700" />
              </div>
              <p className="mt-4 text-xl font-medium">Call us to learn how you can help</p>
              <a href="tel:+21673123456" className="mt-2 text-2xl font-bold text-emerald-700 hover:underline">
                +216 73 123 456
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

