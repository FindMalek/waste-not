import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import ProductSection from "@/components/sections/product-section"
import ShowcaseSection from "@/components/sections/showcase-section"
import DonationSection from "@/components/sections/donation-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturesSection />
      <ProductSection />
      <ShowcaseSection />
      <DonationSection />
    </div>
  )
}

