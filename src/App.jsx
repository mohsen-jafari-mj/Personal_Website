
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'

const ROUTES = [
  { path: '/', label: 'Home', title: 'Mohsen Jafari - Personal Website', element: <Home /> },
  { path: '/portfolio', label: 'Portfolio', title: 'Mohsen Jafari - Portfolio', element: <Portfolio /> }
]

export default function App() {{
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar routes={{ROUTES.filter(r => r.path !== '/')}} />
      <main className="flex-grow-1">
        <Routes>
          {{ROUTES.map(r => (
            <Route key={{r.path}} path={{r.path}} element={{r.element}} />
          ))}}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}}
