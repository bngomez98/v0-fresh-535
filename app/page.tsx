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
    title: "Track every commitment",
    description: "Our pledge ledger maps voter intent by district. When we hit critical mass, incumbents face real electoral pressure for the first time.",
    icon: BarChart3,
  },
  {
    title: "Mobilize at the local level",
    description: "Primaries are won on the ground. Local captains coordinate rides, share talking points, and turn pledges into votes on election day.",
    icon: Activity,
  },
  {
    title: "Transparent accountability",
    description: "Real-time dashboards show progress district-by-district. No backroom deals. Every action visible. Every result measurable.",
    icon: ShieldCheck,
  },
]

const actionCards = [
  {
    title: "Take the pledge",
    description: "Commit to voting against your incumbent in 2026. Your pledge signals demand and builds momentum.",
    href: "/pledge",
    icon: Target,
  },
  {
    title: "Know your district",
    description: "See how long your rep has held power, their voting record, and how many pledges we need to flip the seat.",
    href: "/my-district",
    icon: MapPin,
  },
  {
    title: "Understand the strategy",
    description: "Learn why coordinated primary voting is the most effective path to forcing Congress to actually represent us.",
    href: "/solution",
    icon: Globe,
  },
  {
    title: "Spread the word",
    description: "Download shareable graphics and talking points to bring your friends and family into the movement.",
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
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
                  Full-stack civic reset
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-destructive" />
                  Data + field + accountability
                </span>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-balance">
                  Congress ignores you because they know you cannot coordinate.
                </h1>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
                  With 18% approval and 95% reelection, they have no reason to listen. Fresh 535 changes that equation.
                  We track voter commitments district-by-district and turn scattered frustration into coordinated 
                  primary turnout that forces real accountability.
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
                    <Target className="h-5 w-5 mr-2" />
                    Join the Movement
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/30 hover:bg-white hover:text-brand-navy btn-professional"
                >
                  <Link href="/solution">
                    See How We Win
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-destructive" />
                  Verified, secure pledge tracking
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-destructive" />
                  Modern UX built for voters, not insiders
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4 text-destructive" />
                  Local captains in every district
                </span>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="card-elevated bg-white text-brand-charcoal p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <Image src="/brand-logo.png" alt="Fresh 535 Logo" width={48} height={48} className="drop-shadow-md" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy">Launch readiness</p>
                    <p className="text-lg font-bold text-brand-charcoal">District Control Center</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Track pledge velocity, see which counties need a push, and download scripts for your next phone bank.
                  Every widget stays synced with the same ledger powering our API.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-200 p-3">
                    <p className="text-xs text-muted-foreground">Live pledges</p>
                    <p className="text-2xl font-bold text-brand-navy">142,311</p>
                    <p className="text-xs text-emerald-600 font-semibold mt-1">+3,912 this week</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-3">
                    <p className="text-xs text-muted-foreground">Avg. tenure</p>
                    <p className="text-2xl font-bold text-brand-navy">16 yrs</p>
                    <p className="text-xs text-slate-500 mt-1">Time to retire them.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/my-district"
                    className="inline-flex items-center justify-between rounded-xl border border-brand-navy/15 bg-brand-navy/5 px-4 py-3 text-brand-navy hover:bg-brand-navy/10 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-semibold">Audit my district</p>
                      <p className="text-xs text-slate-600">See incumbency length, margins, and turnout gaps.</p>
                    </div>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {actionCards.slice(0, 2).map((action) => (
                      <Link
                        key={action.href}
                        href={action.href}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 px-4 py-3 hover:border-brand-navy/40 transition-colors"
                      >
                        <action.icon className="h-5 w-5 text-brand-navy mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-brand-charcoal">{action.title}</p>
                          <p className="text-xs text-slate-600 leading-relaxed">{action.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
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
            <h2 className="text-3xl md:text-4xl mb-4 text-balance">A Coordinated Strategy to Force Accountability</h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Incumbents survive because voter opposition is scattered. Fresh 535 concentrates that opposition where it
              matters most: in primaries, where turnout is low enough that a committed bloc of voters can decide every race.
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
