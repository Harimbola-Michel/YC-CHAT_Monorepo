import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { SocketProvider } from './context/SocketContext'
import { ChatProvider } from './context/ChatContext'
import AppRoutes from './routes/AppRoutes'

/**
 * App
 * Point d'assemblage : providers globaux + routes.
 * NB: le layout (Navbar) est appliqué page par page (ex: ChatPage),
 * pas ici, pour que des pages comme LoginPage restent plein écran.
 */
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SocketProvider>
          <ChatProvider>
            <AppRoutes />
          </ChatProvider>
        </SocketProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
