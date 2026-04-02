-- Create pledges table
CREATE TABLE IF NOT EXISTS pledges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  comments TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_pledges_email ON pledges(email);

-- Create index on state for analytics
CREATE INDEX IF NOT EXISTS idx_pledges_state ON pledges(state);

-- Create index on created_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_pledges_created_at ON pledges(created_at DESC);

-- Enable Row Level Security
ALTER TABLE pledges ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insertions (anyone can submit a pledge)
CREATE POLICY "Allow public pledge submissions"
  ON pledges
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow admins to view pledges
-- Note: You'll need to create an admin role or use service_role for reading
CREATE POLICY "Allow service role to read pledges"
  ON pledges
  FOR SELECT
  TO service_role
  USING (true);
