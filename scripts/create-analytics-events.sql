CREATE TABLE IF NOT EXISTS analytics_events (
  id          TEXT PRIMARY KEY NOT NULL,
  event       TEXT NOT NULL,
  path        TEXT,
  referrer    TEXT,
  user_agent  TEXT,
  ip_address  TEXT,
  created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
