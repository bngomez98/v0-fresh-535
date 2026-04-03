export const dynamic = "force-dynamic"

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, AlertTriangle } from "lucide-react"
import type { District, Candidate } from "@/lib/api-clients"

export default function MyDistrictPage() {
  const [zipCode, setZipCode] = useState("")
  const [district, setDistrict] = useState<District | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSearch = async () => {
    if (!/^\d{5}$/.test(zipCode)) {
      setError("Please enter a valid 5-digit zip code")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch(`/api/district?zip=${zipCode}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Couldn't find data for this zip code")
      }

      if (!data || (!data.representatives.length && !data.senators.length)) {
        setError("We couldn't find representatives for this zip code. Try another zip code.")
        setDistrict(null)
        return
      }

      setDistrict(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Find Your Representatives</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Enter your zip code to see who represents you in Congress and what you need to know about them before you
          vote.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/70 h-4 w-4" />
            <Input
              type="text"
              placeholder="Enter your zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
              className="pl-10"
              maxLength={5}
            />
          </div>
          <Button onClick={handleSearch} disabled={loading}>
            <Search className="h-4 w-4 mr-2" />
            {loading ? "Searching..." : "Find"}
          </Button>
        </div>
        {error && <p className="text-destructive text-sm mt-2">{error}</p>}
      </div>

      {!district && !loading && !error && (
        <div className="text-center py-12">
          <div className="bg-muted border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">How This Works</h3>
            <p className="text-muted-foreground mb-4">
              We have data for all zip codes in the United States. Enter your zip code above to see your representatives
              and make an informed decision before you vote.
            </p>
            <p className="text-sm text-muted-foreground/80">
              Your representatives are elected officials who work for you in Congress.
            </p>
          </div>
        </div>
      )}

      {district && (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              {district.state} - District {district.district}
            </h2>
            <p className="text-muted-foreground">Here's who represents you in Congress</p>
          </div>

          <Tabs defaultValue="house" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="house">House Representative</TabsTrigger>
              <TabsTrigger value="senate">Your Senators</TabsTrigger>
            </TabsList>

            <TabsContent value="house" className="space-y-6">
              {district.representatives.length > 0 ? (
                district.representatives.map((rep) => <CandidateCard key={rep.id} candidate={rep} />)
              ) : (
                <p className="text-muted-foreground">No House representative data available.</p>
              )}
            </TabsContent>

            <TabsContent value="senate" className="space-y-6">
              {district.senators.length > 0 ? (
                district.senators.map((senator) => <CandidateCard key={senator.id} candidate={senator} />)
              ) : (
                <p className="text-muted-foreground">No Senate data available.</p>
              )}
            </TabsContent>
          </Tabs>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-destructive mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              What to Do Now
            </h3>
            <div className="space-y-3 text-destructive">
              <p className="font-semibold">
                Current office holders on your ballot:{" "}
                {[...district.representatives, ...district.senators].filter((c) => c.isIncumbent).length}
              </p>
              <p>
                <strong>In the primary:</strong> Vote for someone new running against the current office holder.
              </p>
              <p>
                <strong>In the general election:</strong> If the current office holder wins the primary, vote for their
                opponent.
              </p>
              <p className="text-sm">
                Remember: Fresh 535 is about replacing every member of Congress so they know their job depends on
                actually listening to you.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function CandidateCard({ candidate }: { candidate: Candidate }) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getIncumbencyBadge = (candidate: Candidate) => {
    if (candidate.isIncumbent) {
      return (
        <Badge variant="destructive" className="ml-2">
          Current Office Holder
        </Badge>
      )
    }
    return (
      <Badge variant="secondary" className="ml-2">
        Challenger
      </Badge>
    )
  }

  const getMarginColor = (margin: number) => {
    if (margin < 5) return "text-destructive"
    if (margin < 10) return "text-chart-4" // Warning color
    return "text-chart-2" // Good/Safe color
  }

  return (
    <Card
      className={`${candidate.isIncumbent ? "border-destructive/20 bg-destructive/5" : "border-secondary bg-secondary/50"}`}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <span>{candidate.name}</span>
            {getIncumbencyBadge(candidate)}
          </div>
          <Badge variant="outline">{candidate.party}</Badge>
        </CardTitle>
        <CardDescription>
          {candidate.office} • {candidate.state}
          {candidate.district && ` District ${candidate.district}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="voting">Votes</TabsTrigger>
            <TabsTrigger value="lobbying">Money</TabsTrigger>
            <TabsTrigger value="funding">Funding</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{candidate.yearsInOffice}</div>
                <div className="text-sm text-muted-foreground">Years in Office</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getMarginColor(candidate.lastElectionMargin || 0)}`}>
                  {candidate.lastElectionMargin?.toFixed(1)}%
                </div>
                <div className="text-sm text-muted-foreground">Last Win By</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  {formatCurrency(candidate.fundraisingTotal || 0)}
                </div>
                <div className="text-sm text-muted-foreground">Money Raised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{candidate.lobbyingConnections?.length || 0}</div>
                <div className="text-sm text-muted-foreground">Money from Interests</div>
              </div>
            </div>

            {candidate.isIncumbent && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <h4 className="font-semibold text-destructive mb-2">Fresh 535 Note</h4>
                <p className="text-destructive/90 text-sm">
                  This person is currently in office. Fresh 535 encourages you to vote for someone new in both the
                  primary and general elections.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="voting" className="space-y-4">
            <h4 className="font-semibold">Recent Votes</h4>
            {candidate.votingRecord?.map((vote, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-card">
                <div className="flex-1">
                  <div className="font-medium">{vote.billTitle}</div>
                  <div className="text-sm text-muted-foreground">{vote.description}</div>
                  <div className="text-xs text-muted-foreground/80">{vote.date}</div>
                </div>
              </div>
            )) || <p className="text-muted-foreground">No voting record available.</p>}
          </TabsContent>

          <TabsContent value="lobbying" className="space-y-4">
            <h4 className="font-semibold">Who's Funding Them</h4>
            {candidate.lobbyingConnections?.map((connection, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-card">
                <div className="flex-1">
                  <div className="font-medium">{connection.organization}</div>
                  <div className="text-sm text-muted-foreground">{connection.industry}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{formatCurrency(connection.amount)}</div>
                  <div className="text-sm text-muted-foreground">{connection.year}</div>
                </div>
              </div>
            )) || <p className="text-muted-foreground">No funding connections found.</p>}
          </TabsContent>

          <TabsContent value="funding" className="space-y-4">
            <h4 className="font-semibold">Campaign Money Breakdown</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Total Money Raised</span>
                <span className="font-bold">{formatCurrency(candidate.fundraisingTotal || 0)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>From Special Interests</span>
                <span className="font-bold text-destructive">
                  {formatCurrency(candidate.lobbyingConnections?.reduce((sum, conn) => sum + conn.amount, 0) || 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Percent from Special Interests</span>
                <span className="font-bold">
                  {(
                    ((candidate.lobbyingConnections?.reduce((sum, conn) => sum + conn.amount, 0) || 0) /
                      (candidate.fundraisingTotal || 1)) *
                    100
                  ).toFixed(1)}
                  %
                </span>
              </div>
            </div>

            {candidate.isIncumbent && (
              <div className="bg-chart-4/10 border border-chart-4/20 rounded-lg p-4">
                <h5 className="font-semibold text-chart-4 mb-2">Why This Matters</h5>
                <p className="text-chart-4/90 text-sm">
                  Current office holders usually raise 3-5 times more money than people trying to challenge them. This
                  money gives them a big advantage. That's one reason Fresh 535 says we need to clean house and start
                  over.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
