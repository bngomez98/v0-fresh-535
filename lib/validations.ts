import { z } from "zod"

export const pledgeSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(100, "First name must be 100 characters or less"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(100, "Last name must be 100 characters or less"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .max(255, "Email must be 255 characters or less"),
  state: z
    .string()
    .min(1, "State is required")
    .max(2, "State must be a 2-letter abbreviation"),
  zipCode: z
    .string()
    .min(1, "ZIP code is required")
    .regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code format"),
  comments: z
    .string()
    .max(2000, "Comments must be 2000 characters or less")
    .optional(),
})

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(200, "Name must be 200 characters or less"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .max(255, "Email must be 255 characters or less"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(300, "Subject must be 300 characters or less"),
  category: z
    .string()
    .max(100, "Category must be 100 characters or less")
    .optional(),
  message: z
    .string()
    .min(1, "Message is required")
    .max(5000, "Message must be 5000 characters or less"),
})

export const analyticsSchema = z.object({
  event: z
    .string()
    .min(1, "Event name is required")
    .max(100, "Event name must be 100 characters or less"),
  path: z
    .string()
    .max(500, "Path must be 500 characters or less")
    .optional(),
  timestamp: z.string().optional(),
  referrer: z
    .string()
    .max(1000, "Referrer must be 1000 characters or less")
    .optional(),
  userAgent: z
    .string()
    .max(500, "User agent must be 500 characters or less")
    .optional(),
})

export type PledgeInput = z.infer<typeof pledgeSchema>
export type ContactInput = z.infer<typeof contactSchema>
export type AnalyticsInput = z.infer<typeof analyticsSchema>
