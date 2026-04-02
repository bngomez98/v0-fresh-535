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
  { value: "95%", label: "Incumbent reelection", detail: "Name ID + donor networks keep them safe" },
  { value: "18%", label: "Public approval", detail: "Congress keeps winning while legitimacy collapses" },
  { value: "20%", label: "Voters needed", detail: "Coordinated primary turnout to retire all 535" },
]

const playbook = [
  {
    title: "Data-first targeting",
    description: "Live pledge ledger, district intel, and turnout goals so every action ladders up to a winnable number.",
    icon: BarChart3,
  },
  {
    title: "Field operations",
    description: "Local captains mobilize neighbors, share scripts, and schedule rides so turnout happens automatically.",
    icon: Activity,
  },
  {
    title: "Accountability loop",
    description: "Transparent progress dashboards and weekly briefings keep volunteers and donors aligned on results.",
    icon: ShieldCheck,
  },
]

const actionCards = [
  {
    title: "Take the pledge",
    description: "Add your name to the nationwide ledger and prove demand in your district.",
    href: "/pledge",
    icon: Target,
  },
  {
    title: "Audit your district",
    description: "See tenure, margins, and how many votes we actually need to flip it.",
    href: "/my-district",
    icon: MapPin,
  },
  {
    title: "Study the plan",
    description: "Read the full playbook and see how we coordinate primaries and generals.",
    href: "/solution",
    icon: Globe,
  },
  {
    title: "Share the data",
    description: "Use charts and one-pagers to persuade neighbors that change is possible.",
    href: "/data",
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  A professional plan to retire every incumbent—on purpose.
                </h1>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
                  Congress keeps winning with 18% approval because nobody coordinates voters. Fresh 535 is a disciplined,
                  data-backed operation: we track commitments, set district-level turnout goals, and move people to the polls
                  together.
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
            <h2 className="text-3xl md:text-4xl mb-4">Why They Ignore You</h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              They know they&apos;ll win. Incumbents combine name recognition, gerrymandered districts, and donor networks
              to secure 95% reelection—even while only 18% of Americans approve of their performance. Coordinated voter
              action is the only unlock.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="section-card h-full space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">System advantages</p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Name ID and donor insulation</p>
                    <p className="text-sm leading-relaxed">Incumbents start with cash and recognition challengers can&apos;t match.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Low-turnout primaries</p>
                    <p className="text-sm leading-relaxed">15–25% of voters decide primaries. We only need a precise 20% to flip results.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Fragmented outrage</p>
                    <p className="text-sm leading-relaxed">People are angry in isolation. We convert that energy into coordinated action.</p>
                  </div>
                </li>
              </ul>
              <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4 text-sm text-foreground">
                We treat this like a national product launch: clear metrics, consistent messaging, and a go-to-market plan
                for every district.
              </div>
            </div>

            <div className="section-card h-full space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-muted-foreground">Approval is collapsing</p>
                <span className="rounded-full bg-red-100 text-red-700 text-xs font-semibold px-3 py-1">18% approval</span>
              </div>
              <div className="h-80 rounded-xl border bg-white p-4 shadow-sm">
                <CongressionalApprovalChart />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The mandate is gone. We translate that frustration into a disciplined turnout machine instead of sporadic outrage.
              </p>
            </div>

            <div className="section-card h-full space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-muted-foreground">Reelection math</p>
                <span className="rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1">
                  95% reelection
                </span>
              </div>
              <div className="h-80 rounded-xl border bg-white p-4 shadow-sm">
                <HistoricalReelectionChart />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The data is clear: until a coordinated bloc shows up, incumbents never feel pressure. We are that bloc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Full-Stack Playbook</h2>
            <div className="section-divider mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Primary turnout averages 15–25%. We only need a disciplined 20% to force every incumbent into retirement. Here
              is how we marshal people, data, and money to get there.
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
              Vote in a Fresh 535
            </div>
            <h2 className="text-3xl md:text-4xl mb-6 text-white">The movement is growing. Help us finish the build.</h2>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Every day more voters realize their representatives don&apos;t represent them. Fresh 535 gives them a path to
              act together: pledge, recruit, and show up. When we do, the math flips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="destructive" className="btn-professional">
                <Link href="/pledge">
                  <Users className="h-5 w-5 mr-2" />
                  Take the Fresh 535 Pledge
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/30 hover:bg-white hover:text-brand-navy btn-professional"
              >
                <Link href="/resources">
                  Share the toolkit
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
