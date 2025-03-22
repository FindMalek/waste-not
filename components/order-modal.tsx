"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarDays, MapPin, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface IProduct {
  name: string
  price: number
  deliveryFee: number
  image?: string
}

interface IOrderModalProps {
  isOpen: boolean
  onClose: () => void
  product: IProduct
}

export default function OrderModal({ isOpen, onClose, product }: IOrderModalProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCityChange = (value: string) => {
    setFormData((prev) => ({ ...prev, city: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the order to your backend here
    console.log("Order submitted:", formData)

    // Close the modal and redirect to thank you page
    onClose()
    router.push("/thank-you")
  }

  // Calculate delivery date (4-6 business days from now)
  const getDeliveryDateRange = () => {
    const today = new Date()
    const minDelivery = new Date(today)
    const maxDelivery = new Date(today)

    // Add 4 business days for minimum
    minDelivery.setDate(minDelivery.getDate() + 4)

    // Add 6 business days for maximum
    maxDelivery.setDate(maxDelivery.getDate() + 6)

    // Format dates
    const formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    }

    return `${formatDate(minDelivery)} - ${formatDate(maxDelivery)}`
  }

  const totalPrice = product.price + product.deliveryFee

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Complete Your Order</DialogTitle>
          <DialogDescription>Please provide your details to complete your order.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* Product Information */}
          <div className="flex items-start space-x-4">
            <div className="h-20 w-20 overflow-hidden rounded-md bg-slate-100">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{product.name}</h3>
              <div className="mt-1 text-sm text-slate-500">
                <div className="flex justify-between">
                  <span>Product Price:</span>
                  <span>{product.price.toFixed(2)} TND</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee:</span>
                  <span>{product.deliveryFee.toFixed(2)} TND</span>
                </div>
                <div className="mt-1 flex justify-between font-medium text-slate-900">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 rounded-md bg-emerald-50 p-3 text-sm">
            <CalendarDays className="h-4 w-4 text-emerald-700" />
            <span>Estimated delivery: {getDeliveryDateRange()} (4-6 business days)</span>
          </div>

          {/* Customer Information */}
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="flex items-center gap-1">
                <User className="h-4 w-4" /> Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone" className="flex items-center gap-1">
                <Phone className="h-4 w-4" /> Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="city" className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> City
              </Label>
              <Select value={formData.city} onValueChange={handleCityChange} required>
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sousse">Sousse</SelectItem>
                  <SelectItem value="tunis">Tunis</SelectItem>
                  <SelectItem value="sfax">Sfax</SelectItem>
                  <SelectItem value="monastir">Monastir</SelectItem>
                  <SelectItem value="mahdia">Mahdia</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800">
            Place Order
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

