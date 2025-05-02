"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import OrderModal from "@/components/order-modal"

interface Product {
  id: number
  name: string
  price: number
  deliveryFee: number
  description: string
  image: string
}

export default function ProductSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(0)

  const products: Product[] = [
    {
      id: 1,
      name: "Denim Tote Bag",
      price: 25.0,
      deliveryFee: 7.0,
      description:
        "Functional, stylish, and sustainable. Our denim tote bags are perfect for everyday use, from grocery shopping to campus life.",
      image: "/products/1.jpg"
    },
    {
      id: 2,
      name: "Upcycled Denim Pouch",
      price: 15.0,
      deliveryFee: 5.0,
      description:
        "A compact pouch made from upcycled denim, perfect for storing small essentials or as a stylish accessory.",
        image: "/products/2.jpg"
      }
  ]

  const openModal = (productIndex: number) => {
    setSelectedProduct(productIndex)
    setIsModalOpen(true)
  }

  return (
    <section id="product" className="bg-emerald-50 px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-medium text-slate-900 md:text-4xl">
          Our <span className="text-emerald-700">Products</span>
        </h2>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <div key={product.id} className="flex flex-col rounded-lg bg-white p-6 shadow-md">
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
              
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-1 text-xl font-bold text-emerald-700">{product.price.toFixed(2)} TND</p>
              <p className="mt-3 text-slate-700">{product.description}</p>
              
              <Button 
                className="mt-6 w-full"
                onClick={() => openModal(index)}
              >
                Order Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      {isModalOpen && (
        <OrderModal
          isOpen={isModalOpen}
          product={products[selectedProduct]}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  )
}

