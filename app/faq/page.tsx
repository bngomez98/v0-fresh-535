export const dynamic = "force-dynamic"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="page-header">
            <h1>Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Common questions about the Fresh 535 movement, strategy, and implementation.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">What is Fresh 535?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                Fresh 535 is a nonpartisan voter instruction movement. We ask Americans to vote against all incumbent
                members of Congress—all 535—to force real accountability through turnover. We do not endorse
                candidates or advocate for specific policies. Our sole focus is restoring electoral competition and
                making every seat genuinely contestable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Does this favor one political party?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                No. The rule applies equally to incumbents of every party and ideology. We believe the dysfunction is
                systemic, not partisan—both parties have contributed to the current breakdown. In Republican districts,
                this benefits Democratic challengers. In Democratic districts, it benefits Republican challengers.
                Over time, it creates equal accountability pressure across the entire institution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Is Fresh 535 a PAC or political organization?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                No. Fresh 535 is a voter education and coordination movement. We do not raise or distribute money for
                candidates, make electoral endorsements, or engage in traditional political activities. We operate as
                a 501(c)(4) social welfare organization focused on civic education, providing information and
                encouraging lawful voter participation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What if I like my current representative?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                Individual representatives may be well-intentioned, but even good members operate within—and benefit
                from—a broken system. They participate in the same fundraising incentive structures and the same
                self-preservation mechanisms that have produced record dysfunction. The system itself must change.
                The long-term gain of a fully accountable Congress outweighs the short-term cost of losing any
                single member.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What if the challenger is unqualified or extreme?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                New members haven't been captured by entrenched interests yet—they're more likely to respond to
                constituents than to lobbyists and donors. As districts become genuinely competitive, higher-quality
                candidates are attracted to run. The threat of replacement will also moderate behavior across the
                board. Trading known, guaranteed dysfunction for potential improvement is a rational bet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Won't this create chaos and inexperience in Congress?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                The current system is already producing chaos and dysfunction—just with highly experienced members.
                Fresh perspectives and new accountability often outperform entrenched habits and captured loyalties.
                Congressional institutional knowledge lives primarily in professional committee staff and the
                Congressional Research Service, not in individual members. Turnover breaks up power structures;
                it does not erase expertise.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How many people do you need to make this work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                Primary elections typically see 15–25% turnout, and many general elections are decided by small
                margins. A coordinated 20% of voters can swing most races. We don't need a majority—just enough
                people to create genuine electoral consequences. Even the credible threat of organized opposition
                changes how incumbents govern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What happens after we replace everyone?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                New representatives will know that electoral consequences are real—and govern accordingly. Districts
                will choose their own direction with fresh, accountable leadership. The goal is not any specific
                policy outcome but a legislature that understands it can be fired. A Congress that knows it
                can lose will behave entirely differently from one that considers itself permanent.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">Do you accept donations?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                Yes. We accept donations to cover operational costs including website maintenance, data analysis, and
                voter education materials. We never accept or distribute funds for candidates. All contributions
                go toward movement infrastructure and civic education. We publish quarterly financial reports for
                full transparency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How do I know which candidates are incumbents?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                Incumbents are current officeholders running for reelection. Your ballot will typically indicate this,
                and your state's official election website will confirm it. If someone is currently serving in Congress,
                they are an incumbent. We are building district lookup tools to help voters identify incumbents quickly
                and easily.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What about local and state elections?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                Fresh 535 focuses specifically on federal Congressional elections—the House and Senate. Local and
                state offices have different dynamics and warrant different approaches. We believe resetting the
                U.S. Congress is the highest-leverage point for restoring functional democratic governance at
                the national level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">Is this legal?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                Absolutely. Voter education and coordination are fundamental democratic rights. We encourage legal
                participation in the electoral process and operate transparently within all applicable laws and
                election regulations. There is nothing more American than organizing voters around a shared civic goal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">How can I help spread the word?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                Share our hashtags (#Fresh535, #FireThemAll, #IfTheyreInTheyreOut), tell five people about the
                movement, and invite them to take the pledge. Use our social media graphics and printable flyers.
                Word-of-mouth and peer-to-peer sharing are our most powerful growth tools. Every conversation
                you start matters.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">What's your success metric?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                We measure success by increased electoral competition and accountability: higher incumbent defeat
                rates, closer election margins, more qualified challengers entering races, and ultimately improved
                congressional performance on the issues that matter to Americans. We track these metrics publicly
                and adjust strategy based on real-world results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15" className="border-2 rounded-xl px-6 hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Why not work within the existing parties?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 leading-relaxed">
                Both parties benefit from the current system of safe seats and incumbent protection. Neither has a
                structural incentive to reform a system that keeps their members in power. Real change requires
                external voter pressure from people willing to cross party lines to demand accountability. This
                is bigger than any party—it is about restoring representative government itself.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-16 section-card shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We're here to help. Contact us with any questions not covered here.
            </p>
            <Button asChild size="lg" className="btn-professional">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
