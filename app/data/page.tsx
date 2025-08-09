import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Users, TrendingUp, AlertTriangle, Target } from "lucide-react"

export default function DataPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Movement Documentation & Process</h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              Comprehensive documentation of the Fresh 535 movement, our political strategy, implementation process, and
              the democratic crisis that necessitates complete congressional turnover.
            </p>
          </div>

          {/* White Paper Section */}
          <section className="mb-16">
            <div className="bg-slate-50 border p-8 rounded-lg">
              <div className="border-b pb-6 mb-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center">
                  <FileText className="h-8 w-8 mr-3 text-blue-600" />
                  White Paper: The Case for Complete Congressional Turnover
                </h2>
                <p className="text-slate-600">
                  A formal analysis of the systemic failure of the U.S. Congress and the strategic imperative for a full
                  electoral reset.
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-slate-800 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">I. The Democratic Crisis</h3>
                <p>
                  The United States faces a dual crisis of congressional dysfunction and rising authoritarianism. This
                  paper posits that the latter is a direct consequence of the former. The legislative branch, designed
                  to be the most representative and responsive part of the federal government, has become sclerotic,
                  unaccountable, and captured by interests other than those of the electorate. Key indicators such as
                  historically low public approval ratings (sustained below 30%) coexisting with artificially high
                  incumbent reelection rates (consistently above 90%) provide empirical evidence of this disconnect.
                  This structural failure has eroded public trust and created a legitimacy vacuum that anti-democratic
                  forces are actively exploiting.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  II. Why Traditional Solutions Have Failed
                </h3>
                <p>
                  Conventional approaches to reform—such as campaign finance legislation, term limits, and redistricting
                  commissions—have proven inadequate. These efforts, while often well-intentioned, treat the symptoms of
                  legislative dysfunction rather than the root cause. The fundamental problem is an incentive structure
                  that rewards fundraising and partisan loyalty over constituent service and good governance. Incumbency
                  itself has become a nearly insurmountable barrier to accountability. Until this core incentive
                  structure is broken, no amount of procedural reform will restore the institution's function.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  III. The Fresh 535 Solution: A Strategic Reset
                </h3>
                <p>
                  The Fresh 535 movement proposes a solution commensurate with the scale of the problem: a coordinated,
                  non-partisan electoral strategy to replace all 535 members of Congress. This is not a policy platform
                  but a procedural intervention designed to restore electoral accountability. By instructing voters to
                  unite against all incumbents, regardless of party, the movement directly targets the incumbency
                  advantage that insulates the institution from public will.
                </p>
                <p>
                  The strategy's viability is grounded in electoral mathematics. With low turnout in primary elections
                  and narrow margins in many general elections, a coordinated bloc of as little as 20% of the voting
                  public can create seismic shifts, defeating incumbents who have long considered their seats safe. This
                  introduces a level of electoral risk that is currently absent, thereby forcing a change in behavior.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  IV. Implementation Strategy & Expected Outcomes
                </h3>
                <p>
                  The implementation is phased, beginning with building a broad, cross-partisan coalition of voters
                  (Phase 1), moving to targeted electoral mobilization in primaries and general elections (Phase 2), and
                  culminating in a new legislative environment where institutional reform becomes possible (Phase 3).
                </p>
                <p>
                  The primary expected outcome is the restoration of accountability. A new Congress, elected without the
                  protections of the old system and fully aware of the coordinated power of the electorate, will have a
                  powerful incentive to be responsive. This action serves as a constitutional "fire alarm," resetting
                  the institution and making it clear that the ultimate authority resides with the people. By addressing
                  the root cause of legislative failure, this strategy also serves as the most effective defense against
                  the rising tide of authoritarianism.
                </p>
              </div>
            </div>
          </section>

          {/* Movement Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Movement Progress & Metrics</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="text-center border-2 border-blue-100">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-blue-600">47,832</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Americans who have taken the Fresh 535 pledge</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-green-100">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-green-600">435</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Congressional districts with Fresh 535 pledge-takers</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-purple-100">
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-purple-600">18%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Congressional approval rating - historic low</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-red-100">
                <CardHeader>
                  <Target className="h-12 w-12 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-red-600">20%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Voter participation needed for complete turnover</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Resource Downloads */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Movement Resources</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-blue-600" />
                    Complete White Paper
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Download the comprehensive analysis of congressional dysfunction and the Fresh 535 solution.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/resources/data-packet" target="_blank">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Users className="h-6 w-6 mr-2 text-green-600" />
                    Organizing Toolkit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Printable flyers, social media assets, and guides for building local momentum.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/resources">
                      <Download className="h-4 w-4 mr-2" />
                      View All Resources
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-slate-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Join the Movement for Democratic Accountability</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              The documentation is clear: Congress has failed, authoritarianism is rising, and only electoral
              accountability can restore democratic governance. The time for action is now.
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
                <Link href="/resources">
                  <FileText className="h-5 w-5 mr-2" />
                  Download All Resources
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
