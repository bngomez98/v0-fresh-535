/**
 * Agent Firewall — main orchestrator.
 *
 * Evaluates each incoming request through:
 *   1. Path bypass check
 *   2. Agent / bot detection
 *   3. Rate limiting (per IP)
 *
 * Returns an action that the middleware should apply.
 */

import type { NextRequest } from "next/server"
import { checkAgent } from "./agent-detector"
import { API_RATE_LIMIT, BYPASS_PATHS, PAGE_RATE_LIMIT } from "./config"
import { isAllowed } from "./rate-limiter"

export type FirewallAction =
  | { type: "allow" }
  | { type: "block"; status: number; reason: string }

/**
 * Run all firewall checks against the incoming request.
 */
export function evaluateRequest(request: NextRequest): FirewallAction {
  const { pathname } = request.nextUrl

  // 1. Bypass paths (static assets, health-checks)
  for (const pattern of BYPASS_PATHS) {
    if (pattern.test(pathname)) {
      return { type: "allow" }
    }
  }

  // 2. Agent detection
  const userAgent = request.headers.get("user-agent")
  const agentResult = checkAgent(userAgent)

  if (agentResult.verdict === "blocked") {
    return {
      type: "block",
      status: 403,
      reason: agentResult.reason,
    }
  }

  // 3. Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"

  const policy = pathname.startsWith("/api/") ? API_RATE_LIMIT : PAGE_RATE_LIMIT

  // Suspicious agents get a tighter rate limit (halved)
  const effectivePolicy =
    agentResult.verdict === "suspicious"
      ? { ...policy, maxRequests: Math.ceil(policy.maxRequests / 2) }
      : policy

  if (!isAllowed(ip, effectivePolicy)) {
    return {
      type: "block",
      status: 429,
      reason: "rate-limited",
    }
  }

  return { type: "allow" }
}
