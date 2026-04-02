import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Fresh 535",
  description: "Terms of service for Fresh 535, a non-partisan civic movement for congressional accountability.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto container-padding py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-slate-700 mb-4">
              By accessing or using the Fresh 535 website (fresh535.org), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">About Fresh 535</h2>
            <p className="text-slate-700 mb-4">
              Fresh 535 is a non-partisan civic movement dedicated to restoring functional governance by replacing all 535 members of Congress with new, uncaptured representatives. We are a grassroots organization focused on political reform and congressional accountability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use of Website</h2>
            <h3 className="text-xl font-semibold mb-3">Permitted Use</h3>
            <p className="text-slate-700 mb-4">
              You may use our website for lawful purposes related to learning about the Fresh 535 movement, taking the pledge, making contributions, and engaging with our content.
            </p>

            <h3 className="text-xl font-semibold mb-3">Prohibited Activities</h3>
            <p className="text-slate-700 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Use the website in any way that violates any applicable federal, state, local, or international law</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              <li>Use any automated system, including "robots," "spiders," or "scrapers," to access the website without our prior written consent</li>
              <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from our servers</li>
              <li>Upload or transmit viruses, malware, or any other malicious code</li>
              <li>Collect or harvest any personally identifiable information from the website</li>
              <li>Impersonate or attempt to impersonate Fresh 535, a Fresh 535 employee, another user, or any other person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pledges and Commitments</h2>
            <p className="text-slate-700 mb-4">
              When you take the Fresh 535 pledge, you are making a non-binding personal commitment to vote against all incumbent members of Congress in future elections. This pledge is:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>A personal declaration of your voting intentions</li>
              <li>Non-binding and voluntary</li>
              <li>Not a contract or legal obligation</li>
              <li>Subject to your own judgment and discretion at the time of voting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contributions and Donations</h2>
            <p className="text-slate-700 mb-4">
              Any contributions or donations made through our website are:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Voluntary and made at your own discretion</li>
              <li>Used to support the Fresh 535 movement and related activities</li>
              <li>Generally non-refundable, except as required by law</li>
              <li>Subject to applicable campaign finance and tax laws</li>
            </ul>
            <p className="text-slate-700 mb-4">
              Please consult with your tax advisor regarding the tax treatment of any contributions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            <p className="text-slate-700 mb-4">
              Unless otherwise indicated, the website and all content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Fresh 535 and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-slate-700 mb-4">
              You may share and promote Fresh 535 content for the purpose of advancing the movement's goals, provided you give appropriate credit and do not suggest endorsement by Fresh 535 of you or your use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User-Generated Content</h2>
            <p className="text-slate-700 mb-4">
              If you submit any content to our website (such as comments, feedback, or testimonials), you grant Fresh 535 a non-exclusive, worldwide, royalty-free, perpetual license to use, reproduce, modify, and distribute such content for the purpose of promoting the Fresh 535 movement.
            </p>
            <p className="text-slate-700 mb-4">
              You represent and warrant that you own or control all rights to the content you submit and that such content does not violate these Terms of Service or any applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links and Services</h2>
            <p className="text-slate-700 mb-4">
              Our website may contain links to third-party websites or services that are not owned or controlled by Fresh 535. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimers</h2>
            <h3 className="text-xl font-semibold mb-3">Website "As Is"</h3>
            <p className="text-slate-700 mb-4">
              The website is provided on an "as is" and "as available" basis. Fresh 535 makes no warranties, expressed or implied, and hereby disclaims all warranties, including without limitation, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h3 className="text-xl font-semibold mb-3">No Political Advice</h3>
            <p className="text-slate-700 mb-4">
              Fresh 535 provides information and resources about our movement and political reform. We do not provide legal, tax, or professional political advice. You should consult appropriate professionals for specific advice tailored to your situation.
            </p>

            <h3 className="text-xl font-semibold mb-3">Accuracy of Information</h3>
            <p className="text-slate-700 mb-4">
              While we strive to provide accurate and up-to-date information, we make no guarantees about the completeness, reliability, or accuracy of the information on our website. Any reliance you place on such information is strictly at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-slate-700 mb-4">
              To the fullest extent permitted by applicable law, Fresh 535 shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Your access to or use of or inability to access or use the website</li>
              <li>Any conduct or content of any third party on the website</li>
              <li>Any content obtained from the website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="text-slate-700 mb-4">
              You agree to defend, indemnify, and hold harmless Fresh 535 and its officers, directors, employees, volunteers, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law and Jurisdiction</h2>
            <p className="text-slate-700 mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms of Service will be brought exclusively in the federal or state courts located in the United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-slate-700 mb-4">
              We reserve the right to modify or replace these Terms of Service at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-slate-700 mb-4">
              By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Severability</h2>
            <p className="text-slate-700 mb-4">
              If any provision of these Terms of Service is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Waiver</h2>
            <p className="text-slate-700 mb-4">
              No waiver by Fresh 535 of any term or condition set forth in these Terms of Service shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none mb-4 text-slate-700 space-y-2">
              <li>By visiting our <a href="/contact" className="text-brand-teal hover:underline">contact page</a></li>
              <li>By email (if provided on our contact page)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
