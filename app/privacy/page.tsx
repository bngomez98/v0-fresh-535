import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Fresh 535",
  description: "Privacy policy for Fresh 535, a non-partisan civic movement for congressional accountability.",
}

export default function PrivacyPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="page-header">
            <h1>Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-slate-700 mb-4">
                Fresh 535 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you visit our website fresh535.org and use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="text-slate-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                <li>Take the Fresh 535 pledge</li>
                <li>Make a donation or contribution</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Contact us through our contact form</li>
                <li>Participate in surveys or quizzes</li>
              </ul>
              <p className="text-slate-700 mb-4">
                This information may include your name, email address, zip code, and any other information you choose to
                provide.
              </p>

              <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
              <p className="text-slate-700 mb-4">
                We automatically collect certain information when you visit our website, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                <li>Log data (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent on pages, links clicked)</li>
                <li>Device information</li>
                <li>Analytics data through Google Analytics and Vercel Analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-slate-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                <li>Process your pledges, donations, and requests</li>
                <li>Send you updates about the Fresh 535 movement</li>
                <li>Communicate with you about events, campaigns, and opportunities to get involved</li>
                <li>Improve our website and services</li>
                <li>Analyze website usage and trends</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
              <p className="text-slate-700 mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                <li>
                  <strong>Service Providers:</strong> We may share information with third-party service providers who
                  assist us in operating our website and services (e.g., email services, analytics providers, payment
                  processors)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid
                  legal requests
                </li>
                <li>
                  <strong>Protection of Rights:</strong> We may disclose information to protect our rights, privacy, safety,
                  or property, and that of our users or the public
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-slate-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
              </p>
              <p className="text-slate-700 mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
                you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Analytics</h2>
              <p className="text-slate-700 mb-4">
                We use third-party analytics services, including Google Analytics and Vercel Analytics, to help us
                understand how users interact with our website. These services may collect information about your use of our
                website and other websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-slate-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information. However, no method of transmission over the Internet or electronic storage is 100% secure, and
                we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
              <p className="text-slate-700 mb-4">You have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                <li>
                  <strong>Access:</strong> You can request access to the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> You can request that we correct inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> You can request that we delete your personal information
                </li>
                <li>
                  <strong>Opt-Out:</strong> You can opt out of receiving marketing communications by following the
                  unsubscribe instructions in our emails
                </li>
              </ul>
              <p className="text-slate-700 mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
              <p className="text-slate-700 mb-4">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe we have collected
                information from a child under 13, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-slate-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-slate-700 mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none mb-4 text-slate-700 space-y-2">
                <li>
                  By visiting our{" "}
                  <a href="/contact" className="text-brand-navy underline-offset-4 hover:underline">
                    contact page
                  </a>
                </li>
                <li>By email (if provided on our contact page)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
