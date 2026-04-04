export const dynamic = "force-dynamic"

import { ResourceCard, type Resource } from "@/components/resource-card"

const resources: Resource[] = [
  {
    title: "Printable Flyer",
    description: "A clear, one-page summary of the Fresh 535 movement—perfect for community bulletin boards, town halls, and door-to-door outreach.",
    previewUrl: "/fresh-printable-flyer.png",
    link: "/resources/flyer",
    type: "Printable",
  },
  {
    title: "Data Packet Summary",
    description: "A print-ready summary of the key data, charts, and analysis behind Fresh 535—ideal for persuading skeptical friends and neighbors.",
    previewUrl: "/pledge-cards.png",
    link: "/resources/data-packet",
    type: "Printable",
  },
  {
    title: "Primary Logo Pack",
    description: "Official Fresh 535 logos in PNG and SVG formats, optimized for both light and dark backgrounds.",
    previewUrl: "/brand-logo.png",
    link: "/fresh-535-logo.png",
    type: "Digital Asset",
  },
  {
    title: "'I Pledged' Profile Badge",
    description: "Show your support publicly. Add this badge to your social media profile picture to signal your commitment to a Fresh Congress.",
    previewUrl: "/fresh-535-pledged-badge.png",
    link: "/fresh-535-pledged-badge.png",
    type: "Social Media",
  },
  {
    title: "Accountability Deficit Graphic",
    description: "A bold, shareable graphic for Instagram and Facebook highlighting the core data: 18% approval, 95% reelection, and what it means.",
    previewUrl: "/accountability-deficit-graphic.png",
    link: "/accountability-deficit-graphic.png",
    type: "Social Media",
  },
  {
    title: "Twitter / X Header",
    description: "A professionally designed header image optimized for your Twitter / X profile—show your support every time someone visits your page.",
    previewUrl: "/fresh-535-twitter-header.png",
    link: "/fresh-535-twitter-header.png",
    type: "Social Media",
  },
]

export default function ResourcesPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl mb-4">Movement Resources</h1>
          <p className="text-lg text-slate-600">
            Download and share official assets to spread the Fresh 535 message in your community, at your door,
            and across social media.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  )
}
