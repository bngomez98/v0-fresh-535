export const dynamic = "force-dynamic"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Users, AlertTriangle, Target, BarChart3, DollarSign } from "lucide-react"

export default function DataPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="page-header">
            <h1>
              Congressional Failure: The Complete Record
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              18% approval. 95% reelection rate. $34.5 trillion in debt. Just 27 bills enacted in 2023. The data
              tells a clear story: Congress has failed its constituents—and the current system ensures no
              consequences for that failure.
            </p>
          </div>

          {/* Key Statistics Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Key Failure Metrics</h2>
            <div className="section-divider mb-10" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="text-center border-2 border-destructive/20 bg-destructive/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-destructive">18%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-semibold">Congressional Approval Rating</p>
                  <p className="text-sm text-muted-foreground">Gallup, January 2024</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-chart-4/20 bg-chart-4/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Target className="h-12 w-12 text-chart-4 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-chart-4">95%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-semibold">House Reelection Rate</p>
                  <p className="text-sm text-muted-foreground">2022 Midterm Elections</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/20 bg-primary/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold text-primary">$34T+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-semibold">National Debt</p>
                  <p className="text-sm text-muted-foreground">Record High</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-chart-2/20 bg-chart-2/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-chart-2 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-chart-2">27</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-semibold">Bills Passed in 2023</p>
                  <p className="text-sm text-muted-foreground">Lowest since 1995</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Documentation & Research Package</h2>
            <div className="section-divider mb-10" />

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-border hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-primary" />
                    Complete White Paper (47 pages)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A comprehensive analysis of congressional accountability failure, including the statistical case for incumbency reform, the electoral math behind Fresh 535, and the full execution strategy.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/api/download?resource=white-paper" target="_blank">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF (2.3 MB)
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-chart-2 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <BarChart3 className="h-6 w-6 mr-2 text-chart-2" />
                    Congressional Data Analysis (89 pages)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    District-by-district incumbent performance data covering voting records, donor contributions, approval ratings, reelection margins, and legislative productivity metrics.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/api/download?resource=data-packet" target="_blank">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF (8.7 MB)
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-chart-3 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Users className="h-6 w-6 mr-2 text-chart-3" />
                    Organizing Toolkit (12 files)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Printable flyers, social media graphics, presentation slides, canvassing scripts, legal compliance guides, and voter registration materials for local organizers.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/api/download?resource=organizing-toolkit" target="_blank">
                      <Download className="h-4 w-4 mr-2" />
                      Download ZIP (15.2 MB)
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-destructive transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Target className="h-6 w-6 mr-2 text-destructive" />
                    Voter Action Guide (23 pages)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Step-by-step instructions for primary and general election voting, including state-specific requirements, key deadlines, how to identify incumbents, and tactical considerations.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/api/download?resource=voter-guide" target="_blank">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF (1.8 MB)
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Fresh 535 Movement Progress</h2>
            <div className="section-divider mb-10" />

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center border-2 border-green-100">
                <CardHeader>
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-green-600">47,832</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-semibold">Americans Pledged</p>
                  <p className="text-sm text-muted-foreground">Target: 47.3 million (20% of registered voters)</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-blue-100">
                <CardHeader>
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-blue-600">435</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-semibold">Districts Represented</p>
                  <p className="text-sm text-muted-foreground">All 435 House districts have pledgers</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-purple-100">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-purple-600">0.1%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-semibold">Progress to Target</p>
                  <p className="text-sm text-muted-foreground">47,832 of 47.3 million needed</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center bg-primary text-primary-foreground p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">The Data Is Clear: Complete Replacement Is the Solution</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              18% approval proves they have failed. 95% reelection proves the system protects that failure.
              $34.5 trillion in debt proves the cost of inaction. The only move left: replace all 535.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Link href="/pledge">
                  <Target className="h-5 w-5 mr-2" />
                  Join 47,832 Who Pledged
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                <Link href="/api/download?resource=white-paper">
                  <FileText className="h-5 w-5 mr-2" />
                  Download Complete Analysis
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
