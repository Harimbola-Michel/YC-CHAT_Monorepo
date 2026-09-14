# Monorepo Youth Computing

Structure pnpm workspaces :

```
apps/
  chat/     -> app de chat (chat.votredomaine.com)
  admin/    -> back-office admin (admin.votredomaine.com)
packages/
  ui/       -> composants et design tokens partagés (@yc/ui)
```

## Installation

```bash
pnpm install
```

## Développement

```bash
pnpm dev:chat    # http://localhost:5173
pnpm dev:admin   # http://localhost:5174
```

## Build

```bash
pnpm build:chat
pnpm build:admin
# ou les deux :
pnpm build
```

## Déploiement en sous-domaine séparé

Chaque app (`apps/chat`, `apps/admin`) produit un `dist/` indépendant.
Déployez-les comme deux sites statiques distincts (Vercel/Netlify: un projet
par app, en pointant "Root Directory" sur `apps/chat` ou `apps/admin`), puis
configurez le DNS :

- `chat.votredomaine.com`  -> déploiement de `apps/chat`
- `admin.votredomaine.com` -> déploiement de `apps/admin`

## Package partagé @yc/ui

Contient les composants UI communs (ex: `Button`) et la palette de couleurs
(`theme.js`, navy `#010b40`-ish / fuchsia `#f13544`). Toute app qui l'utilise
doit inclure son dossier `src` dans le scan Tailwind (voir `@source` dans
`index.css` de `apps/admin`).

Pour utiliser un composant partagé dans une app :
```jsx
import { Button, theme } from '@yc/ui'
```
