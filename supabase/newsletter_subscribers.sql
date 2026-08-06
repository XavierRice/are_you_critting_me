create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),

  name text
    check (name is null or char_length(name) <= 100),

  email text not null
    check (char_length(email) between 3 and 254),

  status text not null default 'subscribed'
    check (status in ('subscribed', 'unsubscribed', 'bounced')),

  source text not null default 'watch_and_support',

  marketing_consent boolean not null default true,
  consented_at timestamptz not null default now(),
  unsubscribed_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists newsletter_subscribers_email_idx
  on public.newsletter_subscribers (email);

create or replace function public.set_newsletter_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists newsletter_subscribers_set_updated_at
  on public.newsletter_subscribers;

create trigger newsletter_subscribers_set_updated_at
before update on public.newsletter_subscribers
for each row
execute function public.set_newsletter_updated_at();

alter table public.newsletter_subscribers enable row level security;

revoke all on table public.newsletter_subscribers
from anon, authenticated;

grant select, insert, update, delete
on table public.newsletter_subscribers
to service_role;