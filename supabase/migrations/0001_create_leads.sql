create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  business_name text,
  email text not null,
  phone text,
  website text,
  social_handle text,
  services text[] not null default '{}',
  goals text[] not null default '{}',
  budget text,
  project_date text,
  message text,
  source text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  landing_page text,
  status text not null default 'new' check (status in ('new', 'contacted', 'booked', 'closed')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_status_idx on leads (status);
create index if not exists leads_created_at_idx on leads (created_at desc);
