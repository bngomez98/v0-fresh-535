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
      <section className="relative section-padding overflow-hidden bg-brand-navy text-brand-cream">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto container-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="text-center lg:text-left mb-8">
                <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">IF THEY'RE IN, THEY'RE OUT</div>
                <div className="text-xl md:text-2xl font-semibold text-white">VOTE IN A FRESH 535</div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Congress: 18% Approval.
                <br />
                <span className="text-gradient-red">95% Reelection Rate.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-prose">
                $34.5 trillion national debt. Healthcare costs up 158% since 2000. Housing prices up 47% since 2020.
                Congress passed 27 bills in 2023—fewest in decades. Replace all 535 incumbents in one election cycle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="destructive">
                  <Link href="/pledge">
                    <Target className="h-5 w-5 mr-2" />
                    Take the Fresh 535 Pledge
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
                src="/brand-logo.png"
                alt="Fresh 535 Logo"
                width={400}
                height={400}
                className="w-full max-w-sm mx-auto drop-shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-red-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">The Numbers Don't Lie</h2>
            <p className="text-lg text-slate-600">
              Congress approval: 18% (Gallup, 2024). House incumbent reelection: 95% (2022). Senate incumbent
              reelection: 84% (2022). Bills passed 2023: 27 (lowest since 1995). National debt increase: $7.8 trillion
              under current Congress.
            </p>
          </div>

          <div className="text-center mb-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
            >
              <Link href="/my-district">
                <MapPin className="h-5 w-5 mr-2" />
                Check Your Representative's Record
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl mb-4 text-center">Congressional Approval: Historic Low</h3>
              <div className="h-80 border rounded-lg p-4 bg-white shadow-lg">
                <CongressionalApprovalChart />
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl mb-4 text-center">Incumbent Reelection: 95% Despite Failure</h3>
              <div className="h-80 border rounded-lg p-4 bg-white shadow-lg">
                <HistoricalReelectionChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Simple Strategy: If They're In, They're Out</h2>
            <p className="text-lg text-slate-600">
              Primary elections: 15-25% turnout. General elections: 55-60% turnout. Coordinated 20% bloc vote defeats
              95% of incumbents. No constitutional amendment required.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3 p-6 bg-white border rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Vote className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Step 1: Primary Elections</h3>
              <p className="text-slate-600">
                Vote for any challenger against the sitting representative. Party affiliation irrelevant. Incumbent
                status is disqualifying.
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white border rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Step 2: General Elections</h3>
              <p className="text-slate-600">
                If incumbent wins primary, vote for opposing party candidate, third-party, or independent. Policy
                positions secondary to removal.
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white border rounded-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Result: Complete Reset</h3>
              <p className="text-slate-600">
                New Congress with zero seniority, zero committee chairs, zero lobbyist relationships. Immediate
                accountability to voters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-3xl md:text-4xl font-bold text-red-400 mb-6">VOTE IN A FRESH 535</div>
            <h2 className="text-2xl md:text-3xl mb-4">
              535 Incumbents Created These Problems. 535 Challengers Can Solve Them.
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              18% approval. 95% reelection. $34.5 trillion debt. The math is clear: replace all 535 or accept system
              collapse.
            </p>
            <Button asChild size="lg" variant="destructive">
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
