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
            <h1>The Case for a System Reset</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              American democracy is built on the principle of a government accountable to its people. When that
              connection breaks down, the system stops working for the majority. That is where we are today: a Congress
              that has become structurally unresponsive to the citizens it represents.
            </p>
          </div>

          {/* The Core Problem */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">The Anatomy of Failure</h2>
            <div className="section-divider mb-10" />
            <div className="space-y-6">
              <div className="section-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">A Congress That Works for Donors, Not Voters</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Over decades, congressional priorities have drifted from constituent service to fundraising. Members
                  now spend a significant portion of their time soliciting a small pool of wealthy donors and special
                  interests. Policy is increasingly shaped not by the needs of everyday Americans but by the priorities
                  of those who can fund campaigns.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The result: a government unable to address the challenges that affect ordinary Americans—a national
                  debt exceeding $34 trillion, soaring healthcare costs, a housing crisis, and persistent economic
                  uncertainty. Its incentive structure is aligned with outside money, not the public good.
                </p>
              </div>

              <div className="section-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">The Self-Preservation Loop</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Despite historic low approval ratings, incumbents are reelected over 95% of the time. This is not
                  public satisfaction—it is the predictable outcome of a system engineered to protect incumbents through
                  gerrymandered districts, fundraising advantages, and low primary turnout.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This self-preservation loop blocks new ideas and new leaders from emerging, ensuring the institution
                  stays stagnant and incapable of adapting to the country&apos;s evolving challenges.
                </p>
              </div>
            </div>
          </section>

          {/* The Authoritarian Threat */}
          <section className="mb-20">
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive mr-3" />
                <h2 className="text-3xl font-bold text-destructive">What Happens When Government Stops Working</h2>
              </div>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg mb-6">
                  When a government consistently fails to solve real-world problems, it creates a dangerous political
                  vacuum. Legitimate public frustration becomes fuel for movements that offer radical,
                  anti-democratic solutions in place of reform.
                </p>

                <p className="text-lg mb-6">
                  Detailed blueprints like Project 2025 are designed to exploit precisely this moment. They propose
                  dismantling democratic checks and balances, politicizing the civil service, and concentrating
                  executive power—effectively replacing representative government with centralized control.
                </p>

                <p className="text-lg font-semibold text-destructive bg-background p-4 rounded-xl border border-destructive/20">
                  Authoritarianism is not the cause of our dysfunction—it is its consequence. A Congress that fails
                  its constituents creates the conditions that anti-democratic movements exploit.
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
                  The solution must be as fundamental as the problem. A minor reform or a partisan swap won&apos;t fix
                  a structurally broken institution. It requires resetting the institution itself.
                </p>
                <p className="leading-relaxed">
                  The Fresh 535 movement offers a straightforward, powerful, and nonpartisan path: coordinated
                  electoral action to replace every single sitting member of Congress.
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
