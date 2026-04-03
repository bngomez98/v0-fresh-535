"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { getConsentStatus, COOKIE_CONSENT_UPDATE_EVENT } from "@/components/cookie-consent"
import { GA_MEASUREMENT_ID } from "@/lib/analytics"

export function CustomAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    const track = () => {
      const consent = getConsentStatus()
      if (consent !== "accepted") return

      // Google Analytics
      if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: pathname,
        })
      }

      // Custom analytics for movement tracking
      if (typeof window !== "undefined") {
        fetch("/api/analytics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event: "page_view",
            path: pathname,
            timestamp: new Date().toISOString(),
            referrer: document.referrer,
            userAgent: navigator.userAgent,
          }),
        }).catch(() => {
          // Silently fail if analytics endpoint is not available
        })
      }
    }

    track()

    // Re-evaluate when consent changes
    window.addEventListener(COOKIE_CONSENT_UPDATE_EVENT, track)
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATE_EVENT, track)
  }, [pathname])

  return null
}
