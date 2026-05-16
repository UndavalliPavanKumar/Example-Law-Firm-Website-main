import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../api/admin';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const data = await adminLogin({ username: email, password });
      localStorage.setItem('lawfirm_admin_token', data.access_token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Login failed. Check your credentials and try again.');
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-brand px-6 py-12">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-glowing">
        <h1 className="text-3xl font-semibold text-white">Admin login</h1>
        <p className="mt-2 text-slate-400">Access branch, team, and appointment management.</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              className="w-full px-4 py-3"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input
              className="w-full px-4 py-3"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          {error && <p className="text-sm text-rose-400">{error}</p>}
          <button className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;
