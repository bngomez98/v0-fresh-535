# Supabase Integration Summary

## Overview

The Fresh 535 civic movement website uses Supabase (PostgreSQL) for persistent data storage.

## Required Environment Variables

The application requires the following environment variables to connect to Supabase:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL (e.g., `https://your-project.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public API key |

### Local Development

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Vercel Deployment

Set these variables in your Vercel project settings under **Settings → Environment Variables**, or they will be mapped automatically via `vercel.json` if configured as Vercel secrets.

## Architecture

### Data Storage
- **Supabase client:** `lib/supabase.ts` — creates a Supabase client using the anon key
- **Pledge submissions:** stored in the `pledges` table via `app/api/pledge/route.ts`
- **Contact messages:** stored in the `contact_messages` table via `app/api/contact/route.ts`

### API Routes
- `app/api/pledge/route.ts` — GET (pledge count) and POST (new pledge) using Supabase
- `app/api/contact/route.ts` — POST (new contact message) using Supabase
- `app/api/admin/pledges/route.ts` — GET all pledges from Supabase
- `app/api/admin/messages/route.ts` — GET all contact messages from Supabase

### Configuration
- `vercel.json` — maps Supabase environment variables for Vercel deployments
- `middleware.ts` — CSP headers allow connections to `*.supabase.co`

## Authentication

- Login page exists but is non-functional
- Admin dashboard is accessible without authentication
- No session management or route protection

## What Works
- Home page and all public pages
- Pledge form submission (data persisted in Supabase)
- Contact form submission (data persisted in Supabase)
- Admin dashboard data retrieval from Supabase
- UI components and styling
- Firewall and security headers

## Technical Notes

- Supabase client uses the anon key; admin API routes query using the same client
- Validation logic for emails and ZIP codes is preserved in API routes
- CSV export functionality remains in the admin dashboard
