# MBTI Personlighedstest

En hurtig og sjov MBTI personlighedstest til unge spejdere (14-16 år).

## Features

- 12 nemme spørgsmål der tager 2-3 minutter at besvare
- Interaktiv progressbar
- Alle 16 MBTI personlighedstyper
- Mobilvenligt design
- Mulighed for at dele resultat

## Teknologier

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn/ui komponenter

## Installation

```bash
npm install
```

## Kør lokalt

```bash
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000) i din browser.

## Build til produktion

```bash
npm run build
npm start
```

## Deploy på Dokploy

Projektet er konfigureret til at bruge Nixpacks og deployer automatisk på Dokploy:

1. Push koden til GitHub (se nedenfor)
2. Log ind på din Dokploy instans
3. Opret et nyt projekt:
   - Vælg dit GitHub repository
   - Dokploy vil automatisk detektere Next.js projektet
   - Nixpacks konfigurationen (`nixpacks.toml`) sikrer korrekt build
4. Tryk "Deploy"
5. Din app er nu live!

### Nixpacks Konfiguration

Projektet inkluderer en `nixpacks.toml` fil der automatisk:
- Installerer Node.js 20
- Kører `npm ci` for at installere dependencies
- Bygger projektet med `npm run build`
- Starter produktionsserveren med `npm start`

## Licens

MIT
