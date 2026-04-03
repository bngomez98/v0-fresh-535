import type { NextRequest } from "next/server"

const SESSION_COOKIE = "admin_session"
const SESSION_TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

const encoder = new TextEncoder()

async function getHmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  )
}

async function signPayload(payload: string): Promise<string> {
  const secret = process.env.ADMIN_SECRET
  if (!secret) throw new Error("ADMIN_SECRET environment variable is not set")
  const key = await getHmacKey(secret)
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload))
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

async function verifyPayload(payload: string, providedSig: string): Promise<boolean> {
  const secret = process.env.ADMIN_SECRET
  if (!secret) return false
  try {
    const key = await getHmacKey(secret)
    const sigBytes = new Uint8Array(
      providedSig.match(/.{2}/g)!.map((byte) => parseInt(byte, 16))
    )
    return crypto.subtle.verify("HMAC", key, sigBytes, encoder.encode(payload))
  } catch {
    return false
  }
}

export async function createSessionToken(email: string): Promise<string> {
  const timestamp = Date.now().toString()
  const payload = `${email}|${timestamp}`
  const signature = await signPayload(payload)
  return Buffer.from(`${payload}|${signature}`).toString("base64")
}

export async function verifySession(request: NextRequest): Promise<boolean> {
  try {
    const cookie = request.cookies.get(SESSION_COOKIE)
    if (!cookie?.value) return false

    const decoded = Buffer.from(cookie.value, "base64").toString("utf-8")
    const pipeIdx1 = decoded.indexOf("|")
    const pipeIdx2 = decoded.indexOf("|", pipeIdx1 + 1)
    if (pipeIdx1 === -1 || pipeIdx2 === -1) return false

    const email = decoded.slice(0, pipeIdx1)
    const timestamp = decoded.slice(pipeIdx1 + 1, pipeIdx2)
    const providedSig = decoded.slice(pipeIdx2 + 1)

    const payload = `${email}|${timestamp}`

    const valid = await verifyPayload(payload, providedSig)
    if (!valid) return false

    const tokenAge = Date.now() - parseInt(timestamp, 10)
    if (isNaN(tokenAge) || tokenAge > SESSION_TTL_MS) return false

    return true
  } catch {
    return false
  }
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let result = 0
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return result === 0
}

export function validateAdminCredentials(email: string, password: string): boolean {
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@fresh535.org"
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    console.error("ADMIN_PASSWORD environment variable is not set")
    return false
  }

  return (
    constantTimeEqual(email.toLowerCase(), adminEmail.toLowerCase()) &&
    constantTimeEqual(password, adminPassword)
  )
}

export { SESSION_COOKIE }
