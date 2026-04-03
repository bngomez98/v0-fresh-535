export const dynamic = "force-dynamic"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Target, FileText, BookOpen } from "lucide-react"
import { HistoricalReelectionChart } from "@/components/charts/historical-reelection-chart"
import { CongressionalApprovalChart } from "@/components/charts/congressional-approval-chart"
import { CampaignSpendingChart } from "@/components/charts/campaign-spending-chart"
import { LegislativeProductivityChart } from "@/components/charts/legislative-productivity-chart"

export default function AnalysisPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="page-header">
            <h1>
              The Academic Case for Complete Congressional Replacement
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Peer-reviewed research from Harvard University and UC Berkeley demonstrates that incumbency advantage
              has systematically dismantled electoral accountability—creating a structurally unresponsive Congress
              that requires complete replacement to restore democratic function.
            </p>
          </div>

          {/* Academic Foundation */}
          <section className="mb-16">
            <div className="bg-card border-l-4 border-primary p-8 rounded-r-xl shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <BookOpen className="h-8 w-8 mr-3 text-primary" />
                Academic Foundation
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="font-semibold mb-4">
                  "Systemic Consequences of Incumbency Advantage in U.S. House Elections"
                  <br />
                  <span className="font-normal text-slate-600">
                    Gary King (Harvard) &amp; Andrew Gelman (UC Berkeley), American Journal of Political Science, 1991
                  </span>
                </p>
                <p>
                  This landmark study analyzed 40 years of congressional election data (1946–1986) and documented the
                  structural erosion of electoral accountability. Key findings:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>1,000% increase in incumbency advantage:</strong> It rose from 1% (1946–48) to 11% (1984–86).
                  </li>
                  <li>
                    <strong>43% decline in electoral responsiveness:</strong> It dropped from 2.3 to 1.3 over 40 years.
                  </li>
                  <li>
                    <strong>Incumbency explains virtually all partisan bias trends</strong> since the 1940s.
                  </li>
                  <li>
                    <strong>The system became mathematically unresponsive</strong> to voter preferences as incumbency grew.
                  </li>
                </ul>
                <p className="font-semibold">
                  The research proves that high incumbency retention rates are not a sign of voter satisfaction—they
                  reflect structural advantages that have created a permanently unaccountable political class.
                </p>
              </div>
            </div>
          </section>

          {/* Executive Summary */}
          <section className="mb-16">
            <div className="bg-card border-l-4 border-destructive p-8 rounded-r-xl shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <FileText className="h-8 w-8 mr-3 text-destructive" />
                Current Crisis: 2025 Data
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  The King–Gelman research predicted exactly what we observe today: a Congress completely disconnected
                  from public will. Current metrics confirm the full breakdown of electoral accountability:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-background p-5 rounded-xl border">
                    <h4 className="font-bold text-destructive">Performance Metrics</h4>
                    <ul className="text-sm space-y-1.5 mt-2">
                      <li>• Congressional approval: 18% (Gallup 2024)</li>
                      <li>• Bills enacted in 2023: 27 (lowest since 1995)</li>
                      <li>• National debt: $34.5 trillion (+$7.8T under current Congress)</li>
                      <li>• Healthcare costs: +158% since 2000</li>
                      <li>• Housing prices: +47% since 2020</li>
                    </ul>
                  </div>
                  <div className="bg-background p-5 rounded-xl border">
                    <h4 className="font-bold text-chart-2">Incumbency Protection Metrics</h4>
                    <ul className="text-sm space-y-1.5 mt-2">
                      <li>• House incumbent reelection: 95% (2022–2024)</li>
                      <li>• Senate incumbent reelection: 84% (2022)</li>
                      <li>• Primary challenge success rate: &lt;5%</li>
                      <li>• Average tenure: 9.7 years (House), 11.2 years (Senate)</li>
                      <li>• Fundraising advantage: 3:1 over challengers</li>
                    </ul>
                  </div>
                </div>
                <p className="font-semibold">
                  This data confirms the King–Gelman prediction: when incumbency advantage reaches extreme levels,
                  electoral accountability effectively ceases to function.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Part I: Quantified System Failure</h2>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-semibold mb-2">The Accountability Gap</h3>
                <p className="text-muted-foreground mb-6">
                  King–Gelman research predicted this scenario precisely: when incumbency advantage exceeds 10%,
                  electoral accountability collapses completely. We have crossed that threshold.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-center mb-2">Congressional Approval: 18%</h4>
                    <div className="h-80 border rounded-xl p-4 bg-background">
                      <CongressionalApprovalChart />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">Source: Gallup Historical Trends</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-center mb-2">Incumbent Reelection Rate: 95%</h4>
                    <div className="h-80 border rounded-xl p-4 bg-background">
                      <HistoricalReelectionChart />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Source: Center for Responsive Politics, Ballotpedia
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-muted-foreground">
                  <strong>Academic Analysis:</strong> King–Gelman research shows that when incumbency advantage reaches
                  11%, electoral responsiveness drops to 1.3. Current 95% reelection rates suggest advantage now
                  exceeds 15%—creating near-zero electoral responsiveness to voter preferences.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Structural Barriers: The Fundraising Monopoly</h3>
                <p className="text-muted-foreground mb-6">
                  King–Gelman identified structural advantages—especially fundraising—as the root cause of permanent
                  incumbency. Current FEC data confirms their prediction of an entrenched financial barrier to entry.
                </p>
                <div className="h-96 border rounded-xl p-4 bg-background">
                  <CampaignSpendingChart />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Source: Federal Election Commission, Center for Responsive Politics
                </p>
                <p className="mt-6 text-muted-foreground">
                  <strong>What the Numbers Mean:</strong> Incumbents raise 3x more than challengers on average. In
                  competitive races, this advantage reaches 5:1. The system now rewards access to donor networks
                  over quality of constituent representation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Legislative Collapse</h3>
                <p className="text-muted-foreground mb-6">
                  King–Gelman predicted that extreme incumbency advantage would erode legislative effectiveness.
                  Historical productivity data confirms exactly that trajectory over the past five decades.
                </p>
                <div className="h-96 border rounded-xl p-4 bg-background">
                  <LegislativeProductivityChart />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Source: Pew Research Center analysis of Congressional data
                </p>
                <p className="mt-6 text-muted-foreground">
                  <strong>What the Trend Shows:</strong> Bills enacted in 2023 fell to a historic low—roughly 73%
                  below 1970s averages. When members face no electoral consequences, governing takes a back seat
                  to fundraising and positioning.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-destructive/10 border-l-4 border-destructive p-8 rounded-r-xl">
              <h2 className="text-3xl font-bold text-destructive mb-6 flex items-center">
                <AlertTriangle className="h-8 w-8 mr-3" />
                Part II: The Democratic Risk
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  King–Gelman research identified a critical threshold: when incumbency advantage exceeds 10% and
                  electoral responsiveness falls below 1.5, democratic accountability effectively ceases to function.
                  Current data shows we have crossed both thresholds.
                </p>
                <p>
                  <strong>The Vacuum Problem:</strong> When mainstream institutions fail to address legitimate public
                  frustration, anti-democratic movements step in with radical alternatives. Organized blueprints like
                  Project 2025 are designed to exploit precisely this moment of institutional failure.
                </p>
                <p>
                  <strong>Why Congress Is the Key:</strong> A legislature with 95% incumbent retention and 18% approval
                  cannot credibly defend democratic norms. Its failure to govern creates the conditions for executive
                  branch overreach and judicial capture.
                </p>
                <p className="font-semibold">
                  The academic evidence is clear: without functional electoral accountability, democratic
                  institutions cannot self-correct or resist authoritarian pressure from any direction.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center bg-primary text-primary-foreground p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Part III: The Solution Is Mathematical</h2>
            <p className="text-xl mb-4 max-w-3xl mx-auto">
              King–Gelman research proves that eliminating incumbency advantage restores electoral responsiveness.
              Complete congressional replacement is the only method that removes all structural advantages simultaneously.
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Primary turnout: 15–25%. A coordinated 20% bloc defeats incumbents in every district. No
              constitutional amendment required. No third party needed. Just coordinated voters showing up.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Link href="/pledge">
                  <Target className="h-5 w-5 mr-2" />
                  Take the Pledge
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="/solution">
                  <FileText className="h-5 w-5 mr-2" />
                  Read the Strategy
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
