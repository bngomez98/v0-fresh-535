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

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bngomez98/v0-fresh-535)

**Quick Deploy Steps:**
1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Configure any required environment variables in your deployment platform
4. Deploy

## 🗄️ Database Setup

This application uses Supabase for data storage. Ensure your deployment has the necessary credentials configured.

## 📚 Documentation

- [AUTH_SETUP.md](./AUTH_SETUP.md) - Authentication setup details
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Summary of the authentication implementation

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
- [Supabase Discord](https://discord.supabase.com)
