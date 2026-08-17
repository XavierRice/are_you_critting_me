create table if not exists public.npc_submissions (
  id uuid primary key default gen_random_uuid(),

  name text not null,
  species text not null,
  calling text not null,
  calling_type text not null
    check (calling_type in ('class', 'occupation')),
  background text not null,
  quirk text not null,

  status text not null default 'submitted'
    check (
      status in (
        'submitted',
      'approved',
      'used_in_episode',
      'rejected'
      )
    ),

  featured boolean not null default false,
  used_in_episode boolean not null default false,

  episode_reference text,
  source text not null default 'npc_generator',

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.npc_submissions
enable row level security;

revoke all on table public.npc_submissions
from anon, authenticated;