"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const COOKIE_CONSENT_STORAGE_KEY = "cookie-consent"
export const COOKIE_CONSENT_UPDATE_EVENT = "cookie-consent-update"

export type ConsentStatus = "accepted" | "declined" | null

export function getConsentStatus(): ConsentStatus {
  if (typeof window === "undefined") return null
  const value = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
  if (value === "accepted" || value === "declined") return value
  return null
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (getConsentStatus() === null) {
      setVisible(true)
    }
  }, [])

  const handleAccept = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, "accepted")
    setVisible(false)
    window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATE_EVENT))
  }, [])

  const handleDecline = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, "declined")
    setVisible(false)
    window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATE_EVENT))
  }, [])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-4 shadow-lg md:flex md:items-center md:justify-between md:gap-4 md:p-6">
        <p className="mb-4 text-sm text-muted-foreground md:mb-0">
          We use cookies and similar technologies to improve your experience and
          measure site traffic.{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Learn more
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Decline
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
