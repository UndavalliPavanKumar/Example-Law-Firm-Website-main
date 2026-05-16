import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Branches from './pages/Branches';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import Footer from './components/Footer';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Branches', path: '/branches' },
  { label: 'Contact', path: '/contact' },
  { label: 'Admin', path: '/admin/login' },
];

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand text-white">
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-brand/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div>
              <NavLink to="/" className="text-2xl font-semibold text-white">
                Aurelius Law
              </NavLink>
              <p className="text-sm text-slate-400">Trusted counsel for modern legal challenges</p>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm transition hover:text-accent ${isActive ? 'text-accent' : 'text-slate-300'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
