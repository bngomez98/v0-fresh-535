"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

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

export function QuizPageClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState({ fresh: 0, status_quo: 0, neutral: 0 })
  const [completed, setCompleted] = useState(false)

  const handleAnswer = (alignment: "fresh" | "status-quo" | "neutral") => {
    setScores({
      ...scores,
      [alignment === "status-quo" ? "status_quo" : alignment]:
        scores[alignment === "status-quo" ? "status_quo" : alignment] + 1,
    })

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCompleted(true)
    }
  }

  const getAlignment = () => {
    const { fresh, status_quo, neutral } = scores
    if (fresh > status_quo && fresh > neutral) return "fresh"
    if (status_quo > fresh && status_quo > neutral) return "status_quo"
    return "neutral"
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const alignment = getAlignment()

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Your Results</h1>
            <p className="text-lg text-slate-600">Here's where you stand on the future of Congress</p>
          </div>

          <Card className="mb-8 border-2">
            <CardContent className="pt-8">
              <div className="text-center mb-6">
                {alignment === "fresh" && (
                  <>
                    <Badge className="bg-accent text-white mb-4 px-4 py-2 text-base">FRESH 535 ALIGNED</Badge>
                    <h2 className="text-3xl font-bold mb-4">You believe in system reset</h2>
                    <p className="text-slate-700 mb-6">
                      You recognize that Congress is broken by incumbency and special interest influence. You understand
                      that fresh perspectives and new leaders can rebuild a government that works for regular people
                      instead of donors.
                    </p>
                  </>
                )}
                {alignment === "status_quo" && (
                  <>
                    <Badge className="bg-slate-500 text-white mb-4 px-4 py-2 text-base">STATUS QUO LEANING</Badge>
                    <h2 className="text-3xl font-bold mb-4">You prefer incremental change</h2>
                    <p className="text-slate-700 mb-6">
                      You believe the current system can be improved by electing better people. Consider this: if good
                      candidates can't compete against entrenched incumbents with massive funding advantages, how does
                      this actually work?
                    </p>
                  </>
                )}
                {alignment === "neutral" && (
                  <>
                    <Badge className="bg-blue-500 text-white mb-4 px-4 py-2 text-base">OPEN MINDED</Badge>
                    <h2 className="text-3xl font-bold mb-4">You see multiple perspectives</h2>
                    <p className="text-slate-700 mb-6">
                      You recognize the complexity of congressional reform. Whether through complete turnover or
                      targeted improvements, the goal is the same: a government that actually responds to regular voters
                      instead of serving special interests.
                    </p>
                  </>
                )}
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-4">Your Score Breakdown</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Fresh 535 Alignment</span>
                      <span className="font-bold">
                        {scores.fresh}/{questions.length}
                      </span>
                    </div>
                    <Progress value={(scores.fresh / questions.length) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Status Quo Alignment</span>
                      <span className="font-bold">
                        {scores.status_quo}/{questions.length}
                      </span>
                    </div>
                    <Progress value={(scores.status_quo / questions.length) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Neutral/Complex View</span>
                      <span className="font-bold">
                        {scores.neutral}/{questions.length}
                      </span>
                    </div>
                    <Progress value={(scores.neutral / questions.length) * 100} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button asChild className="w-full" size="lg">
                  <Link href="/my-district">Find Your Representatives</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
                  <Link href="/pledge">Take the Fresh 535 Pledge</Link>
                </Button>
                <Button
                  onClick={() => {
                    setCurrentQuestion(0)
                    setScores({ fresh: 0, status_quo: 0, neutral: 0 })
                    setCompleted(false)
                  }}
                  variant="ghost"
                  className="w-full"
                  size="lg"
                >
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-slate-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-slate-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{question.question}</CardTitle>
            <CardDescription className="text-base">{question.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {question.answers.map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(answer.alignment)}
                  className="w-full text-left p-4 border-2 border-slate-200 rounded-lg hover:border-accent hover:bg-accent/5 transition-all"
                >
                  <div className="font-medium text-slate-900">{answer.text}</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-slate-600">
            Be honest. There are no wrong answers - just different perspectives on how to fix Congress.
          </p>
        </div>
      </div>
    </div>
  )
}
