"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Ohio",
    party: "Independent",
    quote:
      "I'm tired of choosing between the lesser of two evils. Fresh 535 gives me a way to vote FOR something - accountability.",
    avatar: "SM",
  },
  {
    name: "Mike R.",
    location: "Texas",
    party: "Republican",
    quote:
      "I've voted Republican my whole life, but even I can see that our representatives don't represent us anymore. Time for fresh blood.",
    avatar: "MR",
  },
  {
    name: "Jennifer L.",
    location: "California",
    party: "Democrat",
    quote:
      "This isn't about left vs right - it's about democracy vs corruption. We need representatives who work for us, not special interests.",
    avatar: "JL",
  },
  {
    name: "David K.",
    location: "Florida",
    party: "Independent",
    quote:
      "Project 2025 scares me. Congress has failed to protect our democracy. Fresh 535 is our last peaceful option.",
    avatar: "DK",
  },
  {
    name: "Maria G.",
    location: "Arizona",
    party: "Democrat",
    quote:
      "My representative has been in office for 20 years. What has he accomplished? It's time for someone who remembers they work for us.",
    avatar: "MG",
  },
  {
    name: "Tom B.",
    location: "Pennsylvania",
    party: "Republican",
    quote:
      "I don't care if they're Republican or Democrat - if they're not doing their job, they need to go. Fresh 535 gets it.",
    avatar: "TB",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-2 border-slate-200 shadow-lg">
        <CardContent className="p-8 md:p-12">
          <div className="text-center">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">{testimonials[currentIndex].name}</div>
                <div className="text-slate-600">
                  {testimonials[currentIndex].location} • {testimonials[currentIndex].party}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <Button variant="outline" size="sm" onClick={goToPrevious} className="rounded-full bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary" : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="sm" onClick={goToNext} className="rounded-full bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
