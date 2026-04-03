export const dynamic = "force-dynamic"

import type React from "react"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Users, FileText } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="page-header">
            <h1>Contact Fresh 535</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with questions, feedback, media inquiries, or volunteer opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <ContactCard
                icon={<MessageSquare className="h-6 w-6 text-primary" />}
                title="General Inquiries"
                description="Questions about the movement, methodology, or how to get involved."
                contact="Use the contact form and select 'General' as your subject."
              />

              <ContactCard
                icon={<Mail className="h-6 w-6 text-primary" />}
                title="Media & Press"
                description="Interview requests, press inquiries, and media resources."
                contact="Use the contact form and select 'Media' as your subject. Include your outlet and deadline."
              />

              <ContactCard
                icon={<Users className="h-6 w-6 text-primary" />}
                title="Volunteer Opportunities"
                description="Help spread the message through social media, campus organizing, or content creation."
                contact="Use the contact form and select 'Volunteer' as your subject."
              />

              <ContactCard
                icon={<FileText className="h-6 w-6 text-primary" />}
                title="Data & Research"
                description="Questions about our methodology, data sources, or research findings."
                contact="Use the contact form and select 'Research' as your subject."
              />
            </div>
          </div>

          <div className="mt-16 bg-muted rounded-xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-primary mb-2">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  We aim to respond to all inquiries within 48 hours. Media requests receive priority during business
                  hours.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Privacy Policy</h4>
                <p className="text-muted-foreground text-sm">
                  We never sell or share personal information. Contact form data is used solely for responding to your
                  inquiry.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Volunteer Background</h4>
                <p className="text-muted-foreground text-sm">
                  No special skills required. We need help with social media, writing, research, and community outreach.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Speaking Requests</h4>
                <p className="text-muted-foreground text-sm">
                  We're available for campus talks, civic group presentations, and podcast interviews. Contact us with
                  details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactCard = ({
  icon,
  title,
  description,
  contact,
}: {
  icon: React.ReactNode
  title: string
  description: string
  contact: string
}) => (
  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
    <CardHeader>
      <CardTitle className="flex items-center gap-3">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-3 leading-relaxed">{description}</p>
      <p className="text-sm font-medium">{contact}</p>
    </CardContent>
  </Card>
)
