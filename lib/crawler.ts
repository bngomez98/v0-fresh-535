/**
 * Web Crawler Utility
 *
 * A utility for crawling the Fresh 535 website to discover pages,
 * validate links, and generate sitemaps.
 */

export interface CrawlResult {
  url: string
  status: number
  title?: string
  links: string[]
  error?: string
}

export interface CrawlerOptions {
  maxDepth?: number
  maxPages?: number
  allowedDomains?: string[]
  userAgent?: string
  delay?: number
}

export class WebCrawler {
  private visited = new Set<string>()
  private queue: Array<{ url: string; depth: number }> = []
  private results: CrawlResult[] = []
  private options: Required<CrawlerOptions>

  constructor(options: CrawlerOptions = {}) {
    this.options = {
      maxDepth: options.maxDepth ?? 3,
      maxPages: options.maxPages ?? 100,
      allowedDomains: options.allowedDomains ?? [],
      userAgent: options.userAgent ?? 'Fresh535-Crawler/1.0',
      delay: options.delay ?? 1000,
    }
  }

  /**
   * Start crawling from a seed URL
   */
  async crawl(seedUrl: string): Promise<CrawlResult[]> {
    this.visited.clear()
    this.queue = [{ url: seedUrl, depth: 0 }]
    this.results = []

    while (this.queue.length > 0 && this.visited.size < this.options.maxPages) {
      const item = this.queue.shift()
      if (!item) break

      const { url, depth } = item

      // Skip if already visited or depth exceeded
      if (this.visited.has(url) || depth > this.options.maxDepth) {
        continue
      }

      this.visited.add(url)

      try {
        const result = await this.crawlPage(url)
        this.results.push(result)

        // Add discovered links to queue if within depth limit
        if (depth < this.options.maxDepth) {
          for (const link of result.links) {
            if (!this.visited.has(link) && this.isAllowedUrl(link)) {
              this.queue.push({ url: link, depth: depth + 1 })
            }
          }
        }

        // Respectful delay between requests
        if (this.options.delay > 0) {
          await this.sleep(this.options.delay)
        }
      } catch (error) {
        this.results.push({
          url,
          status: 0,
          links: [],
          error: error instanceof Error ? error.message : 'Unknown error',
        })
      }
    }

    return this.results
  }

  /**
   * Crawl a single page
   */
  private async crawlPage(url: string): Promise<CrawlResult> {
    const response = await fetch(url, {
      headers: {
        'User-Agent': this.options.userAgent,
      },
    })

    const html = await response.text()
    const links = this.extractLinks(html, url)
    const title = this.extractTitle(html)

    return {
      url,
      status: response.status,
      title,
      links,
    }
  }

  /**
   * Extract links from HTML
   */
  private extractLinks(html: string, baseUrl: string): string[] {
    const links: string[] = []
    const linkRegex = /<a[^>]+href=["']([^"']+)["']/gi
    let match

    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1]
      try {
        const absoluteUrl = new URL(href, baseUrl).href
        links.push(absoluteUrl)
      } catch {
        // Skip invalid URLs
      }
    }

    return [...new Set(links)] // Remove duplicates
  }

  /**
   * Extract page title from HTML
   */
  private extractTitle(html: string): string | undefined {
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    return titleMatch ? titleMatch[1].trim() : undefined
  }

  /**
   * Check if URL is allowed based on domain restrictions
   */
  private isAllowedUrl(url: string): boolean {
    if (this.options.allowedDomains.length === 0) {
      return true
    }

    try {
      const urlObj = new URL(url)
      return this.options.allowedDomains.some((domain) =>
        urlObj.hostname.endsWith(domain)
      )
    } catch {
      return false
    }
  }

  /**
   * Sleep for specified milliseconds
   */
  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  /**
   * Get all crawled results
   */
  getResults(): CrawlResult[] {
    return this.results
  }

  /**
   * Get all visited URLs
   */
  getVisitedUrls(): string[] {
    return Array.from(this.visited)
  }

  /**
   * Generate a simple sitemap from crawl results
   */
  generateSitemap(): string {
    const urls = this.results
      .filter((result) => result.status === 200)
      .map((result) => result.url)

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`
  }
}

/**
 * Simple function to crawl a website and return results
 */
export async function crawlWebsite(
  seedUrl: string,
  options?: CrawlerOptions
): Promise<CrawlResult[]> {
  const crawler = new WebCrawler(options)
  return await crawler.crawl(seedUrl)
}
