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
            <h1>The Strategy for Real Accountability</h1>
            <p className="text-xl text-muted-foreground">
              A practical guide to the Fresh 535 theory of change—and how we turn voter frustration into
              coordinated electoral action.
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
                <p className="text-muted-foreground leading-relaxed">In any federal election, find the incumbent on your ballot. They are the current officeholder seeking reelection—regardless of party.</p>
              </div>
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Step 2: Replace</h3>
                <p className="text-muted-foreground leading-relaxed">Vote for the non-incumbent challenger. The goal is turnover, not endorsement of any particular candidate or ideology.</p>
              </div>
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Step 3: Reset</h3>
                <p className="text-muted-foreground leading-relaxed">When coordinated across all 535 seats, this creates a legislature that is answerable to voters—not to parties, donors, or decades of entrenchment.</p>
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
                The Fresh 535 strategy works because it uses core democratic principles against a system that has
                stopped responding to them. It does not require a majority of voters—only a coordinated, consistent
                minority.
              </p>
              <ul>
                <li>
                  <strong>Leveraging Primary Elections:</strong> Congressional primaries typically draw only 15–25%
                  of registered voters. A small, organized bloc can have an outsized impact—defeating an incumbent
                  who expects an uncontested path to victory. Primaries are where Fresh 535 wins.
                </li>
                <li>
                  <strong>Influencing General Elections:</strong> While many districts lean safely toward one party,
                  the overall balance of power in Congress often hinges on a few dozen competitive races. A
                  coordinated vote against incumbents in these contests can shift institutional dynamics across both
                  chambers.
                </li>
                <li>
                  <strong>Changing Behavior, Not Just Seats:</strong> The deeper power of this strategy is
                  institutional, not electoral. A representative who survived a surprisingly close race—or watched
                  colleagues unexpectedly lose—governs differently. They become responsive to constituents because
                  they understand their seat is not permanent. That shift in incentives is the real reset.
                </li>
              </ul>
              <p>
                The objective is not to determine any specific policy outcome, but to restore the electoral
                accountability that makes all good policy possible.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Anticipated Outcomes & Strategic Trajectory</h2>
            <div className="section-divider mb-10" />
            <div className="space-y-6">
              <OutcomePhase
                phase="Phase 1: Short-Term (1–2 Election Cycles)"
                title="A More Responsive Dialogue"
                points={[
                  "Incumbents in safe districts face credible primary challenges for the first time, forcing genuine engagement with voters.",
                  "A small number of unexpected defeats sends a clear signal that no seat is guaranteed—regardless of party or tenure.",
                  "Media coverage shifts toward voter empowerment and the growing demand for a more accountable government.",
                ]}
              />
              <OutcomePhase
                phase="Phase 2: Medium-Term (3–5 Election Cycles)"
                title="A Culture of Problem-Solving"
                points={[
                  "Sitting members adopt more moderate, constituent-focused approaches to avoid losing their seats.",
                  "More qualified, non-traditional candidates are drawn to run as seats become genuinely competitive.",
                  "Legislative focus begins shifting from partisan messaging bills to addressing real national priorities.",
                ]}
              />
              <OutcomePhase
                phase="Phase 3: Long-Term (5+ Election Cycles)"
                title="A System Aligned With Its People"
                points={[
                  "A new normal is established where every seat is contestable—ensuring permanent responsiveness rather than permanent incumbency.",
                  "Congress becomes a more dynamic, effective institution capable of tackling long-term national challenges.",
                  "Public trust in the legislative branch begins recovering as performance improves and constituents feel heard.",
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
                  <li>Pledge capture, confirmation, and reminder workflow</li>
                  <li>District-focused share kits and talking points</li>
                  <li>Volunteer onboarding and local captain recruitment</li>
                </ul>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Phase B: Target</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Primary calendar map with district-level turnout goals</li>
                  <li>Incumbent risk scoring based on margin and pledge density</li>
                  <li>Localized messaging for each district's specific race</li>
                </ul>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Phase C: Execute</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Vote reminders, early-vote prompts, and ride coordination</li>
                  <li>Real-time field reports and rapid tactical adjustments</li>
                  <li>Post-election analysis, accountability reporting, and debrief</li>
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
                  The "experience" of the current Congress has produced record-low public trust and near-historic
                  legislative inaction. The expertise incumbents accumulate is largely in navigating D.C. fundraising
                  networks, not effective governance. New members arrive with direct accountability to the voters who
                  just elected them—and that accountability is exactly what's been missing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  What if the challenger is an extremist or holds dangerous views?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Fresh 535 is a vote against the incumbent, not an endorsement of the challenger. As districts become
                  genuinely competitive, higher-quality candidates are drawn to run. The risk of electing a weak
                  challenger in one race is far outweighed by the certainty of continued institutional failure if the
                  status quo remains unchallenged.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                  Will high turnover weaken Congress relative to the executive branch?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Institutional knowledge lives primarily in professional committee staff and the Congressional Research
                  Service—not in individual members. High turnover breaks up the entrenched power structures and
                  donor dependencies that cause gridlock. A responsive, accountable Congress is a far stronger check
                  on executive power than a paralyzed, self-preserving one.
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
