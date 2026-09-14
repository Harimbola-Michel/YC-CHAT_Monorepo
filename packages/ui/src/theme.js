/**
 * theme
 * Palette de couleurs partagée entre toutes les apps du monorepo
 * (chat, admin, futures apps). Source unique de vérité pour les hex.
 * NB: pour que Tailwind génère les classes bg-[...]/text-[...] utilisant
 * ces valeurs, le fichier qui les utilise doit être scanné par Tailwind
 * (voir @source dans index.css de chaque app).
 */
export const theme = {
  navy: {
    950: '#00061f', // fond le plus sombre (rails, dashboard bg)
    900: '#050f3d', // sidebars
    800: '#081246', // surfaces principales
    700: '#10184f', // barres de saisie / inputs
    600: '#020a30', // bandeaux (peut sembler plus sombre visuellement)
  },
  accent: {
    fuchsia: '#f13544',
    fuchsiaHover: '#d81f2e',
  },
  status: {
    online: '#23a55a',
    idle: '#f0b232',
    dnd: '#f13544',
    offline: '#80848e',
  },
  text: {
    primary: '#ffffff',
    body: '#eef0fa',
    muted: '#b6bedd',
  },
}
