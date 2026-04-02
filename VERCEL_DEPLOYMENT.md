# Vercel Deployment Guide

This guide will walk you through deploying your Fresh 535 application to Vercel.

## Prerequisites

- [ ] A Vercel account (sign up at https://vercel.com)
- [ ] A Supabase project with credentials (see `SUPABASE_INTEGRATION.md`)
- [ ] GitHub repository access
- [ ] Node.js 18+ installed locally (for testing)

## Quick Deploy

Click the button below to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bngomez98/v0-fresh-535)

After clicking, you'll need to add environment variables (see step 4 below).

## Manual Deployment Steps

### 1. Set Up Supabase (if not already done)

Before deploying to Vercel, ensure your Supabase project is ready:

1. Create a Supabase project at https://supabase.com
2. Run the database migrations from `supabase/migrations/`
3. Get your credentials from Settings → API:
   - Project URL
   - Anon/Public API Key

For detailed Supabase setup, see `SUPABASE_INTEGRATION.md`.

### 2. Connect Repository to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository `bngomez98/v0-fresh-535`
4. Click "Import"

### 3. Configure Project Settings

Vercel will automatically detect Next.js. Verify these settings:

- **Framework Preset:** Next.js
- **Build Command:** `next build` (default)
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install` (default)
- **Development Command:** `next dev` (default)

### 4. Add Environment Variables

In the Vercel project configuration, add these environment variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Get from Supabase dashboard |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | Get from Supabase dashboard |

**How to add:**
1. In Vercel project settings → Environment Variables
2. Add each variable
3. Select all environments: Production, Preview, and Development

### 5. Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. Once deployed, Vercel will provide a URL (e.g., `your-project.vercel.app`)

### 6. Verify Deployment

Test your deployed application:

- [ ] Visit the production URL
- [ ] Navigate to the pledge page (`/pledge`)
- [ ] Submit a test pledge
- [ ] Check Supabase dashboard → Table Editor → pledges (should see the test entry)
- [ ] Navigate to contact page (`/contact`)
- [ ] Submit a test contact message
- [ ] Check Supabase dashboard → Table Editor → contact_messages
- [ ] Delete test data from Supabase if desired

## Configuration Details

### Next.js Configuration

The project includes `next.config.mjs` with these settings:

```javascript
{
  eslint: {
    ignoreDuringBuilds: true,  // Skips ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true,    // Skips TypeScript errors during build
  },
  images: {
    unoptimized: true,          // Disables image optimization
  },
}
```

**⚠️ Note:** These settings allow deployment even with code errors. For production, consider:
- Fixing all TypeScript errors and setting `ignoreBuildErrors: false`
- Fixing all ESLint errors and setting `ignoreDuringBuilds: false`
- Enabling image optimization by setting `unoptimized: false`

### Vercel Configuration

The `vercel.json` file configures:

- **Build settings:** Framework detection, commands
- **Security headers:** X-Frame-Options, CSP, XSS protection
- **Environment variables:** References to Supabase credentials
- **Regional deployment:** Defaults to `iad1` (US East)

You can customize the region in `vercel.json` by changing the `regions` array. Available regions: https://vercel.com/docs/concepts/edge-network/regions

### Edge Runtime & Middleware

The application includes middleware (`middleware.ts`) that runs on Vercel's Edge Runtime:

- **Agent Firewall:** Blocks automated bots and scrapers
- **Rate Limiting:** 60 requests/minute for pages, 20/minute for API
- **Security Headers:** Automatically applied to all routes

**⚠️ Important:** Rate limiting uses in-memory storage which resets on cold starts in serverless environments. For production-grade rate limiting, consider:
- Vercel KV (Redis): https://vercel.com/docs/storage/vercel-kv
- Upstash Redis: https://upstash.com
- Supabase with custom rate limit tables

### API Routes

All API routes are serverless functions that will automatically scale:

- `POST /api/contact` - Saves contact messages to Supabase
- `POST /api/pledge` - Saves pledge data to Supabase
- `GET /api/district` - Fetches district information
- `GET /api/download` - Generates PDF/ZIP downloads
- `POST /api/analytics` - Logs analytics events

Each function has:
- **Timeout:** 10 seconds (Vercel Hobby plan default)
- **Memory:** 1024 MB (Vercel default)
- **Concurrent executions:** Auto-scales based on traffic

## Custom Domain Setup

To use a custom domain:

1. Go to Vercel project → Settings → Domains
2. Add your domain (e.g., `fresh535.com`)
3. Configure DNS records as instructed by Vercel
4. Wait for DNS propagation (5 minutes to 48 hours)

Vercel automatically provisions SSL certificates via Let's Encrypt.

## Environment-Specific Deployments

### Production
- Main branch deploys to production automatically
- URL: `your-project.vercel.app` or custom domain
- Environment variables: Use production Supabase credentials

### Preview (Pull Requests)
- Each pull request gets a unique preview URL
- URL: `your-project-git-branch-name.vercel.app`
- Environment variables: Can use staging/preview Supabase project

### Development
- Local development with `npm run dev`
- Uses `.env.local` file for environment variables
- Hot reload enabled

## Monitoring and Analytics

### Vercel Analytics

Enable Vercel Analytics for insights:

1. Go to project → Analytics
2. Click "Enable Analytics"
3. Add `@vercel/analytics` to your project (optional for detailed metrics)

### Logs

View real-time logs:

1. Go to project → Deployments
2. Click on a deployment
3. View "Functions" tab for serverless function logs
4. View "Edge" tab for middleware logs

### Error Tracking

Consider integrating error tracking:
- Sentry: https://sentry.io
- LogRocket: https://logrocket.com
- Vercel's built-in error monitoring

## Performance Optimization

### Recommended Enhancements

1. **Enable Image Optimization**
   - Change `unoptimized: false` in `next.config.mjs`
   - Use `next/image` component for all images

2. **Enable Edge Caching**
   - Add `Cache-Control` headers to API routes
   - Use `revalidate` in page components

3. **Optimize Bundle Size**
   - Run `npm run build` locally
   - Check `.next/analyze` for bundle size
   - Use dynamic imports for large components

4. **Use Vercel Edge Config**
   - Store feature flags and config in Edge Config
   - Ultra-low latency globally

## Troubleshooting

### Build Failures

**Error:** `Module not found` or dependency errors
- **Solution:** Ensure all dependencies are in `package.json`, not just `devDependencies`

**Error:** TypeScript errors during build
- **Solution:** Fix TypeScript errors or keep `ignoreBuildErrors: true`

**Error:** Out of memory
- **Solution:** Upgrade to Vercel Pro for 3008 MB memory limit

### Runtime Errors

**Error:** `NEXT_PUBLIC_SUPABASE_URL is not defined`
- **Solution:** Verify environment variables are set in Vercel project settings
- **Solution:** Redeploy after adding environment variables

**Error:** Database connection failed
- **Solution:** Check Supabase project is active
- **Solution:** Verify credentials are correct
- **Solution:** Check Supabase logs for connection issues

**Error:** Rate limiting not working
- **Solution:** This is expected behavior with in-memory storage
- **Solution:** Implement persistent rate limiting with Vercel KV or Supabase

### Performance Issues

**Slow API responses:**
- Check Supabase query performance
- Add database indexes for frequently queried columns
- Enable connection pooling in Supabase

**Slow page loads:**
- Enable image optimization
- Use `next/dynamic` for code splitting
- Optimize third-party scripts

## Security Considerations

### Environment Variables

- ✅ **Do:** Use `NEXT_PUBLIC_` prefix for client-side variables
- ✅ **Do:** Use environment variables for all secrets
- ❌ **Don't:** Commit `.env.local` to Git
- ❌ **Don't:** Expose private API keys in `NEXT_PUBLIC_` variables

### Content Security Policy

The application includes a CSP in middleware. If you encounter CSP violations:

1. Check browser console for CSP errors
2. Update CSP in `middleware.ts`
3. Redeploy

### Rate Limiting

Current implementation:
- In-memory rate limiting (resets on cold starts)
- 60 requests/minute for pages
- 20 requests/minute for API routes

For production-grade rate limiting:
- Use Vercel KV or Upstash Redis
- Implement IP-based tracking across invocations

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. **Push to main branch** → Production deployment
2. **Open pull request** → Preview deployment
3. **Push to PR branch** → Updates preview deployment

### Deployment Hooks

Set up webhooks for notifications:

1. Go to project → Settings → Git
2. Configure "Deploy Hooks"
3. Add webhooks to Slack, Discord, etc.

## Cost Considerations

### Vercel Hobby Plan (Free)
- 100 GB bandwidth/month
- 100 serverless function executions/day
- 6,000 build minutes/month
- 10 second function timeout
- Community support

### When to Upgrade to Pro
- High traffic (>100 GB bandwidth/month)
- Need longer function timeouts (>10 seconds)
- Team collaboration features
- Priority support

See pricing: https://vercel.com/pricing

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Supabase with Vercel](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

## Getting Help

- Vercel Support: https://vercel.com/support
- Vercel Discord: https://vercel.com/discord
- GitHub Issues: https://github.com/bngomez98/v0-fresh-535/issues

---

**Deployment Status:** Once deployed, your application will be live at `https://your-project.vercel.app` ✨
