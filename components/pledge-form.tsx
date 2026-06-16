"use client"

import { useState } from "react"
import { submitPledge } from "@/app/actions/pledge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, Share2 } from "lucide-react"
import Link from "next/link"

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
]

const PARTIES = ["Independent / No affiliation", "Democrat", "Republican", "Libertarian", "Green", "Other"]

export function PledgeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    district: "",
    party: "",
    message: "",
    sharePublicly: false,
    emailUpdates: true,
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target
    const value = target instanceof HTMLInputElement && target.type === "checkbox"
      ? target.checked
      : target.value
    setFormData((prev) => ({ ...prev, [target.name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const result = await submitPledge(formData)
      if (!result.success) {
        setError(result.error ?? "Something went wrong. Please try again.")
      } else {
        setSubmitted(true)
      }
    } catch {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center space-y-6 py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground">Thank you, {formData.firstName}!</h3>
          <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
            Your pledge has been recorded. You&apos;ve joined the movement to restore congressional accountability.
          </p>
        </div>
        {formData.emailUpdates && (
          <p className="text-sm text-muted-foreground">
            We&apos;ll send election reminders and movement updates to <strong>{formData.email}</strong>.
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/resources">Download toolkit</Link>
          </Button>
          <Button
            size="sm"
            onClick={() => {
              const text = `I just took the Fresh 535 pledge — I'll vote out every incumbent until Congress works for the people. Join me at fresh535.org #Fresh535`
              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank")
            }}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share on X
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">First name <span className="text-destructive">*</span></Label>
          <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Jane" required disabled={loading} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">Last name <span className="text-destructive">*</span></Label>
          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Smith" required disabled={loading} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email address <span className="text-destructive">*</span></Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required disabled={loading} />
        <p className="text-xs text-muted-foreground">Used for election reminders. Never shared or sold.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="state">State <span className="text-destructive">*</span></Label>
          <select
            id="state" name="state" required value={formData.state} onChange={handleChange} disabled={loading}
            className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
          >
            <option value="">Select your state</option>
            {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="district">Congressional district <span className="text-muted-foreground text-xs">(optional)</span></Label>
          <Input id="district" name="district" value={formData.district} onChange={handleChange} placeholder="e.g. CA-12" disabled={loading} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="party">Political affiliation <span className="text-muted-foreground text-xs">(optional)</span></Label>
        <select
          id="party" name="party" value={formData.party} onChange={handleChange} disabled={loading}
          className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
        >
          <option value="">Prefer not to say</option>
          {PARTIES.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Why are you taking the pledge? <span className="text-muted-foreground text-xs">(optional)</span></Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Share your reason..." rows={3} disabled={loading} />
      </div>

      {/* Pledge text */}
      <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Your pledge</p>
        <p className="text-sm text-foreground/80 italic leading-relaxed">
          &ldquo;I pledge to vote against every incumbent member of Congress in every election until we achieve complete
          congressional turnover — regardless of party affiliation, because accountability matters more than ideology.&rdquo;
        </p>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox" name="emailUpdates" checked={formData.emailUpdates}
            onChange={handleChange} className="mt-0.5 h-4 w-4 rounded border-input accent-primary"
          />
          <span className="text-sm text-muted-foreground">
            Send me election reminders and movement updates.
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox" name="sharePublicly" checked={formData.sharePublicly}
            onChange={handleChange} className="mt-0.5 h-4 w-4 rounded border-input accent-primary"
          />
          <span className="text-sm text-muted-foreground">
            Show my first name and state on the public pledge counter.
          </span>
        </label>
      </div>

      {error && (
        <p className="text-sm text-destructive bg-destructive/8 border border-destructive/20 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <Button type="submit" className="w-full" size="lg" disabled={loading}>
        {loading ? (
          <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Recording your pledge...</>
        ) : (
          "Take the Fresh 535 Pledge"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our{" "}
        <Link href="/terms" className="underline underline-offset-4">Terms</Link>
        {" "}and{" "}
        <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link>.
      </p>
    </form>
  )
}
