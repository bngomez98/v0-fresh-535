import { execSync } from "child_process"
import { existsSync, mkdirSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")

// Ensure the prisma directory exists
const prismaDir = join(root, "prisma")
if (!existsSync(prismaDir)) {
  mkdirSync(prismaDir, { recursive: true })
}

console.log("Running Prisma migrations...")
try {
  execSync("npx prisma migrate dev --name init --skip-seed", {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, DATABASE_URL: `file:${join(prismaDir, "dev.db")}` },
  })
  console.log("Migration complete.")
} catch {
  // migrate dev requires interactive input in some envs, fall back to db push
  console.log("Falling back to prisma db push...")
  execSync("npx prisma db push --skip-generate", {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, DATABASE_URL: `file:${join(prismaDir, "dev.db")}` },
  })
  console.log("DB push complete.")
}
