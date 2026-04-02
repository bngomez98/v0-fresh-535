/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/analysis",
        destination: "/problem",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/analysis",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ]
  },
}

export default nextConfig
