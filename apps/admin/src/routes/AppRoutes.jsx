import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageLoader from '../components/layout/PageLoader'

/**
 * AppRoutes
 * Déclaration des routes du back-office admin.
 * Chaque page est chargée en lazy (React.lazy) : elle n'est téléchargée
 * que lorsque l'utilisateur navigue dessus. Utile ici surtout pour
 * DashboardPage, qui embarque recharts (~500 kB) — les autres pages
 * (Utilisateurs, Canaux...) n'ont pas à en payer le coût au chargement initial.
 */
const DashboardPage = lazy(() => import('../pages/DashboardPage'))
const UsersPage = lazy(() => import('../pages/UsersPage'))
const ChannelsPage = lazy(() => import('../pages/ChannelsPage'))
const ModerationPage = lazy(() => import('../pages/ModerationPage'))
const SettingsPage = lazy(() => import('../pages/SettingsPage'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/channels" element={<ChannelsPage />} />
        <Route path="/moderation" element={<ModerationPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Suspense>
  )
}