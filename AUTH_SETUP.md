# Authentication System Setup

**NOTE: The authentication system has been removed along with Supabase integration.**

This application previously included an authentication system for admin access using Supabase Auth, but it has been removed.

## Current State

- **Admin Login Page** (`/login`) - Non-functional placeholder (authentication removed)
- **Admin Dashboard** (`/admin`) - Accessible without authentication (shows empty data)
- **Session Management** - Removed
- **Protected Routes** - No longer protected
- **Data Export** - CSV export functionality remains but operates on empty data

## To Restore Authentication

If you need to restore authentication functionality, you will need to:

1. Choose an authentication provider (e.g., NextAuth.js, Clerk, Auth0, or re-implement Supabase)
2. Update the following files:
   - `app/login/page.tsx` - Implement login logic
   - `app/admin/page.tsx` - Add authentication checks
   - `middleware.ts` - Add route protection
   - `components/admin-dashboard.tsx` - Implement logout functionality
3. Implement data persistence with a database or backend service

## Data Storage

The application currently uses in-memory storage for:
- Pledges (in `app/api/pledge/route.ts`)
- Contact messages (in `app/api/contact/route.ts`)

**Note:** In-memory storage means all data is lost when the server restarts. For production use, you'll need to implement a proper database solution.

## Running the Application

```bash
npm install --legacy-peer-deps
npm run dev
```

Visit:
- **Login**: http://localhost:3000/login (non-functional)
- **Admin Dashboard**: http://localhost:3000/admin (shows empty data)
- **Home**: http://localhost:3000
