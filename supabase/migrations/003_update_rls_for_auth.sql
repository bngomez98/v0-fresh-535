-- Update RLS policies to allow authenticated users to read pledges and contact messages

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for public" ON pledges;
DROP POLICY IF EXISTS "Enable select for service_role" ON pledges;

-- Recreate policies for pledges
CREATE POLICY "Enable insert for public"
ON pledges FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users"
ON pledges FOR SELECT
TO authenticated
USING (true);

-- Drop existing policies for contact_messages
DROP POLICY IF EXISTS "Enable insert for public" ON contact_messages;
DROP POLICY IF EXISTS "Enable select for service_role" ON contact_messages;

-- Recreate policies for contact_messages
CREATE POLICY "Enable insert for public"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users"
ON contact_messages FOR SELECT
TO authenticated
USING (true);
