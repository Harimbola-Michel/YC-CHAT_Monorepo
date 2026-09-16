import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import ChatPage from '../pages/ChatPage'
import FriendsPage from '../pages/FriendsPage'
import NotFoundPage from '../pages/NotFoundPage'

/**
 * AppRoutes
 * Déclaration des routes de l'application.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}