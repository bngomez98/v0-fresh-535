export const dynamic = "force-dynamic"

import type React from "react"
import Link from "next/link"
import { Lightbulb, Target, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function SolutionPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="page-header">
            <h1>How We Win</h1>
            <p className="text-xl text-muted-foreground">
              A straightforward strategy that uses low primary turnout against incumbents. No new laws needed. 
              No third party required. Just coordinated voters making one simple choice.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Three Steps to Accountability</h2>
            <div className="section-divider mb-10" />
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">1. Find Your Incumbent</h3>
                <p className="text-muted-foreground leading-relaxed">Check your district. How long have they served? What is their voting record? Use our tools to see exactly who represents you—and how little they have delivered.</p>
              </div>
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">2. Vote for the Challenger</h3>
                <p className="text-muted-foreground leading-relaxed">In your primary, vote for anyone except the incumbent. The specific challenger matters less than breaking the cycle of guaranteed reelection.</p>
              </div>
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">3. Change the Incentives</h3>
                <p className="text-muted-foreground leading-relaxed">When incumbents lose, every sitting member takes notice. Suddenly, serving constituents becomes a survival strategy—exactly how democracy should work.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">
              Why This Works: The Math Is on Our Side
            </h2>
            <div className="section-divider mb-10" />
            <div className="prose prose-lg max-w-none">
              <p>
                Incumbents seem invincible because voter opposition is scattered. Fresh 535 concentrates that 
                opposition at the one point where it matters most: low-turnout primary elections.
              </p>
              <ul>
                <li>
                  <strong>Primary turnout averages 15-25%.</strong> In a typical congressional primary, only a 
                  fraction of registered voters participate. This means a coordinated bloc of even 10-15% of 
                  voters can decide nearly any race. Incumbents win because they face disorganized opposition—not 
                  because they are popular.
                </li>
                <li>
                  <strong>Safe seats become vulnerable.</strong> Gerrymandering creates districts safe for one 
                  party, but it does nothing to protect incumbents within their own party. A Republican in a 
                  deep-red district and a Democrat in a deep-blue district are both vulnerable to primary 
                  challenges when voters coordinate.
                </li>
                <li>
                  <strong>Fear spreads faster than defeat.</strong> We do not need to replace all 535 members. 
                  When a few long-serving incumbents lose unexpectedly, every sitting member reassesses their 
                  behavior. The threat of accountability changes votes even before election day arrives.
                </li>
              </ul>
              <p>
                This is not about electing perfect candidates. It is about creating an environment where 
                ignoring constituents has real consequences—something Congress has not experienced in decades.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">What Victory Looks Like</h2>
            <div className="section-divider mb-10" />
            <div className="space-y-6">
              <OutcomePhase
                phase="2026: The Wake-Up Call"
                title="Incumbents Start Paying Attention"
                points={[
                  "Even a handful of unexpected primary losses sends shockwaves through Congress.",
                  "Media covers the Fresh 535 movement as proof that voters are organizing.",
                  "Sitting members start holding real town halls and responding to constituent concerns.",
                ]}
              />
              <OutcomePhase
                phase="2028-2030: Behavior Changes"
                title="Representatives Remember Who They Work For"
                points={[
                  "Knowing their seat is not safe, members become more responsive between elections.",
                  "Bipartisan cooperation increases as representatives prioritize results over posturing.",
                  "Qualified challengers emerge in races that were previously considered unwinnable.",
                ]}
              />
              <OutcomePhase
                phase="2032+: A New Normal"
                title="Democracy Works Again"
                points={[
                  "Every congressional seat is treated as contestable—because it is.",
                  "Congress actually addresses healthcare, housing, immigration, and other long-neglected issues.",
                  "Public approval of Congress rises as the institution starts delivering for ordinary Americans.",
                ]}
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Your Role in the Movement</h2>
            <div className="section-divider mb-10" />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Pledge Your Vote</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Commit to voting against your incumbent in 2026</li>
                  <li>Your pledge shows demand in your district</li>
                  <li>Get reminders as primary dates approach</li>
                </ul>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Recruit Your Circle</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Share our resources with friends and family</li>
                  <li>Every conversation builds local momentum</li>
                  <li>Focus on shared frustrations, not partisan issues</li>
                </ul>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Show Up on Primary Day</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Most voters skip primaries—you will not</li>
                  <li>Vote for any challenger over the incumbent</li>
                  <li>Report your vote to confirm turnout numbers</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="btn-professional">
                <Link href="/pledge">Take the Pledge Now</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-2">Common Questions</h2>
            <div className="section-divider mb-10" />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  What if I actually like my representative?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Even good representatives benefit from a system without accountability. The goal is not to 
                  punish individuals—it is to change the incentive structure for everyone. When seats are 
                  competitive, all members work harder. Your representative will represent you better when 
                  they know their job depends on it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  Will not this just elect extremists?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Extremists thrive in low-turnout primaries where only the most motivated voters participate.
                  Fresh 535 brings more voters into primaries—including moderates who typically sit out. Higher 
                  turnout actually favors mainstream candidates and reduces extremism.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                  Is not experience in Congress valuable?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The experience of the current Congress has produced 27 bills in a year, $34 trillion in debt, 
                  and 18% approval. What exactly is that experience good for? Institutional knowledge exists in 
                  staff and research services—not just members. New representatives bring fresh energy and direct 
                  accountability to the voters who just elected them.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">
                  How is this different from term limits?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Term limits require a constitutional amendment—nearly impossible to achieve. Fresh 535 works 
                  within the existing system. We are not changing the rules; we are changing voter behavior. And 
                  unlike term limits, this approach creates ongoing accountability, not just a countdown to retirement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  )
}



const OutcomePhase = ({ phase, title, points }: { phase: string; title: string; points: string[] }) => (
  <div className="border-l-4 border-primary pl-6 py-4">
    <p className="text-sm font-semibold text-primary uppercase tracking-wider">{phase}</p>
    <h3 className="text-2xl font-bold mt-1 mb-3">{title}</h3>
    <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
)
