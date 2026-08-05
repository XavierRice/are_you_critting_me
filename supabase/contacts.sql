create extension if not exists pgcrypto;

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 254),
  subject text check (subject is null or char_length(subject) <= 150),
  message text not null check (char_length(message) between 10 and 5000),
  contact_type text not null default 'general' check (contact_type in ('general','booking','partnership','sponsorship','press','technical')),
  marketing_consent boolean not null default false,
  source text not null default 'website_contact',
  status text not null default 'new' check (status in ('new','reviewed','replied','qualified','archived')),
  organization_name text,
  lead_stage text,
  estimated_value numeric(12, 2),
  next_follow_up_at timestamptz,
  internal_notes text,
  referrer text,
  user_agent text,
  ip_address inet,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists contacts_created_at_idx on public.contacts (created_at desc);
create index if not exists contacts_status_idx on public.contacts (status);
create index if not exists contacts_contact_type_idx on public.contacts (contact_type);
create index if not exists contacts_email_idx on public.contacts (lower(email));

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists contacts_set_updated_at on public.contacts;
create trigger contacts_set_updated_at before update on public.contacts for each row execute function public.set_updated_at();

alter table public.contacts enable row level security;
revoke all on table public.contacts from anon, authenticated;
grant select, insert, update, delete on table public.contacts to service_role;
