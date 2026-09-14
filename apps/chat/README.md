# chat-frontend

Architecture de base (React + Vite + Tailwind CSS v4) pour le frontend d'une application de chat en temps réel.

⚠️ Ce projet ne contient **aucune logique métier** — uniquement la structure des dossiers, des composants "coquilles" et le câblage entre eux (providers, routes). Tout est à implémenter.

## Installation

\`\`\`bash
npm install
npm run dev
\`\`\`

## Structure

\`\`\`
src/
├── components/
│   ├── chat/         # ChatWindow, MessageList, MessageItem, MessageInput,
│   │                 # ChatSidebar, ConversationItem, ChatHeader, TypingIndicator
│   ├── layout/        # AppLayout, Navbar
│   └── ui/            # Avatar, Button, Badge, Spinner (composants génériques)
├── context/           # AuthContext, SocketContext, ChatContext
├── hooks/             # useAuth, useSocket, useChat
├── services/          # api.service, auth.service, socket.service, message.service
├── pages/             # LoginPage, ChatPage, NotFoundPage
├── routes/            # AppRoutes (react-router-dom)
├── store/             # emplacement réservé (Zustand/Redux si besoin)
├── constants/         # URLs, évènements socket
├── utils/             # classNames, formatDate
├── App.jsx            # assemblage des providers + layout + routes
└── main.jsx           # point d'entrée
\`\`\`

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- React Router v7

## Prochaines étapes suggérées

1. Implémenter `socket.service.js` (ex: socket.io-client) et brancher `useSocket`.
2. Implémenter `auth.service.js` et `AuthContext`.
3. Implémenter `message.service.js` et la logique de `ChatContext` / `useChat`.
4. Remplir les composants UI avec le contenu réel.
