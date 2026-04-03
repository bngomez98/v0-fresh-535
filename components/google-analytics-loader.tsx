"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { getConsentStatus, COOKIE_CONSENT_UPDATE_EVENT } from "@/components/cookie-consent"
import { GA_MEASUREMENT_ID, hasGaMeasurementId } from "@/lib/analytics"

export function GoogleAnalyticsLoader() {
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    const check = () => setConsentGiven(getConsentStatus() === "accepted")
    check()
    window.addEventListener(COOKIE_CONSENT_UPDATE_EVENT, check)
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATE_EVENT, check)
  }, [])

  if (!consentGiven || !hasGaMeasurementId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
