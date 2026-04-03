export const dynamic = "force-dynamic"

import { FlyerPageClient } from "./flyer-client"

export default function FlyerPage() {
  return <FlyerPageClient />
"use client"

export const dynamic = "force-dynamic"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Megaphone, Printer, ShieldCheck, Target, Users } from "lucide-react"

const stats = [
  { value: "18%", label: "Approval", detail: "Gallup 2024" },
  { value: "95%", label: "Incumbent wins", detail: "House reelection rate" },
  { value: "20%", label: "Needed turnout", detail: "Coordinated primary voters" },
]

const pillars = [
  {
    title: "Name the failure",
    copy: "Approval is collapsing while incumbents cruise to reelection. Voters feel powerless because the math feels rigged.",
  },
  {
    title: "Offer the simple instruction",
    copy: "Vote against every incumbent, every time, until accountability returns. Any viable challenger beats an entrenched insider.",
  },
  {
    title: "Show the plan to win",
    copy: "Organize 20% of voters in each district. Use pledges, district audits, and turnout goals to make it real.",
  },
]

const steps = [
  "Scan your ballot and mark every incumbent—those are the ones to replace.",
  "Pick any qualified challenger. The point is turnover, not partisan loyalty.",
  "Recruit 10 friends to do the same. Coordinate carpools and reminders for primaries.",
]

export const dynamic = "force-dynamic"

export default function FlyerPage() {
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
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
                Print-friendly handout
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">If they&apos;re in, they&apos;re out.</h1>
                <p className="text-lg text-slate-100/90 leading-relaxed max-w-3xl">
                  A one-page flyer that carries the same design language as the homepage: bold, clear, and actionable.
                  Use it at events, canvasses, and briefings.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {stats.map((stat) => (
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
                  Print this flyer
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/40 hover:bg-white hover:text-brand-navy btn-professional"
                >
                  <Link href="#details">
                    See the talking points
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="card-elevated bg-white text-brand-charcoal p-6 md:p-8 rounded-2xl shadow-2xl space-y-6 print-card">
              <div className="flex items-center gap-3">
                <Image src="/brand-logo.png" alt="Fresh 535 Logo" width={48} height={48} className="drop-shadow-md" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy">Fresh 535</p>
                  <p className="text-lg font-bold text-brand-charcoal">A flyer built to mobilize</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                This layout mirrors the homepage aesthetic—cream, navy, and decisive red accents—so every touchpoint feels
                unified. Keep the narrative tight and end with a clear ask.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-destructive mt-0.5" />
                  Lead with the disconnect: 18% approval vs. 95% reelection.
                </li>
                <li className="flex gap-2">
                  <Users className="h-4 w-4 text-brand-navy mt-0.5" />
                  Explain the 20% turnout target and how local captains drive it.
                </li>
                <li className="flex gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-navy mt-0.5" />
                  Close with the pledge ledger so people know how to act together.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <main id="details" className="container mx-auto container-padding section-padding space-y-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="card-elevated p-6 md:p-8 space-y-5 print-card">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 text-destructive px-3 py-1 text-xs font-semibold">
              What to say
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Three pillars for every conversation</h2>
            <p className="text-muted-foreground">
              Keep the storyline clean: name the problem, give the instruction, and show the path to a winnable number.
            </p>
            <div className="space-y-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-xl border bg-secondary p-4 print-card">
                  <p className="text-sm font-semibold text-foreground mb-1">{pillar.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated p-6 md:p-8 space-y-5 print-card">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
              How to act
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Turn the flyer into movement</h2>
            <ul className="space-y-3 text-muted-foreground">
              {steps.map((step) => (
                <li key={step} className="flex gap-3">
                  <Megaphone className="h-5 w-5 text-destructive mt-0.5" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl border bg-primary/5 p-4 space-y-2 print-card">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                <Target className="h-4 w-4" />
                Close with a pledge
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ask every reader to add their name to the pledge ledger. Every signature proves demand and fuels the 20%
                turnout plan.
              </p>
            </div>
          </div>
        </div>

        <div className="card-elevated p-6 md:p-8 space-y-4 print-card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-semibold text-foreground">Leave them with a commitment</h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 text-destructive px-3 py-1 text-xs font-semibold">
              <Users className="h-4 w-4" />
              Built for printing and sharing
            </div>
          </div>
          <p className="text-muted-foreground">
            Hand this out at town halls, campuses, and canvasses. It prints cleanly while keeping the homepage look and
            feel so every touchpoint reinforces the same brand.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={`cta-${stat.label}`} className="rounded-xl border bg-white/80 p-4 text-center print-card">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.detail}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center no-print pt-4">
            <Button asChild size="lg" variant="destructive" className="btn-professional">
              <Link href="/pledge">
                Take the pledge
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
              Print now
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
