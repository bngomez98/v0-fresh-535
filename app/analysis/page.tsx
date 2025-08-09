import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Target, FileText } from "lucide-react"
import { HistoricalReelectionChart } from "@/components/charts/historical-reelection-chart"
import { CongressionalApprovalChart } from "@/components/charts/congressional-approval-chart"
import { CampaignSpendingChart } from "@/components/charts/campaign-spending-chart"
import { LegislativeProductivityChart } from "@/components/charts/legislative-productivity-chart"

export default function AnalysisPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Evidence: The Case for a System Reset
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto">
              A comprehensive, data-driven examination of the U.S. Congress's unresponsiveness, the direct effects on
              the American people, and why a complete electoral reset is the most logical solution.
            </p>
          </div>

          {/* Executive Summary */}
          <section className="mb-16">
            <div className="bg-slate-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <FileText className="h-8 w-8 mr-3 text-blue-600" />
                Executive Summary
              </h2>

              <div className="prose prose-lg max-w-none text-slate-800">
                <p>
                  The United States Congress is operating in a way that is disconnected from the needs and desires of
                  the American people. This is not a partisan assertion, but a conclusion supported by decades of public
                  opinion and electoral data. A profound gap between citizen sentiment and legislative outcomes, fueled
                  by a flawed institutional incentive structure, has led to a government that is ineffective at solving
                  the nation's most pressing problems, including fiscal instability, rising healthcare costs, and
                  strategic economic challenges.
                </p>
                <p>
                  This analysis demonstrates through key metrics how this unresponsiveness directly impacts Americans.
                  The institutional environment also creates an opening for extremist, anti-democratic movements that
                  seek to capitalize on public frustration. The data shows that without a fundamental reset of the
                  legislative branch, the country faces continued governmental inaction and an increasing risk to its
                  democratic foundations.
                </p>
                <p className="font-semibold">
                  The most direct and effective solution is a complete turnover of congressional personnel, achieved
                  through coordinated, non-partisan voter action.
                </p>
              </div>
            </div>
          </section>

          {/* Part I: The Data of Dysfunction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Part I: The Data of Dysfunction</h2>

            <div className="space-y-12">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>The Great Disconnect: Approval vs. Reelection</CardTitle>
                  <p className="text-slate-600">
                    The most damning evidence of a broken system is when performance metrics plummet while job security
                    remains absolute.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-center mb-2">Congressional Approval Rating</h4>
                      <div className="h-80 border rounded-lg p-4 bg-white">
                        <CongressionalApprovalChart />
                      </div>
                      <p className="text-sm text-slate-600 mt-2 text-center">Source: Gallup Historical Trends</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-center mb-2">Incumbent Reelection Rate</h4>
                      <div className="h-80 border rounded-lg p-4 bg-white">
                        <HistoricalReelectionChart />
                      </div>
                      <p className="text-sm text-slate-600 mt-2 text-center">
                        Source: Center for Responsive Politics, Ballotpedia
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 prose max-w-none">
                    <p>
                      This chart pairing reveals a system that is fundamentally not self-correcting. Despite over a
                      decade of approval ratings below 30%, the reelection rate for incumbents who seek another term has
                      rarely dipped below 90%. This indicates that voters' widespread dissatisfaction has virtually no
                      impact on electoral outcomes, a hallmark of an unresponsive and unaccountable institution.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>The Financial Barrier to Entry</CardTitle>
                  <p className="text-slate-600">
                    Electoral competition is stifled by a massive and growing financial advantage for incumbents.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-96 border rounded-lg p-4 bg-white">
                    <CampaignSpendingChart />
                  </div>
                  <p className="text-sm text-slate-600 mt-2 text-center">
                    Source: Federal Election Commission, Center for Responsive Politics
                  </p>
                  <div className="mt-6 prose max-w-none">
                    <p>
                      The data shows a consistent and widening gap between the fundraising capabilities of incumbents
                      and their challengers. This financial disparity creates an almost insurmountable barrier,
                      discouraging qualified challengers from running and ensuring that most races are not financially
                      competitive. This system rewards access to wealthy donors over connection to constituents.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>The Decline of Legislative Productivity</CardTitle>
                  <p className="text-slate-600">
                    As partisanship has increased and accountability has decreased, the core function of
                    Congress—passing laws—has atrophied.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-96 border rounded-lg p-4 bg-white">
                    <LegislativeProductivityChart />
                  </div>
                  <p className="text-sm text-slate-600 mt-2 text-center">
                    Source: Pew Research Center analysis of Congressional data
                  </p>
                  <div className="mt-6 prose max-w-none">
                    <p>
                      While the number of laws passed is not a perfect measure of effectiveness, the long-term trend
                      shows a significant decline from the late 20th century. For the American people, this translates
                      directly to unaddressed national priorities. The national debt climbs without a serious fiscal
                      plan. Healthcare and prescription drug costs continue to rise. Our infrastructure ages without a
                      coherent, long-term modernization strategy. Key economic and national security challenges go
                      unmet. The institution is demonstrably less effective at its core function: solving problems
                      through legislation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Part II: The Consequence */}
          <section className="mb-16">
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
              <h2 className="text-3xl font-bold text-red-900 mb-6 flex items-center">
                <AlertTriangle className="h-8 w-8 mr-3" />
                Part II: The Consequence - An Authoritarian Opening
              </h2>
              <div className="prose prose-lg max-w-none text-slate-800">
                <p>
                  The vacuum created by a failed legislature is the ideal environment for anti-democratic movements to
                  thrive. Widespread, legitimate public anger is a powerful political force. When mainstream
                  institutions fail to channel this energy constructively, extremist ideologies will.
                </p>
                <p>
                  Highly-organized and well-funded groups have prepared comprehensive plans, such as Project 2025, to
                  exploit this very crisis. These are not simply policy proposals; they are detailed roadmaps for
                  dismantling the administrative state, concentrating power in the executive, and eroding the checks and
                  balances that protect the republic. They market themselves as the solution to the "swamp," while their
                  true aim is to replace a dysfunctional democracy with an efficient autocracy.
                </p>
                <p className="font-semibold">
                  A Congress that cannot govern cannot defend the Constitution. The failure of the legislative branch is
                  a direct enabler of the authoritarian threat to the executive and judicial branches.
                </p>
              </div>
            </div>
          </section>

          {/* Part III: The Solution */}
          <section className="text-center bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Part III: The Only Viable Path Forward</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              The data is clear: the system is not self-correcting. Incremental reforms have failed. The only remaining
              option is a peaceful, constitutional, and complete reset of the institution.
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
