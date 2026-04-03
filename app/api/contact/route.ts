import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for contact messages (will reset on server restart)
const messages: Array<{
  id: string
  name: string
  email: string
  subject: string
  category?: string
  message: string
  ip_address?: string
  user_agent?: string
  created_at: string
}> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, category, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create new contact message
    const contactMessage = {
      id: crypto.randomUUID(),
      name: name,
      email: email,
      subject: subject,
      category: category || undefined,
      message: message,
      ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
      user_agent: request.headers.get('user-agent') || undefined,
      created_at: new Date().toISOString(),
    }

    messages.push(contactMessage)

    console.log('New contact message saved:', {
      messageId: contactMessage.id,
      email,
      subject,
      timestamp: contactMessage.created_at,
    })

    return NextResponse.json(
      { message: 'Message sent successfully', messageId: contactMessage.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
