"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import OrderModal from "@/components/order-modal"
import ProductGallery from "@/components/product-gallery"

export default function ProductSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const productDetails = {
    name: "Denim Tote Bag",
    price: 25.0,
    deliveryFee: 7.0,
    description:
      "Functional, stylish, and sustainable. Our denim tote bags are perfect for everyday use, from grocery shopping to campus life.",
    images: [
      {
        src: "/placeholder.svg?height=600&width=600&text=Denim Tote Front",
        alt: "Denim Tote Bag - Front View",
      },
      {
        src: "/placeholder.svg?height=600&width=600&text=Denim Tote Side",
        alt: "Denim Tote Bag - Side View",
      },
      {
        src: "/placeholder.svg?height=600&width=600&text=Denim Tote Inside",
        alt: "Denim Tote Bag - Inside View",
      },
      {
        src: "/placeholder.svg?height=600&width=600&text=Denim Tote Detail",
        alt: "Denim Tote Bag - Detail View",
      },
      {
        src: "/placeholder.svg?height=600&width=600&text=Denim Tote In Use",
        alt: "Denim Tote Bag - In Use",
      },
    ],
  }

  return (
    <section id="product" className="bg-emerald-50 px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Product Gallery - Takes more space on larger screens */}
          <div className="w-full lg:w-3/5">
            <ProductGallery images={productDetails.images} />
          </div>

          {/* Product Information */}
          <div className="w-full lg:w-2/5">
            <div className="sticky top-20">
              <h2 className="font-serif text-3xl font-medium text-slate-900 md:text-4xl">
                Our Signature <span className="text-emerald-700">Denim Tote</span>
              </h2>

              <div className="mt-2">
                <p className="text-2xl font-bold text-emerald-700">{productDetails.price.toFixed(2)} TND</p>
              </div>

              <p className="mt-4 text-lg text-slate-700">{productDetails.description}</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 h-6 w-6 rounded-full bg-emerald-200 text-center text-emerald-800">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold">Durable Construction</h3>
                    <p className="text-slate-600">Made from sturdy denim that will last for years</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 h-6 w-6 rounded-full bg-emerald-200 text-center text-emerald-800">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold">Spacious Interior</h3>
                    <p className="text-slate-600">Plenty of room for books, groceries, or daily essentials</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 h-6 w-6 rounded-full bg-emerald-200 text-center text-emerald-800">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold">Unique Design</h3>
                    <p className="text-slate-600">Each bag has its own character from the original denim</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  Order Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <h3 className="font-medium">Sustainability Impact</h3>
                <p className="mt-2 text-sm text-slate-600">
                  By purchasing this tote bag, you're helping to divert approximately 1 pair of jeans from landfill and
                  supporting student-led sustainability initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          ...productDetails,
          image: productDetails.images[0].src,
        }}
      />
    </section>
  )
}

