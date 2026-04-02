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
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
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

For detailed deployment instructions, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

**Quick Deploy Steps:**
1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Add environment variables (see `.env.example`)
4. Deploy!

### Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

See [.env.example](./.env.example) for details.

## 🗄️ Database Setup

This application uses Supabase for data storage. Follow the setup guide:

1. See [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md) for complete Supabase setup
2. See [SUPABASE_INTEGRATION.md](./SUPABASE_INTEGRATION.md) for technical details

## 📚 Documentation

- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md) - Deploy to Vercel
- [Supabase Setup Checklist](./SETUP_CHECKLIST.md) - Database configuration
- [Supabase Integration](./SUPABASE_INTEGRATION.md) - Technical implementation

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
- **Database:** Supabase
- **Deployment:** Vercel
- **Components:** Radix UI + shadcn/ui

## 📁 Project Structure

```
├── app/              # Next.js app router pages
├── components/       # React components
├── lib/             # Utility functions and clients
│   ├── firewall/    # Agent firewall & rate limiting
│   └── supabase.ts  # Supabase client
├── public/          # Static assets
├── styles/          # Global styles
├── supabase/        # Database migrations
└── middleware.ts    # Edge middleware
```

## 🔒 Security Features

- Agent firewall blocking bots and scrapers
- Rate limiting (60 req/min pages, 20 req/min API)
- Security headers (CSP, X-Frame-Options, etc.)
- Row-level security in Supabase

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
- [Supabase Discord](https://discord.supabase.com)
