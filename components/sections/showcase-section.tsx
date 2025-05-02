import Image from "next/image"

export default function ShowcaseSection() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-medium text-slate-900 md:text-4xl">
          Our <span className="text-emerald-700">Showcase</span>
        </h2>
        <div className="mt-12 flex flex-col gap-8 lg:flex-row">
          {/* Large image on the left */}
          <div className="relative w-full lg:w-2/3">
            <div className="overflow-hidden rounded-lg bg-white p-2 shadow-lg">
              <Image
                src="/showcase/1.jpg"
                alt="Showcase main image"
                className="h-auto w-full rounded-md object-cover"
                width={600}
                height={800}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg bg-emerald-200"></div>
          </div>
          
          {/* Two stacked images on the right */}
          <div className="flex w-full flex-col gap-8 lg:w-1/3">
            <div className="relative">
              <div className="overflow-hidden rounded-lg bg-white p-2 shadow-lg">
                <Image
                src="/showcase/2.jpg"
                alt="Showcase image top right"
                  className="h-auto w-full rounded-md object-cover"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-lg bg-emerald-100"></div>
            </div>
            
            <div className="relative">
              <div className="overflow-hidden rounded-lg bg-white p-2 shadow-lg">
                <Image
                src="/showcase/3.jpg"
                alt="Showcase image bottom right"
                  className="h-auto w-full rounded-md object-cover"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-lg bg-emerald-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 