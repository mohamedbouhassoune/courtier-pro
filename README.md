# Courtier Pro — Starter (Next.js + Prisma + Tailwind)

SaaS starter pour courtiers en assurance (MVP) : CRM, pipeline de prospects, échéances de contrats, automatisations (hooks), portail client simple et tableaux de bord basiques.

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind
- Prisma + PostgreSQL (Supabase ou Neon)
- (Placeholders) Postmark (emails) & Twilio (SMS)
- Stripe Billing (squelette, non activé par défaut)

## Démarrage
1) **Cloner & installer**  
```bash
pnpm i   # ou npm i / yarn
```

2) **Env**  
Copiez `.env.example` vers `.env` et renseignez `DATABASE_URL` (PostgreSQL).
```bash
cp .env.example .env
```

3) **Base de données**  
```bash
npx prisma db push
npx ts-node prisma/seed.ts  # (optionnel) données de démo
```

4) **Lancer**  
```bash
pnpm dev   # ou npm run dev / yarn dev
```

## Notes
- Auth non branchée par défaut (pour simplicité). Ajoutez Supabase Auth ou Clerk selon vos besoins.  
- Multi-tenant : champ `organizationId` sur chaque entité. Gérez l'isolement via votre middleware d'auth et RLS (si Supabase).
- Les routes `/api/*` exposent du CRUD simple (non sécurisé en dev). **Ajoutez votre auth avant prod.**
