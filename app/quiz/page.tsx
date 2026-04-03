export const dynamic = "force-dynamic"

import { QuizPageClient } from "./quiz-client"
"use client"

export const dynamic = "force-dynamic"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export const dynamic = "force-dynamic"

interface QuizQuestion {
  id: number
  question: string
  description: string
  answers: { text: string; alignment: "fresh" | "status-quo" | "neutral" }[]
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "How long should representatives serve?",
    description: "What's your view on term limits?",
    answers: [
      { text: "Career politicians aren't healthy for democracy - fresh faces bring new ideas", alignment: "fresh" },
      { text: "Experienced representatives know how to get things done", alignment: "status-quo" },
      { text: "Either way works", alignment: "neutral" },
    ],
  },
  {
    id: 2,
    question: "Why do politicians sometimes ignore their constituents?",
    description: "What's the root cause?",
    answers: [
      {
        text: "They're too focused on major donors and special interests instead of regular people",
        alignment: "fresh",
      },
      { text: "That's just how politics works - they make trade-offs", alignment: "status-quo" },
      { text: "It's complicated - various factors are involved", alignment: "neutral" },
    ],
  },
  {
    id: 3,
    question: "What would fix Congress?",
    description: "How should we reform the system?",
    answers: [
      { text: "Replace everyone with fresh perspectives - a clean slate resets the system", alignment: "fresh" },
      { text: "Elect better people from the current pool of politicians", alignment: "status-quo" },
      { text: "Reform various aspects of how Congress operates", alignment: "neutral" },
    ],
  },
  {
    id: 4,
    question: "How should voters decide between candidates?",
    description: "What matters most?",
    answers: [
      { text: "Vote OUT every incumbent, then choose the best challenger", alignment: "fresh" },
      { text: "Re-elect good representatives and remove the bad ones", alignment: "status-quo" },
      { text: "Judge each race on its individual merits", alignment: "neutral" },
    ],
  },
  {
    id: 5,
    question: "Can the current Congress solve its own problems?",
    description: "Is self-reform possible?",
    answers: [
      { text: "No - they benefit from the broken system and won't change it", alignment: "fresh" },
      { text: "Yes - we can work with current representatives to reform", alignment: "status-quo" },
      { text: "Maybe - depends on specific people and issues", alignment: "neutral" },
    ],
  },
]

export default function QuizPage() {
  return <QuizPageClient />
}
