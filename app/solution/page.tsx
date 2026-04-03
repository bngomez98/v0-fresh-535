export const dynamic = "force-dynamic"

import type React from "react"
import { Lightbulb, Target, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SolutionPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="page-header">
            <h1>The Strategy for Accountability</h1>
            <p className="text-xl text-muted-foreground">
              A detailed guide to the Fresh 535 movement's theory of change and practical application.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">How It Works: A Three-Step Process</h2>
            <div className="section-divider mb-10" />
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Step 1: Identify</h3>
                <p className="text-muted-foreground leading-relaxed">In any federal election, find the incumbent on your ballot. They are the current officeholder running for reelection.</p>
              </div>
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Step 2: Replace</h3>
                <p className="text-muted-foreground leading-relaxed">Vote for any non-incumbent challenger. The goal is turnover, not endorsement.</p>
              </div>
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Step 3: Reset</h3>
                <p className="text-muted-foreground leading-relaxed">This action, when coordinated, creates a legislature that serves voters, not parties.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">
              The Theory of Change: The Power of a Coordinated Minority
            </h2>
            <div className="section-divider mb-10" />
            <div className="prose prose-lg max-w-none">
              <p>
                The Fresh 535 strategy is effective because it leverages core democratic principles in a system that has
                become unresponsive. It does not require a majority of voters to succeed.
              </p>
              <ul>
                <li>
                  <strong>Leveraging Primary Elections:</strong> Congressional primaries often have very low turnout. In
                  this environment, a small, organized bloc of voters can have an outsized impact, replacing an
                  incumbent who expects an easy victory. This is a key area of focus.
                </li>
                <li>
                  <strong>Influencing General Elections:</strong> While many districts are considered "safe" for one
                  party, the overall balance of power in Congress often depends on a few dozen competitive races. A
                  coordinated vote against incumbents in these races can shift the institutional dynamics.
                </li>
                <li>
                  <strong>Restoring Responsiveness:</strong> The true power is not just in replacing members, but in
                  changing the behavior of the entire institution. A representative who won a surprisingly close race,
                  or who saw their colleagues unexpectedly defeated, is far more likely to be responsive to constituent
                  concerns. They will govern with the knowledge that their position is temporary and depends entirely on
                  the will of the voters.
                </li>
              </ul>
              <p>
                The objective is not to influence any single policy outcome, but to reset the electoral incentives for
                all members of Congress.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Anticipated Outcomes & Strategic Trajectory</h2>
            <div className="section-divider mb-10" />
            <div className="space-y-6">
              <OutcomePhase
                phase="Phase 1: Short-Term (1-2 Election Cycles)"
                title="A More Responsive Dialogue"
                points={[
                  "Incumbents in safe districts face credible primary challenges, forcing them to engage with voters.",
                  "A small number of unexpected defeats sends a clear signal that no seat is guaranteed.",
                  "Media narrative shifts to focus on voter empowerment and the demand for a more responsive government.",
                ]}
              />
              <OutcomePhase
                phase="Phase 2: Medium-Term (3-5 Election Cycles)"
                title="A Focus on Problem-Solving"
                points={[
                  "Sitting representatives adopt more moderate, consensus-oriented approaches to avoid electoral challenges.",
                  "More qualified, non-traditional candidates are attracted to run as more seats become genuinely competitive.",
                  "Legislative focus begins to shift from partisan messaging to addressing key national issues.",
                ]}
              />
              <OutcomePhase
                phase="Phase 3: Long-Term (5+ Election Cycles)"
                title="A System Aligned with the People"
                points={[
                  "A 'new normal' is established where every seat is considered contestable, ensuring constant responsiveness.",
                  "Congress becomes a more dynamic and effective institution capable of tackling long-term challenges.",
                  "Public trust in the legislative branch begins to recover as its performance improves the lives of Americans.",
                ]}
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Implementation Plan</h2>
            <div className="section-divider mb-10" />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Phase A: Mobilize</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Pledge capture and reminder workflow</li>
                  <li>District-focused share kits</li>
                  <li>Volunteer onboarding</li>
                </ul>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Phase B: Target</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Primary calendar map and turnout goals</li>
                  <li>Incumbent risk score (beta)</li>
                  <li>Localized messaging</li>
                </ul>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Phase C: Execute</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Vote reminders and early-vote prompts</li>
                  <li>Field reports and rapid adjustments</li>
                  <li>Post-election analysis and debrief</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="btn-professional">
                <Link href="/pledge">Join the Coordinated Vote</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-2">Addressing Common Objections</h2>
            <div className="section-divider mb-10" />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  Doesn't this risk replacing experienced legislators with unqualified amateurs?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The data shows that the "experience" of the current Congress has produced legislative paralysis and record-low public
                  trust. The expertise acquired is often in navigating D.C. fundraising, not effective governance. New members bring fresh perspectives and a direct connection to the voters who just elected them.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  What if the challenger is an extremist or holds dangerous views?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Fresh 535 is an instruction to vote against the incumbent, not an endorsement of the challenger. As districts become more competitive, more qualified candidates are incentivized to run. The risk of electing a poor challenger is outweighed by the certainty of continued institutional failure under the status quo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                  Will this weaken Congress relative to the executive branch?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Institutional knowledge resides not just in members, but in professional committee staff and the Congressional Research Service. High turnover breaks up entrenched power structures that contribute to gridlock. A more responsive Congress is a stronger check on executive power than a paralyzed but experienced one.
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
