export const dynamic = "force-dynamic"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Target } from "lucide-react"
import { ImpactMetrics } from "@/components/impact-metrics"

export default function AboutPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="page-header">
            <h1>The Need for a System Reset</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              American democracy is built on the principle of a government accountable to its people. When that
              connection weakens, the system ceases to function for the majority. This is the challenge we face today: a
              system that has become unresponsive to the needs of its citizens, requiring a fundamental reset.
            </p>
          </div>

          {/* The Core Problem */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">The Anatomy of Failure</h2>
            <div className="section-divider mb-10" />
            <div className="space-y-6">
              <div className="section-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">A System Unresponsive to the People</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Over decades, the priorities of Congress have shifted. Representatives now spend an inordinate amount
                  of time fundraising from a small pool of wealthy donors and special interests. This creates a system
                  where policy is shaped not by the needs of the American public, but by the priorities of those who can
                  fund campaigns.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The result is a government that struggles to address critical issues affecting everyday Americans—from
                  a national debt surpassing $34 trillion and soaring healthcare costs to crumbling infrastructure and
                  economic uncertainty. Its incentive structure is aligned with outside interests, not the public good.
                </p>
              </div>

              <div className="section-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">The Self-Preservation Loop</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Despite historically low approval ratings, incumbents are reelected over 95% of the time. This is not
                  a sign of public satisfaction. It is the result of a system designed to protect incumbents through
                  gerrymandered districts and enormous fundraising advantages.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This "self-preservation loop" prevents new ideas and new leaders from emerging, ensuring that the
                  institution remains stagnant and unable to adapt to the country's evolving challenges.
                </p>
              </div>
            </div>
          </section>

          {/* The Authoritarian Threat */}
          <section className="mb-20">
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive mr-3" />
                <h2 className="text-3xl font-bold text-destructive">The Consequence of an Unresponsive System</h2>
              </div>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg mb-6">
                  When a government fails to solve the real-world problems of its citizens, it creates a dangerous void.
                  People's legitimate frustration becomes a powerful political force. Extremist movements exploit this
                  energy by offering radical, anti-democratic solutions.
                </p>

                <p className="text-lg mb-6">
                  Detailed plans like Project 2025 are designed to capitalize on this very moment. They propose to
                  dismantle democratic checks and balances, politicize the civil service, and centralize executive
                  power, effectively replacing our system of government with one based on authoritarian control.
                </p>

                <p className="text-lg font-semibold text-destructive bg-background p-4 rounded-xl border border-destructive/20">
                  This authoritarian risk is not the cause of our problems; it is the direct consequence of a system
                  that has stopped delivering for the American people.
                </p>
              </div>
            </div>
          </section>

          {/* The Numbers */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">The Data of Dysfunction</h2>
            <div className="section-divider mb-10" />
            <ImpactMetrics />
          </section>

          {/* The Solution Intro */}
          <section className="mb-16">
            <div className="section-card text-center shadow-lg border-2 border-primary/20">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">There Is a Way Out</h2>
              <div className="prose prose-lg max-w-2xl mx-auto text-muted-foreground">
                <p className="leading-relaxed">
                  The solution must be as fundamental as the problem. It cannot be a minor reform or a shift in partisan
                  control. It must be a complete reset of the institution itself.
                </p>
                <p className="leading-relaxed">
                  The Fresh 535 movement proposes a simple, powerful, and non-partisan strategy: coordinated electoral
                  action to replace every single member of Congress.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="btn-professional">
                  <Link href="/solution">Explore the Solution</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
