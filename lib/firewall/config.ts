/**
 * Agent Firewall Configuration
 *
 * Defines blocked user-agent patterns, rate-limit windows,
 * and path-specific policies for the firewall middleware.
 */

/** User-agent substrings / regex patterns treated as automated agents. */
export const BLOCKED_AGENT_PATTERNS: RegExp[] = [
  // Generic bots & crawlers (non-search-engine)
  /\bcurl\b/i,
  /\bwget\b/i,
  /\bhttpie\b/i,
  /\bpython-requests\b/i,
  /\bnode-fetch\b/i,
  /\baxios\b/i,
  /\bgo-http-client\b/i,
  /\brust\b/i,
  /\bjava\b\/\d/i,
  /\bapache-httpclient\b/i,
  /\bokhttp\b/i,

  // AI / LLM crawlers
  /\bGPTBot\b/i,
  /\bChatGPT-User\b/i,
  /\bCCBot\b/i,
  /\banthropic-ai\b/i,
  /\bClaudeBot\b/i,
  /\bClaude-Web\b/i,
  /\bGoogle-Extended\b/i,
  /\bApplebot-Extended\b/i,
  /\bcohere-ai\b/i,
  /\bPerplexityBot\b/i,
  /\bYouBot\b/i,
  /\bBytespider\b/i,
  /\bSemrushBot\b/i,
  /\bAhrefsBot\b/i,
  /\bDotBot\b/i,

  // Scraping frameworks
  /\bscrapy\b/i,
  /\bphantomjs\b/i,
  /\bheadlesschrome\b/i,
  /\bpuppeteer\b/i,
  /\bplaywright\b/i,
  /\bselenium\b/i,
]

/** User-agent patterns that are always allowed (search engine crawlers). */
export const ALLOWED_AGENT_PATTERNS: RegExp[] = [
  /\bGooglebot\b/i,
  /\bBingbot\b/i,
  /\bDuckDuckBot\b/i,
  /\bYandexBot\b/i,
  /\bBaiduspider\b/i,
  /\bfacebookexternalhit\b/i,
  /\bTwitterbot\b/i,
  /\bLinkedInBot\b/i,
  /\bSlackbot\b/i,
  /\bTelegramBot\b/i,
  /\bWhatsApp\b/i,
  /\bDiscordBot\b/i,
]

/** Rate-limit policy applied per IP address. */
export interface RateLimitPolicy {
  /** Maximum number of requests allowed in the window. */
  maxRequests: number
  /** Window size in seconds. */
  windowSeconds: number
}

/** Default rate limit for page requests. */
export const PAGE_RATE_LIMIT: RateLimitPolicy = {
  maxRequests: 60,
  windowSeconds: 60,
}

/** Stricter rate limit for API routes. */
export const API_RATE_LIMIT: RateLimitPolicy = {
  maxRequests: 20,
  windowSeconds: 60,
}

/** Paths that bypass the firewall entirely (health-checks, static assets). */
export const BYPASS_PATHS: RegExp[] = [
  /^\/_next\//,
  /^\/favicon\.ico$/,
  /^\/robots\.txt$/,
  /^\/sitemap\.xml$/,
]

/** Maximum number of IPs tracked in the in-memory rate limiter. */
export const RATE_LIMIT_CACHE_MAX_SIZE = 10_000
