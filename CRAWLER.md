# Website Crawler

This directory contains the web crawler utility for the Fresh 535 project.

## Overview

The crawler can be used to:
- Discover all pages on the website
- Validate links and check for broken pages
- Generate sitemaps automatically
- Test the website structure

## Files

- `lib/crawler.ts` - Main crawler class and utilities
- `scripts/crawl.js` - CLI script to run the crawler
- `public/robots.txt` - Robots exclusion file that defines crawling rules

## Usage

### Basic Usage

Crawl the local development server:

```bash
npm run crawl http://localhost:3000
```

### Advanced Options

```bash
# Crawl with custom depth
npm run crawl http://localhost:3000 -- --max-depth 2

# Generate a sitemap
npm run crawl http://localhost:3000 -- --output sitemap > public/sitemap.xml

# Get list of URLs
npm run crawl http://localhost:3000 -- --output urls

# Crawl with a delay between requests (respectful crawling)
npm run crawl http://localhost:3000 -- --delay 2000 --max-pages 50
```

### Command Line Options

- `--max-depth, -d <number>` - Maximum crawl depth (default: 3)
- `--max-pages, -p <number>` - Maximum pages to crawl (default: 100)
- `--output, -o <format>` - Output format: `json`, `sitemap`, or `urls` (default: json)
- `--delay <ms>` - Delay between requests in milliseconds (default: 1000)
- `--help, -h` - Show help message

## Programmatic Usage

You can also use the crawler programmatically in your code:

```typescript
import { WebCrawler, crawlWebsite } from '@/lib/crawler'

// Simple usage
const results = await crawlWebsite('http://localhost:3000', {
  maxDepth: 2,
  maxPages: 50,
})

// Advanced usage with WebCrawler class
const crawler = new WebCrawler({
  maxDepth: 3,
  maxPages: 100,
  delay: 1000,
  userAgent: 'MyCustomCrawler/1.0',
})

const results = await crawler.crawl('http://localhost:3000')
const sitemap = crawler.generateSitemap()
const urls = crawler.getVisitedUrls()
```

## Robots.txt

The `public/robots.txt` file defines which bots are allowed to crawl the site:

- ✅ **Allowed**: Major search engines (Google, Bing, DuckDuckGo, etc.)
- ❌ **Blocked**: AI crawlers, LLM data collectors, generic scrapers

This aligns with the agent firewall configuration in `lib/firewall/`.

## Best Practices

1. **Respectful Crawling**: Always use appropriate delays between requests
2. **User-Agent**: Identify your crawler with a descriptive user-agent
3. **Depth Limits**: Set reasonable depth limits to avoid infinite loops
4. **Local Testing**: Test your crawler on local development servers first
5. **Rate Limiting**: Be aware of rate limits and adjust delays accordingly

## Examples

### Generate a Sitemap

```bash
npm run crawl http://localhost:3000 -- --output sitemap > public/sitemap.xml
```

### Check for Broken Links

```bash
npm run crawl https://yoursite.com -- --output urls | grep "✗"
```

### Quick Site Structure Check

```bash
npm run crawl http://localhost:3000 -- --max-depth 1 --output urls
```

## Integration with Agent Firewall

Note that the crawler respects the agent firewall rules defined in `lib/firewall/`. When crawling your own site:

- Use a user-agent that won't be blocked
- The default `Fresh535-Crawler/1.0` is safe for internal testing
- For production crawls, ensure your crawler is allowlisted if needed
