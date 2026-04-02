/**
 * In-memory sliding-window rate limiter keyed by IP address.
 *
 * Uses a simple Map with periodic eviction to stay within
 * RATE_LIMIT_CACHE_MAX_SIZE.  Suitable for single-process
 * deployments (Vercel serverless functions share no memory
 * across invocations, so each cold-start resets state — this
 * is intentional and provides a lenient baseline).
 */

import { RATE_LIMIT_CACHE_MAX_SIZE, type RateLimitPolicy } from "./config"

interface BucketEntry {
  /** Timestamps (ms) of requests within the current window. */
  timestamps: number[]
}

const buckets = new Map<string, BucketEntry>()

/**
 * Returns `true` when the request should be **allowed**,
 * `false` when rate-limited.
 */
export function isAllowed(ip: string, policy: RateLimitPolicy): boolean {
  const now = Date.now()
  const windowMs = policy.windowSeconds * 1000

  let entry = buckets.get(ip)
  if (!entry) {
    entry = { timestamps: [] }
    buckets.set(ip, entry)
  }

  // Prune timestamps outside the current window
  entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs)

  if (entry.timestamps.length >= policy.maxRequests) {
    return false
  }

  entry.timestamps.push(now)

  // Evict oldest entries when cache grows too large
  if (buckets.size > RATE_LIMIT_CACHE_MAX_SIZE) {
    const keysToDelete = Array.from(buckets.keys()).slice(
      0,
      buckets.size - RATE_LIMIT_CACHE_MAX_SIZE
    )
    for (const key of keysToDelete) {
      buckets.delete(key)
    }
  }

  return true
}
