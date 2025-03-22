export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-100 to-emerald-200 px-4 py-24 text-center md:py-32">
      <div className="container relative z-10 mx-auto max-w-5xl">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-slate-900 md:text-6xl">
          Turning Old Fabrics Into <span className="text-emerald-800">New Fashion</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700">
          Join us in making sustainability stylish. We transform disposed jeans into beautiful, functional tote bags
          that reduce waste and make a statement.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

