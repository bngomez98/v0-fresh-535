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
              Academic Evidence: The Case for Complete Congressional Replacement
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Peer-reviewed research from Harvard University and UC Berkeley demonstrates that incumbency advantage has
              systematically destroyed electoral accountability, creating an unresponsive system that requires complete
              replacement to restore democratic function.
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
                    Gary King (Harvard) & Andrew Gelman (UC Berkeley), American Journal of Political Science, 1991
                  </span>
                </p>
                <p>
                  This landmark study analyzed 40 years of congressional election data (1946-1986) and documented the
                  systematic destruction of electoral accountability. Key findings:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>1,000% increase in incumbency advantage:</strong> It rose from 1% (1946-48) to 11% (1984-86).
                  </li>
                  <li>
                    <strong>43% decline in electoral responsiveness:</strong> It dropped from 2.3 to 1.3 over 40 years.
                  </li>
                  <li>
                    <strong>Incumbency explains virtually all partisan bias trends</strong> since the 1940s.
                  </li>
                  <li>
                    <strong>The system became mathematically unresponsive</strong> to voter preferences.
                  </li>
                </ul>
                <p className="font-semibold">
                  The research proves that high incumbency retention rates are not due to voter satisfaction, but to
                  structural advantages that have created a permanently unaccountable political class.
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
                  The King-Gelman research predicted exactly what we see today: a Congress completely disconnected from
                  public will. Current metrics confirm the complete breakdown of electoral accountability:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-background p-5 rounded-xl border">
                    <h4 className="font-bold text-destructive">Performance Metrics</h4>
                    <ul className="text-sm space-y-1.5 mt-2">
                      <li>• Congressional approval: 18% (Gallup 2024)</li>
                      <li>• Bills passed 2023: 27 (lowest since 1995)</li>
                      <li>• National debt: $34.5 trillion (+$7.8T under current Congress)</li>
                      <li>• Healthcare costs: +158% since 2000</li>
                      <li>• Housing prices: +47% since 2020</li>
                    </ul>
                  </div>
                  <div className="bg-background p-5 rounded-xl border">
                    <h4 className="font-bold text-chart-2">Job Security Metrics</h4>
                    <ul className="text-sm space-y-1.5 mt-2">
                      <li>• House incumbent reelection: 95% (2022)</li>
                      <li>• Senate incumbent reelection: 84% (2022)</li>
                      <li>• Primary challenge success: &lt;5%</li>
                      <li>• Average tenure: 9.7 years House, 11.2 years Senate</li>
                      <li>• Fundraising advantage: 3:1 over challengers</li>
                    </ul>
                  </div>
                </div>
                <p className="font-semibold">
                  This data confirms the King-Gelman prediction: when incumbency advantage reaches extreme levels, the
                  electoral system ceases to function as an accountability mechanism.
                </p>
              </div>
            </div>
          </section>

          {/* Part I: The Data of Dysfunction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Part I: Quantified System Failure</h2>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-semibold mb-2">The Accountability Gap</h3>
                <p className="text-muted-foreground mb-6">
                  King-Gelman research predicted this exact scenario: when incumbency advantage exceeds 10%, electoral
                  accountability collapses completely.
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
                    <h4 className="text-lg font-semibold text-center mb-2">Incumbent Reelection: 95%</h4>
                    <div className="h-80 border rounded-xl p-4 bg-background">
                      <HistoricalReelectionChart />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Source: Center for Responsive Politics, Ballotpedia
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-muted-foreground">
                  <strong>Academic Analysis:</strong> King-Gelman research shows that when incumbency advantage
                  reaches 11%, electoral responsiveness drops to 1.3. Current 95% reelection rates suggest incumbency advantage now exceeds 15%, creating near-zero electoral responsiveness.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Structural Barriers: The Fundraising Monopoly</h3>
                <p className="text-muted-foreground mb-6">
                  King-Gelman identified structural advantages as the root cause. Current fundraising data confirms
                  their prediction of permanent incumbent advantage.
                </p>
                <div className="h-96 border rounded-xl p-4 bg-background">
                  <CampaignSpendingChart />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Source: Federal Election Commission, Center for Responsive Politics
                </p>
                <p className="mt-6 text-muted-foreground">
                  <strong>Mathematical Reality:</strong> Incumbents raise 3x more than challengers on average. In
                  competitive races, this advantage reaches 5:1. The system now rewards access to donor networks over constituent representation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Legislative Collapse</h3>
                <p className="text-muted-foreground mb-6">
                  King-Gelman predicted that extreme incumbency advantage would reduce legislative effectiveness.
                  Current productivity data confirms this prediction.
                </p>
                <div className="h-96 border rounded-xl p-4 bg-background">
                  <LegislativeProductivityChart />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Source: Pew Research Center analysis of Congressional data
                </p>
                <p className="mt-6 text-muted-foreground">
                  <strong>Systemic Consequences:</strong> 27 bills passed in 2023 represents a 73% decline from
                  1970s averages. When electoral accountability disappears, legislators focus on maintaining power rather than solving problems.
                </p>
              </div>
            </div>
          </section>

          {/* Part II: The Consequence */}
          <section className="mb-16">
            <div className="bg-destructive/10 border-l-4 border-destructive p-8 rounded-r-xl">
              <h2 className="text-3xl font-bold text-destructive mb-6 flex items-center">
                <AlertTriangle className="h-8 w-8 mr-3" />
                Part II: Democratic Collapse Risk
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  King-Gelman research identified a critical threshold: when incumbency advantage exceeds 10% and
                  electoral responsiveness falls below 1.5, democratic accountability effectively ceases. We have
                  crossed both thresholds.
                </p>
                <p>
                  <strong>Current Threat Assessment:</strong> Organized anti-democratic movements have prepared
                  comprehensive plans (Project 2025, etc.) to exploit this institutional failure. When mainstream
                  institutions cannot channel legitimate public frustration, extremist ideologies fill the vacuum.
                </p>
                <p>
                  <strong>Mathematical Reality:</strong> A Congress with 95% incumbent retention and 18% approval cannot
                  defend democratic institutions. The legislative branch's failure to govern creates the conditions for
                  authoritarian capture of executive and judicial branches.
                </p>
                <p className="font-semibold">
                  Academic research proves: without electoral accountability, democratic institutions cannot
                  self-correct or resist authoritarian pressure.
                </p>
              </div>
            </div>
          </section>

          {/* Part III: The Solution */}
          <section className="text-center bg-primary text-primary-foreground p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Part III: Mathematical Solution</h2>
            <p className="text-xl mb-4 max-w-3xl mx-auto">
              King-Gelman research proves that removing incumbency advantage restores electoral responsiveness. Complete
              replacement is the only method that eliminates structural advantages simultaneously.
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Primary turnout: 15-25%. Coordinated 20% bloc vote defeats 95% of incumbents mathematically. No
              constitutional amendment required. Immediate restoration of electoral accountability.
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
