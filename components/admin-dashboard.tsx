"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LogOut, Users, Mail, Download, TrendingUp } from "lucide-react"

// Type definitions for data structures
interface Pledge {
  id?: string
  first_name: string
  last_name: string
  email: string
  state: string
  zip_code: string
  comments?: string
  created_at?: string
  ip_address?: string
  user_agent?: string
}

interface ContactMessage {
  id?: string
  name: string
  email: string
  subject: string
  category?: string
  message: string
  created_at?: string
  ip_address?: string
  user_agent?: string
}

interface AdminDashboardProps {
  user: {
    id: string
    email?: string
  }
}

export function AdminDashboard({ user }: AdminDashboardProps) {
  const router = useRouter()
  const [pledges, setPledges] = useState<Pledge[]>([])
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch pledges
      const pledgesResponse = await fetch("/api/admin/pledges")
      if (!pledgesResponse.ok) {
        throw new Error("Failed to fetch pledges")
      }
      const pledgesData = await pledgesResponse.json()
      setPledges(pledgesData.data || [])

      // Fetch contact messages
      const messagesResponse = await fetch("/api/admin/messages")
      if (!messagesResponse.ok) {
        throw new Error("Failed to fetch messages")
      }
      const messagesData = await messagesResponse.json()
      setMessages(messagesData.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    // Note: Authentication has been removed with Supabase
    router.push("/")
    router.refresh()
  }

  const downloadCSV = (data: any[], filename: string) => {
    if (!data.length) return

    const headers = Object.keys(data[0])
    const csv = [
      headers.join(","),
      ...data.map((row) =>
        headers.map((header) => {
          const value = row[header]
          return typeof value === "string" && value.includes(",")
            ? `"${value}"`
            : value
        }).join(",")
      ),
    ].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    window.URL.revokeObjectURL(url)
  }

  // Calculate statistics
  const stateBreakdown = pledges.reduce((acc, pledge) => {
    acc[pledge.state] = (acc[pledge.state] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const topStates = Object.entries(stateBreakdown)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto container-padding py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user.email}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        {error && (
          <div className="mb-6 p-4 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
            {error}
          </div>
        )}

        {/* Statistics Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pledges</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pledges.length}</div>
              <p className="text-xs text-muted-foreground">
                Supporters committed to vote them out
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{messages.length}</div>
              <p className="text-xs text-muted-foreground">
                Inquiries and volunteer requests
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active States</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Object.keys(stateBreakdown).length}</div>
              <p className="text-xs text-muted-foreground">
                States with pledge support
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Top States */}
        {topStates.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Top 5 States by Pledges</CardTitle>
              <CardDescription>States with the most supporter engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {topStates.map(([state, count]) => (
                  <div key={state} className="flex items-center justify-between">
                    <span className="font-medium">{state}</span>
                    <Badge variant="secondary">{count} pledges</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Data Tables */}
        <Tabs defaultValue="pledges" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pledges">Pledges</TabsTrigger>
            <TabsTrigger value="messages">Contact Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="pledges" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Pledge Submissions</CardTitle>
                  <CardDescription>
                    All supporters who have taken the Fresh 535 pledge
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadCSV(pledges, "pledges.csv")}
                  disabled={pledges.length === 0}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="pb-2 font-medium">Name</th>
                        <th className="pb-2 font-medium">Email</th>
                        <th className="pb-2 font-medium">State</th>
                        <th className="pb-2 font-medium">Zip</th>
                        <th className="pb-2 font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pledges.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-muted-foreground">
                            No pledges yet
                          </td>
                        </tr>
                      ) : (
                        pledges.map((pledge) => (
                          <tr key={pledge.id} className="border-b">
                            <td className="py-3">
                              {pledge.first_name} {pledge.last_name}
                            </td>
                            <td className="py-3">{pledge.email}</td>
                            <td className="py-3">{pledge.state}</td>
                            <td className="py-3">{pledge.zip_code}</td>
                            <td className="py-3">
                              {pledge.created_at
                                ? new Date(pledge.created_at).toLocaleDateString()
                                : "N/A"}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Contact Messages</CardTitle>
                  <CardDescription>
                    Messages from volunteers, media, and other inquiries
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadCSV(messages, "messages.csv")}
                  disabled={messages.length === 0}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <div className="py-8 text-center text-muted-foreground">
                      No messages yet
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div key={message.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-medium">{message.name}</h4>
                            <p className="text-sm text-muted-foreground">{message.email}</p>
                          </div>
                          {message.category && (
                            <Badge variant="outline">{message.category}</Badge>
                          )}
                        </div>
                        <p className="text-sm font-medium mb-1">{message.subject}</p>
                        <p className="text-sm text-muted-foreground">{message.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {message.created_at
                            ? new Date(message.created_at).toLocaleString()
                            : "N/A"}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
