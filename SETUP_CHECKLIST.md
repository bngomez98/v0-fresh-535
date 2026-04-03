# Setup Checklist

**NOTE: Supabase has been removed from this application.**

This checklist is now outdated as the application no longer uses Supabase for data storage.

## Current Setup

### Quick Start

- [ ] Clone the repository
- [ ] Install dependencies: `npm install --legacy-peer-deps`
- [ ] Start development server: `npm run dev`
- [ ] Visit http://localhost:3000

## Data Storage

The application currently uses **in-memory storage** for:
- Pledge submissions (resets on server restart)
- Contact form messages (resets on server restart)

**⚠️ Warning:** All data is lost when the server restarts. This is suitable for development/testing only.

## To Add a Database

If you need persistent data storage, you'll need to:

1. **Choose a database solution:**
   - PostgreSQL (with Supabase, Neon, or self-hosted)
   - MongoDB
   - MySQL
   - SQLite (for simple cases)
   - Any other database service

2. **Update API routes:**
   - `app/api/pledge/route.ts` - Replace in-memory storage
   - `app/api/contact/route.ts` - Replace in-memory storage
   - `app/api/admin/pledges/route.ts` - Implement data retrieval
   - `app/api/admin/messages/route.ts` - Implement data retrieval

3. **Add environment variables** for your chosen database connection

4. **Implement authentication** if you need protected admin access

## Deployment

### Deploy to Vercel

- [ ] Push code to GitHub
- [ ] Connect repository to Vercel
- [ ] Deploy

**Note:** The app will deploy and run, but data will not persist between deployments or server restarts.
