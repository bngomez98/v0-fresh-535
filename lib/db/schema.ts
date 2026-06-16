import {
  pgTable,
  text,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core"

// ─── Better Auth required tables ────────────────────────────────────────────

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
})

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
})

// ─── Fresh 535 app tables ────────────────────────────────────────────────────

export const pledges = pgTable("pledges", {
  id: text("id").primaryKey(),
  userId: text("userId"),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  email: text("email").notNull(),
  state: text("state").notNull(),
  district: text("district"),
  party: text("party"),
  sharePublicly: boolean("sharePublicly").notNull().default(false),
  emailUpdates: boolean("emailUpdates").notNull().default(true),
  message: text("message"),
  ipAddress: text("ipAddress"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

export const contactMessages = pgTable("contact_messages", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("unread"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

export const analyticsEvents = pgTable("analytics_events", {
  id: text("id").primaryKey(),
  event: text("event").notNull(),
  page: text("page"),
  userId: text("userId"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  firstName: text("firstName"),
  state: text("state"),
  confirmed: boolean("confirmed").notNull().default(false),
  unsubscribed: boolean("unsubscribed").notNull().default(false),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

export type User = typeof user.$inferSelect
export type Pledge = typeof pledges.$inferSelect
export type ContactMessage = typeof contactMessages.$inferSelect
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect
