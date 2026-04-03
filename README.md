# Fresh 535

A modern Next.js application for tracking political engagement and pledges.

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/bngomez98/v0-fresh-535.git
   cd v0-fresh-535
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the project root:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bngomez98/v0-fresh-535)

**Quick Deploy Steps:**
1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Set environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` — your Supabase anon/public key
4. Deploy!

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🏗️ Tech Stack

- **Framework:** Next.js 15.2.8 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4.1.9
- **Data Storage:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Components:** Radix UI + shadcn/ui
- **Analytics:** Vercel Analytics

## 📁 Project Structure

```
├── app/              # Next.js app router pages
├── components/       # React components
├── lib/             # Utility functions
│   └── firewall/    # Agent firewall & rate limiting
├── public/          # Static assets
├── styles/          # Global styles
└── middleware.ts    # Edge middleware
```

## 🔒 Security Features

- Agent firewall blocking bots and scrapers
- Rate limiting (60 req/min pages, 20 req/min API)
- Security headers (CSP, X-Frame-Options, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private.

## 🆘 Getting Help

- [Open an issue](https://github.com/bngomez98/v0-fresh-535/issues)
- [Vercel Support](https://vercel.com/support)
