import { BrowserRouter } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import AppRoutes from './routes/AppRoutes'

/**
 * App
 * Point d'assemblage du back-office admin.
 */
function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <AppRoutes />
      </AdminLayout>
    </BrowserRouter>
  )
}

export default App