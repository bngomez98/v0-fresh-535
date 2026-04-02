# Supabase Setup Checklist

Use this checklist to set up Supabase for your Fresh 535 application.

## Pre-Setup
- [ ] I have a Supabase account (sign up at https://supabase.com if needed)
- [ ] I have reviewed the `supabase/README.md` documentation
- [ ] I understand that I need to set up environment variables

## Create Supabase Project
- [ ] Created a new Supabase project
- [ ] Chose a project name (e.g., "fresh-535-purple-mountain")
- [ ] Set a strong database password (save it securely!)
- [ ] Selected a region close to my users
- [ ] Waited for project provisioning to complete

## Get API Credentials
- [ ] Navigated to Settings → API in Supabase dashboard
- [ ] Copied the Project URL
- [ ] Copied the `anon`/`public` API key
- [ ] Stored these credentials securely

## Configure Application
- [ ] Copied `.env.example` to `.env.local`
- [ ] Added `NEXT_PUBLIC_SUPABASE_URL` to `.env.local`
- [ ] Added `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`
- [ ] Verified `.env.local` is in `.gitignore` (don't commit secrets!)

## Set Up Database Schema

### Option A: Supabase SQL Editor (Recommended)
- [ ] Opened Supabase dashboard → SQL Editor
- [ ] Created new query
- [ ] Copied and ran `supabase/migrations/001_create_pledges_table.sql`
- [ ] Verified pledges table was created
- [ ] Created another new query
- [ ] Copied and ran `supabase/migrations/002_create_contact_messages_table.sql`
- [ ] Verified contact_messages table was created

### Option B: Supabase CLI
- [ ] Installed Supabase CLI: `npm install -g supabase`
- [ ] Linked project: `supabase link --project-ref YOUR_PROJECT_REF`
- [ ] Pushed migrations: `supabase db push`

## Verify Database Setup
- [ ] Navigated to Database → Tables in Supabase
- [ ] Confirmed `pledges` table exists with correct columns
- [ ] Confirmed `contact_messages` table exists with correct columns
- [ ] Verified RLS is enabled on both tables (should show a shield icon)
- [ ] Checked that policies exist for both tables

## Test the Integration

### Local Testing
- [ ] Started dev server: `npm run dev`
- [ ] Opened http://localhost:3000/pledge
- [ ] Submitted a test pledge with fake data
- [ ] Checked browser console for success message
- [ ] Verified pledge appears in Supabase → Table Editor → pledges
- [ ] Opened http://localhost:3000/contact
- [ ] Submitted a test contact message
- [ ] Verified message appears in Supabase → Table Editor → contact_messages

### Verify Data
- [ ] Opened Supabase → Table Editor → pledges
- [ ] Confirmed test pledge is visible with all fields
- [ ] Checked that `created_at` timestamp is correct
- [ ] Opened Supabase → Table Editor → contact_messages
- [ ] Confirmed test message is visible
- [ ] Deleted test data if desired

## Production Deployment

### Environment Variables
- [ ] Added `NEXT_PUBLIC_SUPABASE_URL` to production environment
- [ ] Added `NEXT_PUBLIC_SUPABASE_ANON_KEY` to production environment
- [ ] Verified environment variables are set correctly

### Deployment Platform Specific

#### Vercel
- [ ] Settings → Environment Variables → Add variables
- [ ] Redeployed the application

#### Netlify
- [ ] Site settings → Environment variables → Add variables
- [ ] Triggered new deployment

#### Other platforms
- [ ] Configured environment variables according to platform docs
- [ ] Deployed/redeployed the application

### Post-Deployment Testing
- [ ] Visited production site pledge page
- [ ] Submitted a test pledge
- [ ] Verified it appears in Supabase
- [ ] Tested contact form
- [ ] Verified message appears in Supabase
- [ ] Deleted test data from production database

## Optional Enhancements
- [ ] Set up email notifications (see supabase/README.md)
- [ ] Create admin dashboard for viewing submissions
- [ ] Implement rate limiting
- [ ] Add duplicate detection
- [ ] Set up automated backups
- [ ] Configure database replication (if needed)

## Security Checklist
- [ ] Verified `.env.local` is NOT committed to git
- [ ] Confirmed RLS policies are active on all tables
- [ ] Tested that public users cannot read data directly
- [ ] Verified only service role can query data
- [ ] Reviewed IP tracking is working for abuse prevention
- [ ] Confirmed API keys are stored securely in environment variables

## Documentation Review
- [ ] Read `supabase/README.md` completely
- [ ] Reviewed `SUPABASE_INTEGRATION.md` for technical details
- [ ] Understood the database schema
- [ ] Familiar with how to query data in Supabase

## Troubleshooting
If you encounter issues:
- [ ] Checked browser console for error messages
- [ ] Verified environment variables are set correctly
- [ ] Confirmed Supabase project is active
- [ ] Reviewed `supabase/README.md` troubleshooting section
- [ ] Checked Supabase dashboard for error logs
- [ ] Verified RLS policies are not blocking inserts

## Done!
- [ ] Integration is complete and tested
- [ ] Ready to collect real pledge submissions
- [ ] Ready to receive contact messages

---

**Need help?** Review the documentation in:
- `supabase/README.md` - Detailed setup guide
- `SUPABASE_INTEGRATION.md` - Technical implementation details
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)
