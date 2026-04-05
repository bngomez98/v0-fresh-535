import { PrismaLibSql } from "@prisma/adapter-libsql"
import { PrismaClient } from "../lib/generated/prisma/client.js"

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL ?? "file:prisma/dev.db",
})

const prisma = new PrismaClient({ adapter })

async function main() {
  // Verify connection and that the table exists by running a simple query
  try {
    const count = await prisma.analyticsEvent.count()
    console.log(`analytics_events table exists. Current row count: ${count}`)
  } catch (err) {
    console.error("analytics_events table not accessible:", err.message)
    console.log("Run: npx prisma migrate dev --name add-analytics-events")
    process.exit(1)
  }

  await prisma.$disconnect()
  console.log("Migration check complete.")
}

main()
