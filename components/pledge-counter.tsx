"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Target } from "lucide-react"

export function PledgeCounter() {
  const [count, setCount] = useState(47832)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1)
      setTimeout(() => setIsAnimating(false), 500)
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const targetCount = 1000000
  const percentage = Math.min((count / targetCount) * 100, 100)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card/50 backdrop-blur-sm border rounded-xl">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-3 text-muted-foreground" />
            <div className={`text-3xl font-bold mb-2 transition-all duration-500 ${isAnimating ? "scale-105" : ""}`}>
              {count.toLocaleString()}
            </div>
            <div className="text-muted-foreground text-sm">Americans Pledged</div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border rounded-xl">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-3 text-muted-foreground" />
            <div className="text-3xl font-bold mb-2">435</div>
            <div className="text-muted-foreground text-sm">Districts Represented</div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border rounded-xl">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 mx-auto mb-3 text-muted-foreground" />
            <div className="text-3xl font-bold mb-2">{percentage.toFixed(1)}%</div>
            <div className="text-muted-foreground text-sm">To Critical Mass</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border rounded-xl">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-foreground font-medium text-sm">Progress to 1 Million Pledges</span>
            <span className="text-muted-foreground text-sm">{percentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-destructive to-accent h-2.5 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-muted-foreground text-xs mt-2.5">Target: 1,000,000 pledges by Election Day 2026</p>
        </CardContent>
      </Card>
    </div>
  )
}
