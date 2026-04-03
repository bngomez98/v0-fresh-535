"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Target, Loader2 } from "lucide-react"

export function PledgeCounter() {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let eventSource: EventSource | null = null
    let pollInterval: ReturnType<typeof setInterval> | undefined
    let animationTimeout: ReturnType<typeof setTimeout> | undefined

    const triggerAnimation = (value: number) => {
      setIsAnimating(true)
      setCount(value)
      if (animationTimeout) clearTimeout(animationTimeout)
      animationTimeout = setTimeout(() => setIsAnimating(false), 500)
    }

    const fetchCount = async () => {
      try {
        const response = await fetch("/api/pledge")
        if (response.ok) {
          const data = await response.json()
          if (typeof data.count === "number") {
            triggerAnimation(data.count)
          }
        }
      } catch (error) {
        console.error("Error fetching pledge count:", error)
        // Fallback to a default count if API fails
        setCount(0)
      } finally {
        setIsLoading(false)
      }
    }

    const startPolling = () => {
      pollInterval = setInterval(fetchCount, 30000)
    }

    const startSse = () => {
      if (typeof EventSource === "undefined") {
        startPolling()
        return
      }

      eventSource = new EventSource("/api/pledge/stream")

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          if (typeof data.count === "number") {
            setIsLoading(false)
            triggerAnimation(data.count)
          }
        } catch (error) {
          console.error("Error parsing pledge stream event:", error)
        }
      }

      eventSource.onerror = () => {
        eventSource?.close()
        eventSource = null
        if (!pollInterval) {
          startPolling()
        }
      }
    }

    fetchCount()
    startSse()

    return () => {
      eventSource?.close()
      if (pollInterval) clearInterval(pollInterval)
      if (animationTimeout) clearTimeout(animationTimeout)
    }
  }, [])

  const targetCount = 1000000
  const percentage = Math.min((count / targetCount) * 100, 100)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-brand-cream rounded-xl">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-3 text-slate-300" />
            <div className={`text-3xl font-bold mb-2 transition-all duration-500 ${isAnimating ? "scale-105" : ""}`}>
              {isLoading ? <Loader2 className="h-8 w-8 mx-auto animate-spin" /> : count.toLocaleString()}
            </div>
            <div className="text-slate-300 text-sm">Americans Pledged</div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-brand-cream rounded-xl">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-3 text-slate-300" />
            <div className="text-3xl font-bold mb-2">435</div>
            <div className="text-slate-300 text-sm">Districts Represented</div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-brand-cream rounded-xl">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 mx-auto mb-3 text-slate-300" />
            <div className="text-3xl font-bold mb-2">{percentage.toFixed(1)}%</div>
            <div className="text-slate-300 text-sm">To Critical Mass</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-brand-cream font-medium text-sm">Progress to 1 Million Pledges</span>
            <span className="text-slate-300 text-sm">{percentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-red-500 to-red-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-slate-400 text-xs mt-2.5">Target: 1,000,000 pledges by Election Day 2026</p>
        </CardContent>
      </Card>
    </div>
  )
}
