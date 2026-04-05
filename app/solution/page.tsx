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
            <h1>The Strategy</h1>
            <p className="text-xl text-muted-foreground">
              If they are in, they are out. Vote in a Fresh 535. Here is how that actually works.
            </p>
          </div>

          <section className="mb-16">
            <div className="bg-card border-l-4 border-destructive p-8 rounded-r-xl shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-4">What Fresh 535 Is</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Fresh 535 is a nonpartisan voter commitment to replace every sitting member of Congress in the 2026
                elections. All 435 House members. All 33 Senate seats up for election. If you currently hold a seat, 
                you are the incumbent. If you are the incumbent, voters committed to Fresh 535 will vote for your challenger.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                This is not about left or right. It is not about any specific policy. It is about the simple fact
                that a legislature where nearly no one ever loses their job has no reason to do their job. We are
                changing that — one primary at a time.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-center mb-2">How It Works</h2>
            <div className="section-divider mb-10" />
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">1. Know who is in your seat</h3>
                <p className="text-muted-foreground leading-relaxed">Find your current Representative and Senators. Look up how long they have held office. That person is who you are replacing.</p>
              </div>
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">2. Vote in the primary</h3>
                <p className="text-muted-foreground leading-relaxed">Most people skip primaries. That is exactly why incumbents always win. In 2026, you will not skip it. Vote for whoever is challenging the incumbent. That is the whole action.</p>
              </div>
              <div className="interactive-card p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">3. Get five more people to do it</h3>
                <p className="text-muted-foreground leading-relaxed">Primary elections are won and lost in the hundreds or low thousands of votes. Your five neighbors can decide a race. Tell them.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">
              Why the Primary — Not the General
            </h2>
            <div className="section-divider mb-10" />
            <div className="prose prose-lg max-w-none">
              <p>
                Most people think the general election in November is where the real contest happens. In most
                congressional races, it is not. The district has already been decided by the time November arrives.
              </p>
              <ul>
                <li>
                  <strong>Congressional primaries decide most races.</strong> Thanks to decades of gerrymandering,
                  the vast majority of House districts reliably vote the same party every cycle. The general election
                  is a formality. The primary is the only real contest.
                </li>
                <li>
                  <strong>Primary turnout is around 15 to 25 percent.</strong> That means most registered voters in
                  your district are sitting it out. An incumbent who wins a primary with 18,000 votes is not
                  untouchable — they are just rarely challenged. When neighbors organize and show up together, 
                  those numbers move fast.
                </li>
                <li>
                  <strong>Gerrymandering cannot protect you inside your own party.</strong> A safe Republican
                  district is still a place where Republicans vote against Republicans in the primary. A safe
                  Democratic district is still a place where Democrats vote against Democrats. The incumbency
                  armor does not work in the primary the way it does in the general.
                </li>
                <li>
                  <strong>You do not need to win everywhere to change everything.</strong> When a handful of
                  long-serving incumbents lose in primaries, every other member of Congress notices. No seat
                  felt safe after those results. That is when behavior changes — not just for the losers, 
                  but for every survivor who does not want to be next.
                </li>
              </ul>
              <p>
                We are not asking you to agree on a candidate, a party, or a platform. We are asking you to
                show up to your primary and vote for whoever is running against the incumbent. That is the
                action. That is the whole thing.
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
            <h2 className="text-3xl font-bold text-center mb-2">What You Do</h2>
            <div className="section-divider mb-10" />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Pledge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Commit publicly to voting against your incumbent in the 2026 primary. Your name joins the
                  count in your district. When that number grows, it becomes real pressure — visible to your
                  community and to the incumbent themselves.
                </p>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Talk to people</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not online arguments. Real conversations with people you know. Your coworkers, your family,
                  your neighbors. Ask them how long their representative has held that seat. Ask them what
                  those years have produced. Then tell them what you are doing about it.
                </p>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Vote in the primary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Find your primary date. Put it on your calendar. Show up. Vote for whoever is not the
                  incumbent. That is it. That is the action that makes everything else real.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="btn-professional">
                <Link href="/pledge">Take the Pledge</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-2">Questions people ask</h2>
            <div className="section-divider mb-10" />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  My representative is one of the good ones. Why should I vote them out?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  If your representative is genuinely doing a great job, you may choose to weigh that. But
                  consider this: even a good representative operates inside a system where nearly no one else
                  is accountable. They are the exception, and exceptions do not fix broken institutions. The goal
                  of Fresh 535 is to change the incentive structure for all 535 members — not just the ones you
                  are frustrated with. A Congress where every seat is genuinely competitive will produce better
                  representatives, including the ones who are already good.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  What if the challenger is worse than the incumbent?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  That is a real question and a real risk. Fresh 535 does not endorse specific challengers —
                  it endorses the act of replacing the person who currently holds the seat. If you genuinely
                  believe the challenger poses a serious harm, use your own judgment. But in most races, the
                  challenger has not had a decade in Washington to prove how little they care about your
                  community. The incumbent has.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                  Is this not basically just term limits?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Term limits require a constitutional amendment. That process takes years and is controlled
                  by the same people who would be limited. Fresh 535 does not wait for permission. It works
                  inside the elections that already exist, using the votes that voters already have. And unlike
                  term limits — which just guarantee retirement after X years regardless of performance — this
                  approach ties removal to an actual election, which means voters stay in control every cycle,
                  not just every decade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">
                  Can this actually work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Most congressional primaries are decided by fewer than 30,000 votes. Some by far fewer. The
                  incumbent wins not because they are beloved — Congress has an 18% approval rating — but because
                  organized opposition rarely shows up. When it does, incumbents lose. We have seen it happen
                  across both parties. The question is not whether this can work. It has worked. The question
                  is whether enough people will do it at the same time to make it impossible to ignore.
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
