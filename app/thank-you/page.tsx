import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-24 w-24 text-emerald-600" />
        </div>
        <h1 className="font-serif text-3xl font-medium text-slate-900 md:text-4xl">Thank You for Your Order!</h1>
        <p className="mt-4 text-lg text-slate-600">
          We&apos;ve received your order and will contact you shortly to confirm the details.
        </p>
        <p className="mt-2 text-slate-600">
          Your support helps us continue our mission of sustainable fashion and reducing textile waste.
        </p>
        <div className="mt-8">
          <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

