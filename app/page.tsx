import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, AlertTriangle, Shield, Vote, Zap, Globe } from "lucide-react"
import { PledgeCounter } from "@/components/pledge-counter"
import { HistoricalReelectionChart } from "@/components/charts/historical-reelection-chart"
import { CongressionalApprovalChart } from "@/components/charts/congressional-approval-chart"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden bg-brand-navy text-brand-cream">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto container-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Our Government Should Work for Us.
                <br />
                <span className="text-gradient-red">It's Time for a System Reset.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-prose">
                This is a non-partisan civic movement to restore a government that is responsive to the American people.
                While our nation faces urgent challenges—from economic instability and rising healthcare costs to a
                climbing national debt—our current system is unable to produce effective solutions. By replacing every
                member of Congress, we can reset the system and ensure our representatives are focused on solving
                problems, not preserving their careers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="destructive">
                  <Link href="/pledge">
                    <Target className="h-5 w-5 mr-2" />
                    Take the Pledge
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-slate-400 hover:bg-white hover:text-brand-navy"
                >
                  <Link href="/solution">
                    How It Works
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000">
              <Image
                src="/fresh-535-logo-white.png"
                alt="Fresh 535 Logo"
                width={500}
                height={500}
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-red-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Pledge Counter Section */}
      <section className="bg-brand-charcoal text-brand-cream border-y border-slate-800">
        <div className="container mx-auto container-padding py-12">
          <PledgeCounter />
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">An Unresponsive System</h2>
            <p className="text-lg text-slate-600">
              The foundation of a healthy republic is a government that responds to the needs of its citizens. Today,
              that connection is severed. Public trust in Congress is at historic lows, yet the institution remains
              unchanged, with incumbents winning reelection at rates that defy logic. This isn't a partisan issue; it's
              a systemic problem that affects every American by leaving critical national challenges—like our $34
              trillion national debt, crumbling infrastructure, and soaring healthcare costs—unaddressed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl mb-4 text-center">Public Trust Has Collapsed...</h3>
              <div className="h-80 border rounded-lg p-4 bg-white shadow-lg">
                <CongressionalApprovalChart />
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl mb-4 text-center">...But Reelection is Nearly Guaranteed</h3>
              <div className="h-80 border rounded-lg p-4 bg-white shadow-lg">
                <HistoricalReelectionChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Threat Section */}
      <section className="section-padding bg-brand-navy text-brand-cream">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-white">The Cost of an Unresponsive System</h2>
              <p className="text-slate-300 max-w-prose text-lg">
                When a government stops solving problems for its people, it creates a vacuum that extremist ideologies
                are eager to fill. Highly-organized groups see this widespread frustration not as a problem to be
                solved, but as an opportunity. Their detailed blueprints, like Project 2025, are a direct threat to
                American democracy, and an unresponsive Congress is incapable of mounting an effective defense.
              </p>
              <Button asChild variant="secondary">
                <Link href="/about">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Analyze the Threat
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Shield size={160} className="text-red-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <AlertTriangle size={80} className="text-red-500/50 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">A Simple, Powerful System Reset</h2>
            <p className="text-lg text-slate-600">
              We don't need to reform the system from the inside. We need to reset it using the power we already have as
              voters. The strategy is direct, non-partisan, and effective.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3 p-6 border rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Vote className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">1. Vote Them Out</h3>
              <p className="text-slate-600">
                In every primary and general election, vote against the incumbent. It doesn't matter which party they
                belong to. The goal is 100% turnover, creating a clean slate.
              </p>
            </div>
            <div className="space-y-3 p-6 border rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">2. Force Accountability</h3>
              <p className="text-slate-600">
                A new Congress, fully aware that it can be entirely replaced, will be immediately and powerfully
                accountable to voters, not to donors or party leadership.
              </p>
            </div>
            <div className="space-y-3 p-6 border rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">3. Restore Democracy</h3>
              <p className="text-slate-600">
                This action breaks the cycle of corruption and special interest capture. It forces a return to a
                government that is of the people, by the people, and for the people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-slate-100 border-t">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl max-w-2xl mx-auto mb-4">Your Vote is the Only Tool That Matters.</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            This isn't about left vs. right. It's about restoring a functional government. Join a coalition of voters
            from across the political spectrum who are ready to demand change.
          </p>
          <Button asChild size="lg" variant="destructive">
            <Link href="/pledge">
              <Users className="h-5 w-5 mr-2" />
              I'm Ready. Take Me to the Pledge.
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
