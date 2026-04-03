# Setup Checklist

## Quick Start

- [ ] Clone the repository
- [ ] Install dependencies: `npm install --legacy-peer-deps`
- [ ] Create `.env.local` with required environment variables (see below)
- [ ] Start development server: `npm run dev`
- [ ] Visit http://localhost:3000

## Required Environment Variables

Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public API key |

## Data Storage

The application uses **Supabase** (PostgreSQL) for persistent data storage:
- Pledge submissions are stored in the `pledges` table
- Contact form messages are stored in the `contact_messages` table

## Deployment

### Deploy to Vercel

- [ ] Push code to GitHub
- [ ] Connect repository to Vercel
- [ ] Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel project settings (or configure them as [Vercel secrets](https://vercel.com/docs/environment-variables) named `next_public_supabase_url` and `next_public_supabase_anon_key` to match `vercel.json` mappings)
- [ ] Deploy
