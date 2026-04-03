# Authentication System Setup

**NOTE: The authentication system is not currently implemented.**

The admin dashboard is accessible without authentication. Authentication can be added in the future.

## Current State

- **Admin Login Page** (`/login`) — Non-functional placeholder
- **Admin Dashboard** (`/admin`) — Accessible without authentication
- **Session Management** — Not implemented
- **Protected Routes** — Not protected

## Data Storage

The application uses **Supabase** (PostgreSQL) for persistent data storage:
- Pledges (via `app/api/pledge/route.ts`)
- Contact messages (via `app/api/contact/route.ts`)
- Admin data retrieval (via `app/api/admin/pledges/route.ts` and `app/api/admin/messages/route.ts`)

### Required Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public API key |

See `SETUP_CHECKLIST.md` for configuration details.

## To Add Authentication

If you need to add authentication functionality:

1. Choose an authentication provider (e.g., NextAuth.js, Clerk, Auth0, or Supabase Auth)
2. Update the following files:
   - `app/login/page.tsx` — Implement login logic
   - `app/admin/page.tsx` — Add authentication checks
   - `middleware.ts` — Add route protection
   - `components/admin-dashboard.tsx` — Implement logout functionality

## Running the Application

```bash
npm install --legacy-peer-deps
npm run dev
```

Visit:
- **Login**: http://localhost:3000/login (non-functional)
- **Admin Dashboard**: http://localhost:3000/admin
- **Home**: http://localhost:3000
