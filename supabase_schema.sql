-- ================================================
-- NOVA-RP - Supabase SQL Schema
-- Copiez tout ce contenu dans l'éditeur SQL de Supabase
-- ================================================

-- 1. Création de la table 'ads' (Annonces)
create table if not exists ads (
  id bigint primary key generated always as identity,
  created_at timestamptz default now(),
  title text not null,
  description text,
  price integer default 0,
  negotiable boolean default false,
  category text not null,
  seller text not null,
  image text, -- URL de l'image ou Base64
  brand text, -- Pour les véhicules
  model text, -- Pour les véhicules
  mileage text, -- Pour les véhicules
  comments jsonb default '[]'::jsonb -- On stocke les commentaires en JSON
);

-- 2. Activer la sécurité (RLS)
alter table ads enable row level security;

-- 3. Créer des politiques (Policies) pour autoriser l'accès public
-- (Comme il n'y a pas de système de compte utilisateur sécurisé pour l'instant,
-- on ouvre l'accès en lecture et écriture à tout le monde ("anon").)

-- Autoriser la lecture pour tout le monde
create policy "Public Read Access"
on ads for select
to anon
using (true);

-- Autoriser l'ajout d'annonces pour tout le monde
create policy "Public Insert Access"
on ads for insert
to anon
with check (true);

-- Autoriser la modification (pour les commentaires)
create policy "Public Update Access"
on ads for update
to anon
using (true);

-- 4. Insérer quelques données d'exemple (Optionnel)
insert into ads (title, description, price, category, seller, created_at, comments)
values
('Vapid Dominator GTX', 'Véhicule sportif, full custom. Prix à débattre.', 185000, 'vehicules', 'SpeedDemon', now(), '[{"author": "TestUser", "text": "Toujours dispo ?", "date": "2026-01-14"}]'::jsonb),
('Appartement Vinewood', 'Vue magnifique sur la ville. 2 chambres.', 750000, 'immobilier', 'RealEstateKing', now() - interval '1 day', '[]'::jsonb);
