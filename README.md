## Supabase Authentication Setup

To enable login/sign-up, create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Also configure your Supabase Auth URL settings:

- **Site URL**: your app URL (for local dev: `http://localhost:3000`)
- **Redirect URLs**: include `http://localhost:3000/auth/callback`

After setting these values, restart the dev server.
