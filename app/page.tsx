import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Vote, Zap, Globe, MapPin } from "lucide-react"
import { HistoricalReelectionChart } from "@/components/charts/historical-reelection-chart"
import { CongressionalApprovalChart } from "@/components/charts/congressional-approval-chart"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto container-padding relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="text-center lg:text-left">
                <div className="inline-block text-sm font-semibold tracking-widest uppercase text-accent mb-3 border border-accent/30 rounded-full px-4 py-1.5">
                  If They're In, They're Out
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mt-4">
                  Your Vote Doesn't Count.
                  <br />
                  <span className="text-gradient-red">We're Changing That.</span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-prose">
                The political system is undeniably rigged against the will of the people.
                Despite a dismal 18% public approval rating, congressional incumbents astonishingly maintain a 95% reelection rate.
                This stark disparity means your elected representative can afford to ignore your concerns, knowing their position is virtually guaranteed regardless of their performance.
                Fresh 535 offers a revolutionary solution, engaging voters across the nation to collectively unseat every single incumbent in one election,
                dismantling the broken cycle, and restoring true accountability to our government.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="destructive" className="btn-professional">
                  <Link href="/pledge">
                    <Target className="h-5 w-5 mr-2" />
                    Join the Movement
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-professional"
                >
                  <Link href="/solution">
                    See How We Win
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-1000">
              <Image
                src="/brand-logo.png"
                alt="Fresh 535 Logo"
                width={400}
                height={400}
                className="w-full max-w-sm mx-auto drop-shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">Why Your Representative Ignores You</h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              They know they'll win. 95% of House incumbents get reelected even with 18% approval. They've built an
              unbeatable system of name recognition, gerrymandered districts, and donor networks. Only coordinated voter
              action can break it.
            </p>
          </div>

          <div className="text-center mb-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-destructive text-destructive hover:bg-destructive hover:text-white bg-transparent btn-professional"
            >
              <Link href="/my-district">
                <MapPin className="h-5 w-5 mr-2" />
                See How Long Yours Has Been There
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl font-bold mb-6 text-center">They Don't Care What You Think</h3>
              <div className="h-80 border-2 rounded-2xl p-6 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CongressionalApprovalChart />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center leading-relaxed">
                18% approval but they keep getting reelected. The system is broken.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-bold mb-6 text-center">They Know They Can't Lose</h3>
              <div className="h-80 border-2 rounded-2xl p-6 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                <HistoricalReelectionChart />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center leading-relaxed">
                A 95% reelection rate means your vote is meaningless under the current system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl mb-6">How We Take Back Control</h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Primary elections have 15-25% turnout, and general elections have 55-60% turnout. A coordinated 20% of
              voters can defeat any incumbent. Fresh 535 coordinates that 20% to fire all 535 in one election cycle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="interactive-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-bg-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Vote className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Primary: Vote Them Out</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vote for any challenger against your incumbent. Low turnout means we don't need many voters to win.
              </p>
            </div>
            <div className="interactive-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-bg-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">General: Finish the Job</h3>
              <p className="text-muted-foreground leading-relaxed">
                If they survive the primary, vote for their opponent. Party doesn't matter.
              </p>
            </div>
            <div className="interactive-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-bg-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Globe className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Victory: They Work for Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                New representatives with no seniority, no lobbyist connections. They'll need your vote to survive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block text-sm font-semibold tracking-widest uppercase text-accent mb-4 border border-accent/30 rounded-full px-4 py-1.5">
              Vote in a Fresh 535
            </div>
            <h2 className="text-3xl md:text-4xl mb-6 text-primary-foreground">The Movement Is Growing. Join Before It's Too Late.</h2>
            <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Every day more voters realize their representatives don't represent them. Fresh 535 gives them a way to
              fight back. Join now and help coordinate the largest voter rebellion in American history.
            </p>
            <Button asChild size="lg" variant="destructive" className="btn-professional">
              <Link href="/pledge">
                <Users className="h-5 w-5 mr-2" />
                Take the Fresh 535 Pledge
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
