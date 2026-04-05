export const dynamic = "force-dynamic"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PledgeForm } from "@/components/pledge-form"
import { PledgeCounter } from "@/components/pledge-counter"
import { ShareButtons } from "@/components/share-buttons"
import { Target, Users, Shield, TrendingUp } from "lucide-react"

export default function PledgePage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="gradient-bg-primary text-primary-foreground rounded-2xl p-10 md:p-12 mb-12 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Pledge to Reset the Congress</h1>
              <p className="text-xl leading-relaxed mb-8 opacity-95">
                Join Americans across every district in a simple, powerful act: commit to vote out every incumbent
                until we achieve a complete congressional reset. Your pledge is your voice—and together, our voices
                change the math.
              </p>
              <PledgeCounter />
            </div>
          </div>

          {/* The Pledge */}
          <section className="mb-16">
            <div className="bg-secondary border-l-4 border-primary p-8 rounded-r-xl shadow-sm">
              <h2 className="text-3xl font-bold text-primary mb-6">The Fresh 535 Pledge</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <blockquote className="text-xl italic text-primary border-l-4 border-primary/30 pl-6 mb-6">
                  "I pledge to vote against every incumbent member of Congress in every election until we achieve
                  complete congressional turnover. I will vote for any qualified challenger over any incumbent,
                  regardless of party affiliation, because accountability matters more than ideology."
                </blockquote>

                <p className="text-lg text-muted-foreground">
                  This pledge is nonpartisan, voluntary, and focused on one goal: restoring a Congress that works
                  for the people it represents. When enough of us commit to holding the line together, the math
                  of incumbency flips.
                </p>
              </div>
            </div>
          </section>

          {/* Why This Matters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Why Your Pledge Matters</h2>
            <div className="section-divider mb-10" />

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 border-destructive/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Shield className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <CardTitle className="text-xl text-center">Defend Democratic Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    An unresponsive government creates a vacuum for authoritarianism. A full congressional reset
                    is the most direct structural defense of democratic governance we have.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-center">Restore Voter Authority</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Your vote is the ultimate check on political power. This pledge is a reminder—to every
                    politician—that they answer to the people who elect them.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-chart-2/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-chart-2 mx-auto mb-4" />
                  <CardTitle className="text-xl text-center">Tie Job Security to Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    When re-election is no longer guaranteed, representatives are incentivized to solve real
                    problems instead of just raising money and holding their seat.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-chart-3/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Target className="h-12 w-12 text-chart-3 mx-auto mb-4" />
                  <CardTitle className="text-xl text-center">Reach Critical Mass Together</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Primary turnout rarely exceeds 25%. A coordinated 20% bloc is all we need. Every pledge
                    moves us closer to that threshold in every district.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pledge Form */}
          <section className="mb-16" id="pledge-form">
            <div className="bg-card border-2 border-primary/20 rounded-xl p-8 shadow-md">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Make Your Commitment Official</h2>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Join the movement to restore congressional accountability. Your information helps us track momentum,
                organize by district, and demonstrate the scale of demand to media and candidates alike.
              </p>
              <PledgeForm />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">What Happens After You Pledge</h2>
            <div className="section-divider mb-10" />

            <div className="space-y-6">
              <div className="section-card">
                <h3 className="text-xl font-bold text-foreground mb-3">1. You'll Get Voter Resources</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access voter guides, district intelligence, and tools to identify incumbents on your ballot—so
                  you can act with confidence in every primary and general election.
                </p>
              </div>

              <div className="section-card">
                <h3 className="text-xl font-bold text-foreground mb-3">2. You'll Receive Election Reminders</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We'll notify you about upcoming primaries and general elections in your district, where your
                  vote carries the most weight. You'll never miss a chance to hold an incumbent accountable.
                </p>
              </div>

              <div className="section-card">
                <h3 className="text-xl font-bold text-foreground mb-3">3. You'll Help Build Real Pressure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your pledge is counted publicly and adds to the growing ledger of committed voters. As our
                  numbers grow district by district, incumbents see the threat is real—and begin to govern
                  accordingly.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center gradient-bg-primary text-primary-foreground p-12 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Spread the Movement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Every person who takes the pledge brings us closer to the critical mass needed for complete
              congressional turnover. Share Fresh 535 with your friends, family, and community.
            </p>

            <ShareButtons />

            <p className="text-lg mt-8 opacity-95">
              Together, we can restore accountability to Congress and close the door on authoritarian drift.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
