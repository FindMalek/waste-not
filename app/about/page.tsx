import { ArrowRight, Leaf, Recycle, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-emerald-100 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="md:w-1/2">
              <h1 className="font-serif text-4xl font-medium tracking-tight text-slate-900 md:text-5xl">
                About <span className="text-emerald-700">Waste Not</span>
              </h1>
              <p className="mt-6 text-lg text-slate-700">
                Waste Not is a student-led initiative from the Faculty of Arts and Humanities of Sousse, dedicated to
                transforming disposed fabrics into beautiful, functional fashion accessories.
              </p>
              <p className="mt-4 text-lg text-slate-700">
                Our mission is to promote sustainability through creative upcycling, reducing textile waste while
                providing unique, handcrafted products to our community.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                  <Link href="/#products">
                    See Our Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative md:w-1/2">
              <div className="overflow-hidden rounded-lg bg-white p-4 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Waste Not Team"
                  className="h-auto w-full rounded-md"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg bg-emerald-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-3xl font-medium text-slate-900 md:text-4xl">
            Our <span className="text-emerald-700">Story</span>
          </h2>
          <div className="mt-8 space-y-6 text-lg text-slate-700">
            <p>
              Waste Not began as a class project in 2023 when a group of environmentally conscious students noticed the
              amount of textile waste being generated in our community. Inspired by the principles of circular economy,
              we decided to focus on one of the most durable and versatile fabrics: denim.
            </p>
            <p>
              What started as a small experiment has grown into a passionate initiative with a clear mission: to
              transform disposed jeans into stylish, functional tote bags while raising awareness about sustainable
              fashion practices.
            </p>
            <p>
              Each Waste Not tote bag is unique, carrying the character and history of the original denim while giving
              it a new purpose. Our team carefully selects, cleans, and transforms these materials by hand, ensuring
              quality and durability in every product.
            </p>
            <p>
              Today, we're proud to be making a small but meaningful impact in our community, one tote bag at a time.
              We're constantly learning, growing, and exploring new ways to expand our sustainable fashion line.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-emerald-50 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-3xl font-medium text-slate-900 md:text-4xl">
            Our <span className="text-emerald-700">Values</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <Recycle className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Sustainability</h3>
              <p className="mt-4 text-slate-700">
                We believe in reducing waste and giving new life to materials that would otherwise end up in landfills.
                Every tote bag represents our commitment to a more sustainable future.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <Users className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Community</h3>
              <p className="mt-4 text-slate-700">
                We're proud to be part of the Faculty of Arts and Humanities of Sousse and aim to engage our local
                community in sustainable practices through workshops, events, and collaborations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <Leaf className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Education</h3>
              <p className="mt-4 text-slate-700">
                We believe in the power of education to drive change. Through our work, we aim to raise awareness about
                sustainable fashion and inspire others to make more environmentally conscious choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-3xl font-medium text-slate-900 md:text-4xl">
            Meet Our <span className="text-emerald-700">Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            We're a passionate group of students dedicated to making a difference through sustainable fashion.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
              <div key={member} className="flex flex-col items-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-full">
                  <img
                    src={`/placeholder.svg?height=200&width=200&text=Team Member ${member}`}
                    alt={`Team Member ${member}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Team Member {member}</h3>
                <p className="text-emerald-700">Role Title</p>
                <p className="mt-2 text-center text-slate-600">
                  Passionate about sustainable fashion and making a difference in our community.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-100 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl bg-white p-8 shadow-lg md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-medium text-slate-900 md:text-4xl">
                Join Our <span className="text-emerald-700">Journey</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Whether you're interested in purchasing our products, donating materials, or collaborating with us, we'd
                love to hear from you. Together, we can make sustainability stylish!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-emerald-700 hover:bg-emerald-800">
                  <Link href="/#products">Shop Our Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-50">
                  <Link href="/support">Support Our Mission</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

