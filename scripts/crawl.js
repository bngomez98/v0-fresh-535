#!/usr/bin/env node

/**
 * Crawler CLI Script
 *
 * Run this script to crawl the website and generate reports.
 *
 * Usage:
 *   npm run crawl
 *   node scripts/crawl.js <url> [options]
 */

import { WebCrawler } from '../lib/crawler'

interface CliOptions {
  url?: string
  maxDepth?: number
  maxPages?: number
  output?: 'json' | 'sitemap' | 'urls'
  delay?: number
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2)
  const options: CliOptions = {}

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]

    if (arg.startsWith('http://') || arg.startsWith('https://')) {
      options.url = arg
    } else if (arg === '--max-depth' || arg === '-d') {
      options.maxDepth = parseInt(args[++i])
    } else if (arg === '--max-pages' || arg === '-p') {
      options.maxPages = parseInt(args[++i])
    } else if (arg === '--output' || arg === '-o') {
      const output = args[++i]
      if (output === 'json' || output === 'sitemap' || output === 'urls') {
        options.output = output
      }
    } else if (arg === '--delay') {
      options.delay = parseInt(args[++i])
    } else if (arg === '--help' || arg === '-h') {
      printHelp()
      process.exit(0)
    }
  }

  return options
}

function printHelp() {
  console.log(`
Fresh 535 Website Crawler
========================

Usage: node scripts/crawl.js <url> [options]

Options:
  --max-depth, -d <number>     Maximum crawl depth (default: 3)
  --max-pages, -p <number>     Maximum pages to crawl (default: 100)
  --output, -o <format>        Output format: json, sitemap, urls (default: json)
  --delay <ms>                 Delay between requests in ms (default: 1000)
  --help, -h                   Show this help message

Examples:
  node scripts/crawl.js http://localhost:3000
  node scripts/crawl.js http://localhost:3000 --max-depth 2 --output sitemap
  node scripts/crawl.js https://example.com -p 50 -o urls
`)
}

async function main() {
  const options = parseArgs()

  if (!options.url) {
    console.error('Error: URL is required')
    console.log('Run with --help for usage information')
    process.exit(1)
  }

  console.log(`Starting crawler for: ${options.url}`)
  console.log(`Max depth: ${options.maxDepth ?? 3}`)
  console.log(`Max pages: ${options.maxPages ?? 100}`)
  console.log(`Delay: ${options.delay ?? 1000}ms`)
  console.log('')

  const crawler = new WebCrawler({
    maxDepth: options.maxDepth,
    maxPages: options.maxPages,
    delay: options.delay,
    userAgent: 'Fresh535-Crawler/1.0 (Internal Testing)',
  })

  try {
    const results = await crawler.crawl(options.url)

    console.log(`\nCrawl completed!`)
    console.log(`Pages visited: ${results.length}`)
    console.log(`Successful: ${results.filter((r) => r.status === 200).length}`)
    console.log(`Errors: ${results.filter((r) => r.error || r.status !== 200).length}`)
    console.log('')

    // Output results based on format
    const outputFormat = options.output ?? 'json'

    if (outputFormat === 'json') {
      console.log(JSON.stringify(results, null, 2))
    } else if (outputFormat === 'sitemap') {
      console.log(crawler.generateSitemap())
    } else if (outputFormat === 'urls') {
      results.forEach((result) => {
        const status = result.status === 200 ? '✓' : '✗'
        console.log(`${status} [${result.status}] ${result.url}`)
      })
    }
  } catch (error) {
    console.error('Crawler error:', error)
    process.exit(1)
  }
}

main()
