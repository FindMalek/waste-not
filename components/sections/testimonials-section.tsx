"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ITestimonialCardProps {
  quote: string
  name: string
  title: string
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl font-medium text-slate-900 md:text-4xl">
          What People Are <span className="text-emerald-700">Saying</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Our community loves their sustainable tote bags. Here&apos;s what they have to say about Waste Not.
        </p>

        <div className="mt-12">
          <Tabs defaultValue="students" className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="students" className="mt-8">
              <div className="grid gap-6 md:grid-cols-3">
                <TestimonialCard
                  quote="I use my Waste Not tote every day on campus. It's sturdy enough for all my textbooks and I love telling people it used to be someone's jeans!"
                  name="Sarah L."
                  title="Literature Student"
                />
                <TestimonialCard
                  quote="The quality is impressive! I've been using my tote for grocery shopping for months and it's holding up perfectly. Great initiative by fellow students."
                  name="Ahmed K."
                  title="Environmental Science Student"
                />
                <TestimonialCard
                  quote="I love supporting student initiatives, especially ones that promote sustainability. My Waste Not tote is now my favorite accessory!"
                  name="Leila M."
                  title="Art History Student"
                />
              </div>
            </TabsContent>
            <TabsContent value="faculty" className="mt-8">
              <div className="grid gap-6 md:grid-cols-3">
                <TestimonialCard
                  quote="As a professor, I'm incredibly proud of our students' initiative. The tote bags are not just practical but represent important values we teach."
                  name="Dr. Nadia B."
                  title="Environmental Studies Professor"
                />
                <TestimonialCard
                  quote="I've purchased several totes as gifts for colleagues. They're impressed by both the quality and the story behind each bag."
                  name="Prof. Thomas R."
                  title="Literature Department"
                />
                <TestimonialCard
                  quote="Waste Not exemplifies the kind of practical sustainability we need more of. I use my tote for carrying papers and books between classes."
                  name="Dr. Karim H."
                  title="Sociology Professor"
                />
              </div>
            </TabsContent>
            <TabsContent value="community" className="mt-8">
              <div className="grid gap-6 md:grid-cols-3">
                <TestimonialCard
                  quote="I discovered Waste Not at a local market and was impressed by the students' passion. My tote is now my go-to shopping bag!"
                  name="Fatima Z."
                  title="Local Resident"
                />
                <TestimonialCard
                  quote="As a small business owner, I appreciate the craftsmanship. I've ordered custom totes for my shop and customers love the sustainability story."
                  name="Yasmine A."
                  title="Café Owner"
                />
                <TestimonialCard
                  quote="I bought a tote to support the students' initiative and was pleasantly surprised by how well-made and stylish it is. Gets compliments everywhere!"
                  name="Mehdi T."
                  title="Local Artist"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, name, title }: ITestimonialCardProps) {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
        </div>
        <p className="mt-4 text-slate-600">&quot;{quote}&quot;</p>
        <div className="mt-6 flex items-center">
          <div className="h-10 w-10 rounded-full bg-emerald-200"></div>
          <div className="ml-3">
            <p className="font-medium">{name}</p>
            <p className="text-sm text-slate-500">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

