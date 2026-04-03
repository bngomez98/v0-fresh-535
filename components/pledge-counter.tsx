"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Target, Loader2 } from "lucide-react"

export function PledgeCounter() {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch the initial count from the database
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch("/api/pledge")
        if (response.ok) {
          const data = await response.json()
          setCount(data.count)
        }
      } catch (error) {
        console.error("Error fetching pledge count:", error)
        // Fallback to a default count if API fails
        setCount(0)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCount()
  }, [])

  // Refresh the count periodically
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        setIsAnimating(true)
        const response = await fetch("/api/pledge")
        if (response.ok) {
          const data = await response.json()
          setCount(data.count)
        }
        setTimeout(() => setIsAnimating(false), 500)
      } catch (error) {
        console.error("Error refreshing pledge count:", error)
        setIsAnimating(false)
      }
    }, 30000) // Refresh every 30 seconds

    return () => clearInterval(interval)
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
