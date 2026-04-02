-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  category TEXT,
  message TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

-- Create index on category for filtering
CREATE INDEX IF NOT EXISTS idx_contact_messages_category ON contact_messages(category);

-- Create index on created_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insertions (anyone can submit a contact message)
CREATE POLICY "Allow public contact submissions"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow admins to view contact messages
-- Note: You'll need to create an admin role or use service_role for reading
CREATE POLICY "Allow service role to read messages"
  ON contact_messages
  FOR SELECT
  TO service_role
  USING (true);
