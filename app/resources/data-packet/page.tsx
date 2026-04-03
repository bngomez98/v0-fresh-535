export const dynamic = "force-dynamic"

import { DataPacketPageClient } from "./data-packet-client"

export default function DataPacketPage() {
  return <DataPacketPageClient />
"use client"

export const dynamic = "force-dynamic"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Printer,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"
import { HistoricalReelectionChart } from "@/components/charts/historical-reelection-chart"
import { CongressionalApprovalChart } from "@/components/charts/congressional-approval-chart"
import { CampaignSpendingChart } from "@/components/charts/campaign-spending-chart"

const headlineStats = [
  { value: "18%", label: "Approval", detail: "Gallup 2024" },
  { value: "95%", label: "House reelection", detail: "2022 cycle" },
  { value: "3x", label: "Fundraising edge", detail: "Incumbents vs challengers" },
  { value: "20%", label: "Turnout needed", detail: "Coordinated primary voters" },
]

const takeaways = [
  "A legitimacy crisis: approval is collapsing while reelection is nearly guaranteed.",
  "Money is the moat: incumbents out-raise challengers 3:1, starving competition.",
  "The solution is math-driven: a disciplined 20% turnout retires every incumbent.",
]

const actionItems = [
  "Use this packet in briefings and organizing calls to keep everyone aligned on the numbers.",
  "Lead with the approval vs. reelection charts—people move when they see the disconnect.",
  "Finish with the 20% target: every script and action should ladder up to that goal.",
]

export const dynamic = "force-dynamic"

export default function DataPacketPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <style jsx global>{`
        @media print {
          body {
            background: #fff !important;
            color: #000 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .print-card {
            break-inside: avoid;
            box-shadow: none !important;
            border-color: #111 !important;
            background: #fff !important;
          }
          .print-hero {
            background: #fff !important;
            color: #000 !important;
          }
        }
      `}</style>

      <section className="relative overflow-hidden bg-brand-navy text-brand-cream print-hero">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.15),transparent_25%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none" />
        <div className="container mx-auto container-padding section-padding relative">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
                Data packet
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  The evidence deck: why Congress must be replaced.
                </h1>
                <p className="text-lg text-slate-100/90 leading-relaxed max-w-3xl">
                  Approval is at 18%. Reelection is 95%. This packet packages the proof, the story, and the plan so
                  teams can persuade, recruit, and brief with confidence.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {headlineStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="card-elevated bg-white/10 border-white/20 text-left p-4 rounded-xl shadow-lg backdrop-blur print-card"
                  >
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <p className="text-sm text-slate-100 font-semibold mt-1">{stat.label}</p>
                    <p className="text-xs text-slate-100/80 mt-2 leading-relaxed">{stat.detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 no-print">
                <Button
                  onClick={() => window.print()}
                  size="lg"
                  variant="destructive"
                  className="btn-professional shadow-lg shadow-red-500/20"
                >
                  <Printer className="h-5 w-5 mr-2" />
                  Print the packet
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/40 hover:bg-white hover:text-brand-navy btn-professional"
                >
                  <Link href="/data">
                    Explore the data library
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="card-elevated bg-white text-brand-charcoal p-6 md:p-8 rounded-2xl shadow-2xl space-y-6 print-card">
              <div className="flex items-center gap-3">
                <Image src="/brand-logo.png" alt="Fresh 535 Logo" width={48} height={48} className="drop-shadow-md" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy">Briefing-ready</p>
                  <p className="text-lg font-bold text-brand-charcoal">Use this deck to persuade quickly</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Every slide and chart is tied to the same numbers powering our homepage. Pair these visuals with the
                pledge ledger to show we are organizing toward a winnable target.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-navy mt-0.5" />
                  Verified sources: Gallup, CRP, FEC.
                </li>
                <li className="flex gap-2">
                  <Sparkles className="h-4 w-4 text-destructive mt-0.5" />
                  Storyline mirrors the homepage—no off-brand slides.
                </li>
                <li className="flex gap-2">
                  <Target className="h-4 w-4 text-destructive mt-0.5" />
                  Close with the 20% turnout ask and a pledge CTA.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding space-y-10">
          <div className="card-elevated p-6 md:p-8 print-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Reality check</p>
                <h2 className="text-2xl font-semibold text-foreground">Approval vs. reelection</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 text-destructive px-3 py-1 text-xs font-semibold">
                <TrendingUp className="h-4 w-4" />
                Math that demands action
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-4xl">
              The core story: Americans reject Congress, yet incumbents keep winning. Open with this chart pair to show
              the disconnect in one glance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border bg-white p-4 h-72 print-card">
                <h3 className="text-center text-sm font-semibold mb-2 text-foreground">Congressional Approval (%)</h3>
                <CongressionalApprovalChart />
                <p className="text-center text-xs text-muted-foreground mt-2">Source: Gallup historical trends</p>
              </div>
              <div className="rounded-xl border bg-white p-4 h-72 print-card">
                <h3 className="text-center text-sm font-semibold mb-2 text-foreground">Incumbent Reelection (%)</h3>
                <HistoricalReelectionChart />
                <p className="text-center text-xs text-muted-foreground mt-2">Source: CRP, Ballotpedia</p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-6 md:p-8 print-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">The moat</p>
                <h2 className="text-2xl font-semibold text-foreground">Fundraising advantage blocks accountability</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                <ShieldCheck className="h-4 w-4" />
                Incumbent protection
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-4xl">
              Money keeps challengers invisible. Show the spending gap to explain why &quot;just vote them out&quot;
              fails without coordination.
            </p>
            <div className="rounded-xl border bg-white p-4 h-80 print-card">
              <CampaignSpendingChart />
              <p className="text-center text-xs text-muted-foreground mt-3">
                Source: Federal Election Commission, Center for Responsive Politics
              </p>
            </div>
          </div>

          <div className="card-elevated p-6 md:p-8 print-card">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">What the data proves</p>
                <h2 className="text-2xl font-semibold text-foreground">Takeaways to repeat in every room</h2>
                <ul className="space-y-3 text-muted-foreground">
                  {takeaways.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Sparkles className="h-5 w-5 text-destructive mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:max-w-sm">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {headlineStats.map((stat) => (
                    <div
                      key={`detail-${stat.label}`}
                      className="rounded-xl border bg-secondary p-4 text-center print-card"
                    >
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border bg-primary/5 p-4 space-y-3 print-card">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                    <Target className="h-4 w-4" />
                    20% turnout target
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every chart ladders up to the same ask: organize a disciplined 20% of voters in every district to
                    retire every incumbent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/60">
        <div className="container mx-auto container-padding">
          <div className="card-elevated p-8 md:p-10 text-center space-y-6 print-card">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 text-destructive px-4 py-1.5 text-xs font-semibold">
              Coordinated action only
            </div>
            <h2 className="text-3xl font-semibold text-foreground">Close every briefing with a next step</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Make sure every audience leaves with a clear assignment: print, share, and recruit pledges until we have a
              20% bloc in every district.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              {actionItems.map((item) => (
                <div key={item} className="rounded-xl border bg-white/70 p-4 print-card">
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center no-print">
              <Button asChild size="lg" variant="destructive" className="btn-professional">
                <Link href="/pledge">
                  Join the pledge ledger
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button
                onClick={() => window.print()}
                size="lg"
                variant="outline"
                className="btn-professional border-foreground/30"
              >
                <Printer className="h-5 w-5 mr-2" />
                Print this packet
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
