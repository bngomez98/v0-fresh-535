# Authentication System Setup

This application now includes a complete authentication system for admin access using Supabase Auth.

## Features

- **Admin Login Page** (`/login`) - Secure login for authorized administrators
- **Admin Dashboard** (`/admin`) - Protected dashboard to view pledges and contact messages
- **Session Management** - Automatic session refresh and secure cookie handling
- **Protected Routes** - Middleware protection for admin-only areas
- **Data Export** - CSV export functionality for pledges and messages
- **Analytics** - State-by-state pledge breakdown and engagement statistics

## Setup Instructions

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

Note: The `--legacy-peer-deps` flag is required due to React 19 compatibility with some UI libraries.

### 2. Configure Supabase

#### Enable Authentication in Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Providers**
3. Enable **Email** authentication
4. Configure email templates if desired (optional)

#### Create Admin Users

In the Supabase dashboard:

1. Go to **Authentication** → **Users**
2. Click **Add user** → **Create new user**
3. Enter admin email and password
4. The user will be able to log in immediately

Alternatively, use SQL:

```sql
-- Insert admin user (replace with actual email/password)
INSERT INTO auth.users (email, encrypted_password, email_confirmed_at)
VALUES (
  'admin@fresh535.org',
  crypt('your-secure-password', gen_salt('bf')),
  NOW()
);
```

#### Update Row Level Security Policies

Run the migration to update RLS policies:

```bash
# The migration file is already created at:
# supabase/migrations/003_update_rls_for_auth.sql

# To apply it, either:
# 1. Run it directly in Supabase SQL Editor
# 2. Use Supabase CLI: supabase db push
```

The migration updates policies to allow authenticated users to read from `pledges` and `contact_messages` tables.

### 3. Run the Application

```bash
npm run dev
```

Visit:
- **Login**: http://localhost:3000/login
- **Admin Dashboard**: http://localhost:3000/admin (redirects to login if not authenticated)

## File Structure

```
Authentication System Files:
├── app/
│   ├── login/
│   │   └── page.tsx                    # Login page
│   ├── admin/
│   │   └── page.tsx                    # Admin dashboard (protected)
│   └── api/
│       └── admin/
│           ├── pledges/route.ts        # API to fetch pledges (auth required)
│           └── messages/route.ts       # API to fetch messages (auth required)
├── components/
│   ├── admin-dashboard.tsx             # Admin dashboard UI component
│   └── header.tsx                      # Updated with login link
├── lib/
│   ├── supabase-server.ts              # Server-side Supabase client
│   ├── supabase-browser.ts             # Client-side Supabase client
│   └── supabase.ts                     # Original client (for public operations)
├── middleware.ts                        # Updated with auth session refresh & route protection
└── supabase/                            # Supabase migration references (if maintained separately)
```

## Security Features

### Route Protection

- `/admin/*` routes are protected by middleware
- Unauthenticated users are redirected to `/login`
- Session is automatically refreshed on each request

### API Protection

- `/api/admin/*` endpoints verify authentication
- Return 401 Unauthorized for unauthenticated requests
- Use server-side Supabase client for secure database access

### Session Management

- Secure HTTP-only cookies for session storage
- Automatic session refresh via middleware
- Logout functionality clears all session data

## Using the Admin Dashboard

### Features

1. **Statistics Cards**
   - Total pledge count
   - Total contact messages
   - Number of active states

2. **Top States**
   - View top 5 states by pledge count

3. **Pledge Data**
   - View all pledge submissions
   - See supporter names, emails, states, and zip codes
   - Export to CSV

4. **Contact Messages**
   - View all contact form submissions
   - See name, email, subject, category, and message
   - Export to CSV

### CSV Export

Click the "Export CSV" button on either tab to download data:
- `pledges.csv` - All pledge submissions
- `messages.csv` - All contact messages

## Troubleshooting

### "Unauthorized" errors when accessing admin dashboard

1. Verify you're logged in (check `/login`)
2. Ensure RLS policies are updated (run migration 003)
3. Check that your user exists in Supabase Auth

### Cannot log in

1. Verify Supabase credentials in `.env.local`
2. Check that Email provider is enabled in Supabase
3. Ensure user exists in Supabase Auth → Users

### Data not showing in dashboard

1. Run the RLS migration (`003_update_rls_for_auth.sql`)
2. Verify authenticated users have SELECT permissions
3. Check browser console for API errors

## Next Steps

Optional enhancements:

- **Email Verification**: Require email verification for new admin users
- **Role-Based Access**: Add different admin roles (viewer, editor, etc.)
- **Audit Logs**: Track admin actions and data exports
- **2FA**: Add two-factor authentication for enhanced security
- **Password Reset**: Implement password reset flow
- **Admin User Management**: UI to create/manage admin users

## Security Notes

- Never commit `.env.local` to version control
- Use strong passwords for admin accounts
- Regularly review admin access logs in Supabase
- Consider enabling 2FA for production environments
- Limit admin user creation to trusted personnel
