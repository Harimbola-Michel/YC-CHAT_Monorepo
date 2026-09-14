import AdminSidebar from './AdminSidebar'
import Topbar from './Topbar'

/**
 * AdminLayout
 * Structure globale du back-office : sidebar + topbar + contenu de la page.
 */
export default function AdminLayout({ children }) {
  return (
    <div className="h-screen w-full flex overflow-hidden bg-[#00061f]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}