"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { getConsentStatus } from "@/components/cookie-consent"

export function CustomAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    const track = () => {
      const consent = getConsentStatus()
      if (consent !== "accepted") return

      // Google Analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "G-9QXW6S19X4", {
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
    window.addEventListener("cookie-consent-update", track)
    return () => window.removeEventListener("cookie-consent-update", track)
  }, [pathname])

  return null
}
