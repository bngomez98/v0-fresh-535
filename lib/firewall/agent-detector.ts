/**
 * Agent / bot detection helpers.
 *
 * Checks the User-Agent header against known patterns and
 * applies heuristic signals to flag automated traffic.
 */

import { ALLOWED_AGENT_PATTERNS, BLOCKED_AGENT_PATTERNS } from "./config"

export type AgentVerdict = "allowed" | "blocked" | "suspicious" | "unknown"

export interface AgentCheckResult {
  verdict: AgentVerdict
  reason: string
}

/**
 * Evaluate whether a request comes from an automated agent.
 */
export function checkAgent(userAgent: string | null): AgentCheckResult {
  // Missing User-Agent is suspicious
  if (!userAgent || userAgent.trim().length === 0) {
    return { verdict: "suspicious", reason: "missing-user-agent" }
  }

  // Allow-listed agents (search engines, social previews)
  for (const pattern of ALLOWED_AGENT_PATTERNS) {
    if (pattern.test(userAgent)) {
      return { verdict: "allowed", reason: "allowlisted-agent" }
    }
  }

  // Block-listed agents (scrapers, AI crawlers, HTTP libraries)
  for (const pattern of BLOCKED_AGENT_PATTERNS) {
    if (pattern.test(userAgent)) {
      return { verdict: "blocked", reason: `blocked-agent: ${pattern.source}` }
    }
  }

  // Very short user-agents are suspicious
  if (userAgent.length < 20) {
    return { verdict: "suspicious", reason: "short-user-agent" }
  }

  return { verdict: "unknown", reason: "no-match" }
}
