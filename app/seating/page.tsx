"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function SeatingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          {/* Decorative flowers */}
          <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
            <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rotate-180 opacity-20">
            <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="mb-4 text-center font-serif text-4xl font-light text-sage-800 md:text-5xl">Seating Chart</h1>
            <p className="mb-8 text-center text-sage-600 max-w-2xl mx-auto">
              Find your seat for our special day. Please arrive early to locate your table.
            </p>

            {/* PDF Viewer */}
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8">
              <div className="w-full" style={{ minHeight: "800px" }}>
                <iframe
                  src="/documents/seating-chart.pdf"
                  className="w-full h-[800px] border-0 rounded"
                  title="Wedding Seating Chart"
                />
              </div>

              {/* Download Button */}
              <div className="mt-6 text-center space-y-4">
                <Button asChild className="bg-sage-600 hover:bg-sage-700">
                  <a href="/documents/seating-chart.pdf" download="Larry-Eastina-Seating-Chart.pdf">
                    Download Seating Chart (PDF)
                  </a>
                </Button>
                <p className="text-sm text-sage-600">Can't see the document? Click the button above to download it.</p>
              </div>
            </div>

            {/* Helpful Information */}
            <div className="mt-12 max-w-2xl mx-auto bg-sage-50 rounded-lg p-6">
              <h2 className="text-2xl font-serif text-sage-800 mb-4 text-center">Need Help Finding Your Seat?</h2>
              <p className="text-sage-700 text-center mb-4">
                If you have any questions about your seating arrangement or can't find your name in the chart, please don't hesitate to contact us.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button
                asChild
                variant="outline"
                className="border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
              >
                <Link href="/celebration">Back to Celebration Details</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sage-800 py-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-4 font-serif text-3xl font-light">Larry & Eastina</h2>
          <p className="mb-4">October 17, 2025 • Aberdeen Water Taxi, Aberdeen Freetown</p>
        </div>
      </footer>
    </div>
  )
}
