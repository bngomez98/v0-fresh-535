# Supabase Setup Guide

This project uses Supabase as the backend database for storing pledges and contact form submissions.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Basic knowledge of SQL and database management

## Setup Instructions

### 1. Create a Supabase Project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Choose a name for your project (e.g., "fresh-535" or "fresh-535-purple-mountain")
4. Set a strong database password
5. Choose a region closest to your users
6. Wait for the project to be created (usually takes 1-2 minutes)

### 2. Get Your API Keys

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (this is safe to use in client-side code)

### 3. Configure Environment Variables

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update the `.env.local` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### 4. Run Database Migrations

You have two options to set up the database schema:

#### Option A: Using Supabase SQL Editor (Recommended for first-time setup)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy the contents of `supabase/migrations/001_create_pledges_table.sql`
5. Paste and run the query
6. Repeat for `supabase/migrations/002_create_contact_messages_table.sql`

#### Option B: Using Supabase CLI

If you have the Supabase CLI installed:

```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Link to your project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push
```

### 5. Verify Database Setup

1. In Supabase dashboard, go to **Database** → **Tables**
2. You should see two new tables:
   - `pledges`
   - `contact_messages`

3. Check that Row Level Security (RLS) is enabled for both tables
4. Verify that the policies are in place:
   - "Allow public pledge submissions" on `pledges`
   - "Allow public contact submissions" on `contact_messages`
   - Service role policies for reading data

## Database Schema

### Pledges Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key, auto-generated |
| first_name | TEXT | User's first name |
| last_name | TEXT | User's last name |
| email | TEXT | User's email address |
| state | TEXT | US state |
| zip_code | TEXT | ZIP code |
| comments | TEXT | Optional comments |
| ip_address | TEXT | User's IP address |
| user_agent | TEXT | User's browser/device info |
| created_at | TIMESTAMP | Submission timestamp |

### Contact Messages Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key, auto-generated |
| name | TEXT | User's name |
| email | TEXT | User's email address |
| subject | TEXT | Message subject |
| category | TEXT | Message category (optional) |
| message | TEXT | Message content |
| ip_address | TEXT | User's IP address |
| user_agent | TEXT | User's browser/device info |
| created_at | TIMESTAMP | Submission timestamp |

## Security

- **Row Level Security (RLS)** is enabled on all tables
- Public users can only INSERT data (submit forms)
- Only the service role can SELECT data (read submissions)
- Email validation is performed on the API side
- IP addresses and user agents are logged for analytics and abuse prevention

## Testing

After setup, test the integration:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to:
   - `/pledge` - Test the pledge form
   - `/contact` - Test the contact form

3. Submit a test entry and verify it appears in your Supabase dashboard under **Database** → **Table Editor**

## Querying Data

To view submitted data, use the Supabase dashboard or SQL Editor with service_role permissions:

```sql
-- View all pledges
SELECT * FROM pledges ORDER BY created_at DESC;

-- Count pledges by state
SELECT state, COUNT(*) as pledge_count
FROM pledges
GROUP BY state
ORDER BY pledge_count DESC;

-- View recent contact messages
SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 10;
```

## Troubleshooting

### "Failed to save pledge/message"

- Verify your environment variables are set correctly
- Check that the tables exist in Supabase
- Ensure RLS policies are configured properly
- Check the browser console for detailed error messages

### Connection Issues

- Verify the Supabase URL and anon key are correct
- Check that your Supabase project is active
- Ensure you're not using expired or revoked API keys

## Next Steps

Consider implementing:

1. **Email notifications** using Supabase Edge Functions or a service like SendGrid
2. **Analytics dashboard** to visualize pledge statistics
3. **Data export** functionality for admins
4. **Rate limiting** to prevent abuse
5. **Email verification** to ensure valid email addresses
6. **Duplicate detection** to prevent multiple submissions from the same user

## Support

For Supabase-specific issues, refer to:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord Community](https://discord.supabase.com)
