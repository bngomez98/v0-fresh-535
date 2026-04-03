"use client"

import Script from "next/script"
import { useEffect, useState } from "react"
import { getConsentStatus, COOKIE_CONSENT_UPDATE_EVENT } from "@/components/cookie-consent"

export function GoogleAnalyticsLoader() {
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    const check = () => setConsentGiven(getConsentStatus() === "accepted")
    check()
    window.addEventListener(COOKIE_CONSENT_UPDATE_EVENT, check)
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATE_EVENT, check)
  }, [])

  if (!consentGiven) return null

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9QXW6S19X4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9QXW6S19X4');
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
