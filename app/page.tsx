export const dynamic = "force-dynamic"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react"
import { HistoricalReelectionChart } from "@/components/charts/historical-reelection-chart"
import { CongressionalApprovalChart } from "@/components/charts/congressional-approval-chart"

const stats = [
  { value: "95%", label: "Incumbent reelection rate", detail: "Structural advantages like gerrymandering and donor networks insulate them from accountability" },
  { value: "18%", label: "Public approval rating", detail: "Historic low that should end careers, yet they keep winning anyway" },
  { value: "~20%", label: "Primary turnout", detail: "Low participation means a coordinated minority can decide every race" },
]

const playbook = [
  {
    title: "Make the commitment public",
    description: "When you pledge, you add your name to a growing count in your district. That number is visible to your neighbors, your community, and your incumbent.",
    icon: BarChart3,
  },
  {
    title: "Show up to the primary",
    description: "Most congressional primaries are decided by fewer than 30,000 votes. You do not need a majority of America. You need your neighbors to vote.",
    icon: Activity,
  },
  {
    title: "Vote for the challenger",
    description: "The specific challenger is secondary. The act of voting out the incumbent is the message. When enough districts do it, every remaining member gets the message too.",
    icon: ShieldCheck,
  },
]

const actionCards = [
  {
    title: "Take the pledge",
    description: "Add your name. Commit to voting against your incumbent in 2026. That is step one.",
    href: "/pledge",
    icon: Target,
  },
  {
    title: "Find your incumbent",
    description: "See who currently holds your seat and how long they have been there.",
    href: "/my-district",
    icon: MapPin,
  },
  {
    title: "Read the strategy",
    description: "Understand why the primary is the most important vote you will cast and how this works at scale.",
    href: "/solution",
    icon: Globe,
  },
  {
    title: "Tell someone",
    description: "Share this with five people you know. That is how every real movement has ever started.",
    href: "/resources",
    icon: Sparkles,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden bg-brand-navy text-brand-cream">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none" />
        <div className="container mx-auto container-padding relative">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">2026 Primary Elections</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-balance">
                  If they are in, they are out.
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-red-200 text-balance">
                  Vote in a Fresh 535.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Every sitting member of Congress — all 435 Representatives and all 100 Senators — is up for a
                  challenge. Not because they are all villains, but because a system where incumbents never lose
                  is a system that stopped working for you a long time ago. The rule is simple: whoever holds the
                  seat right now does not get to keep it unopposed.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="card-elevated bg-white/5 border-white/15 text-left p-4 rounded-xl shadow-lg backdrop-blur"
                  >
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <p className="text-sm text-slate-200 font-semibold mt-1">{stat.label}</p>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{stat.detail}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="destructive" className="btn-professional shadow-lg shadow-red-500/20">
                  <Link href="/pledge">
                    <Users className="h-5 w-5 mr-2" />
                    Take the Pledge
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/30 hover:bg-white hover:text-brand-navy btn-professional"
                >
                  <Link href="/solution">
                    How It Works
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="card-elevated bg-white text-brand-charcoal p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <Image src="/brand-logo.png" alt="Fresh 535 Logo" width={48} height={48} className="drop-shadow-md" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy">The mission</p>
                    <p className="text-lg font-bold text-brand-charcoal">Replace All 535</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  There are 435 seats in the House and 100 in the Senate. Every single one is held by someone who
                  has had their chance. In 2026, we vote in a fresh set — all 535 of them.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-200 p-3">
                    <p className="text-xs text-muted-foreground">Average tenure</p>
                    <p className="text-2xl font-bold text-brand-navy">16 yrs</p>
                    <p className="text-xs text-slate-500 mt-1">Their grip. Your vote.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-3">
                    <p className="text-xs text-muted-foreground">Primary turnout</p>
                    <p className="text-2xl font-bold text-brand-navy">~20%</p>
                    <p className="text-xs text-emerald-600 font-semibold mt-1">The opening we need.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/my-district"
                    className="inline-flex items-center justify-between rounded-xl border border-brand-navy/15 bg-brand-navy/5 px-4 py-3 text-brand-navy hover:bg-brand-navy/10 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-semibold">Look up your district</p>
                      <p className="text-xs text-slate-600">Find your incumbent. See how long they have been there.</p>
                    </div>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/solution"
                    className="inline-flex items-center justify-between rounded-xl border border-brand-navy/15 bg-brand-navy/5 px-4 py-3 text-brand-navy hover:bg-brand-navy/10 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-semibold">Understand the strategy</p>
                      <p className="text-xs text-slate-600">Why the primary is the most powerful vote you can cast.</p>
                    </div>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="absolute -inset-10 -z-10 bg-red-500/15 blur-3xl rounded-full opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-balance">A Rigged System That Rewards Failure</h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Healthcare costs have risen 158% since 2000. Housing is up 47% since 2020. Congress passed just 27 bills
              in 2023. Yet incumbents still win 95% of races. The system is not broken—it is working exactly as designed
              to protect those in power.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="section-card h-full space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-destructive">Why they always win</p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Gerrymandered safe seats</p>
                    <p className="text-sm leading-relaxed">Districts drawn to guarantee outcomes. In most races, the winner is decided before a single vote is cast.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">3:1 fundraising advantage</p>
                    <p className="text-sm leading-relaxed">Incumbents outspend challengers by millions thanks to PACs, lobbyists, and corporate donors who expect favors in return.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Voter apathy is their shield</p>
                    <p className="text-sm leading-relaxed">Only 15-25% vote in primaries. Incumbents count on you staying home. We are changing that calculation.</p>
                  </div>
                </li>
              </ul>
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground">
                <span className="font-semibold">The opportunity:</span> Low primary turnout means a coordinated minority 
                can defeat any incumbent. We are building that minority.
              </div>
            </div>

            <div className="section-card h-full space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-muted-foreground">Record-low approval</p>
                <span className="rounded-full bg-red-100 text-red-700 text-xs font-semibold px-3 py-1">18% approval</span>
              </div>
              <div className="h-80 rounded-xl border bg-white p-4 shadow-sm">
                <CongressionalApprovalChart />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Congress has lower approval than root canals and traffic jams. In any functioning democracy, this would end careers. Here, it changes nothing—unless we act.
              </p>
            </div>

            <div className="section-card h-full space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-muted-foreground">Near-guaranteed reelection</p>
                <span className="rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1">
                  95% win rate
                </span>
              </div>
              <div className="h-80 rounded-xl border bg-white p-4 shadow-sm">
                <HistoricalReelectionChart />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                More secure than Soviet Politburo seats. This is not democracy—it is theater. Fresh 535 introduces real electoral consequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-balance">Three things. That is all this takes.</h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              You do not need a campaign. You do not need money. You need to pledge, show your neighbors, and vote in
              the primary. That is the whole strategy. It works because incumbents have never faced it before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {playbook.map((item) => (
              <div key={item.title} className="interactive-card p-8 h-full text-left">
                <div className="w-14 h-14 rounded-full bg-gradient-bg-accent flex items-center justify-center mb-6 shadow-lg">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {actionCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="card-elevated p-6 h-full hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <card.icon className="h-5 w-5 text-destructive" />
                  <h4 className="text-lg font-semibold">{card.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-destructive">
                  Go
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block text-sm font-semibold tracking-widest uppercase text-red-200 mb-4 border border-red-200/40 rounded-full px-4 py-1.5 bg-white/5">
              2026 Primary Elections
            </div>
            <h2 className="text-3xl md:text-4xl mb-6 text-white text-balance">Every pledge brings us closer to a Congress that actually works.</h2>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              We are not asking you to vote for a specific candidate or party. We are asking you to commit to one simple
              action: vote against the incumbent in your primary. When enough voters make that commitment, the math changes
              and accountability returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="destructive" className="btn-professional">
                <Link href="/pledge">
                  <Users className="h-5 w-5 mr-2" />
                  Add Your Name
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/30 hover:bg-white hover:text-brand-navy btn-professional"
              >
                <Link href="/analysis">
                  See the Evidence
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
