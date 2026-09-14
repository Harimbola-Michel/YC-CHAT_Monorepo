import Navbar from './Navbar'

/**
 * AppLayout
 * Structure globale de l'application (navbar + contenu des pages).
 */
export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">{children}</div>
    </div>
  )
}
