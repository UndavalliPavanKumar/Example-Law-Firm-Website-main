import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Branches from './pages/Branches';
import Booking from './pages/Booking';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Branches', path: '/branches' },
  { label: 'Book', path: '/book' },
  { label: 'Contact', path: '/contact' },
  { label: 'Admin', path: '/admin/login' },
];

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand text-white">
        <header className="sticky top-0 z-50 glass">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <NavLink to="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gold-gradient font-serif text-xl font-bold text-slate-950">
                A
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                  KVR Legal Services
                </span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  Trusted Legal Counsel
                </span>
              </div>
            </NavLink>
            <nav className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-xs font-medium uppercase tracking-widest transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-slate-300'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-2 left-0 h-[2px] w-full bg-accent"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              <a href="/book" className="gold-gradient rounded-full px-6 py-2 text-xs font-bold text-slate-950 transition hover:scale-105">
                Book Session
              </a>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/book" element={<Booking />} />
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
