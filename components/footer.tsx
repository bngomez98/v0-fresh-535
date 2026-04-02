import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export function Footer() {
  const footerLinks = [
    {
      title: "The Movement",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/solution", label: "Our Solution" },
        { href: "/data", label: "The Data" },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { href: "/pledge", label: "Take the Pledge" },
        { href: "/donate", label: "Support Us" },
        { href: "/resources", label: "Resources" },
      ],
    },
    {
      title: "Learn More",
      links: [
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
        { href: "/methodology", label: "How It Works" },
      ],
    },
  ]

  return (
    <footer className="bg-brand-navy text-brand-cream">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2.5 mb-4 group">
              <Image src="/brand-logo.png" alt="Fresh 535 Logo" width={32} height={32} />
              <span className="text-xl font-semibold tracking-tight">FRESH 535</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              We're a movement to replace all 535 members of Congress. Every incumbent must go so we can rebuild a
              government that actually works for regular people, not just special interests.
            </p>
            <Button asChild variant="secondary" size="sm" className="btn-professional">
              <Link href="/pledge">Join Us</Link>
            </Button>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-2">
          <p>&copy; {new Date().getFullYear()} Fresh 535. All rights reserved.</p>
          <p>A grassroots movement to make Congress work again.</p>
        </div>
      </div>
    </footer>
  )
}
