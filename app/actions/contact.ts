"use server"

import { db } from "@/lib/db"
import { contactMessages } from "@/lib/db/schema"
import { randomUUID } from "crypto"

export interface ContactInput {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContact(input: ContactInput) {
  if (!input.name?.trim() || !input.email?.trim() || !input.subject?.trim() || !input.message?.trim()) {
    return { success: false, error: "Please fill in all required fields." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(input.email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  if (input.message.length > 5000) {
    return { success: false, error: "Message is too long. Please keep it under 5,000 characters." }
  }

  await db.insert(contactMessages).values({
    id: randomUUID(),
    name: input.name.trim(),
    email: input.email.toLowerCase().trim(),
    subject: input.subject.trim(),
    message: input.message.trim(),
    status: "unread",
  })

  return { success: true }
}
