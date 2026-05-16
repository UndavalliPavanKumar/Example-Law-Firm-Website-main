import { useEffect, useState } from 'react';
import api from '../api/axios';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    branch_id: '',
    date_time: '',
    message: '',
  });
  const [branches, setBranches] = useState([]);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    api
      .get('/branches')
      .then((response) => setBranches(response.data))
      .catch(() => setBranches([]));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending your appointment request...');
    setStatusType('info');

    try {
      const payload = {
        ...formData,
        branch_id: formData.branch_id ? Number(formData.branch_id) : undefined,
      };

      await api.post('/appointments', payload);
      setStatus('Your appointment request has been submitted. We will contact you shortly.');
      setStatusType('success');
      setFormData({ full_name: '', email: '', phone: '', branch_id: '', date_time: '', message: '' });
    } catch (error) {
      setStatus('Something went wrong while placing your appointment. Please try again.');
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glowing">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full px-4 py-3"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-4 py-3"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="w-full px-4 py-3"
        />
        <input
          name="date_time"
          type="datetime-local"
          value={formData.date_time}
          onChange={handleChange}
          required
          className="w-full px-4 py-3"
        />
      </div>

      {branches.length > 0 ? (
        <select
          name="branch_id"
          value={formData.branch_id}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200"
        >
          <option value="">Choose branch (optional)</option>
          {branches.map((branch) => (
            <option key={branch.id} value={branch.id}>
              {branch.name} — {branch.city}
            </option>
          ))}
        </select>
      ) : (
        <input
          name="branch_id"
          value={formData.branch_id}
          onChange={handleChange}
          placeholder="Branch ID (optional)"
          className="w-full px-4 py-3"
        />
      )}

      <textarea
        name="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us more"
        className="w-full px-4 py-3"
      ></textarea>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Placing appointment...' : 'Place appointment'}
      </button>

      {status && (
        <p className={`text-sm ${statusType === 'success' ? 'text-emerald-400' : statusType === 'error' ? 'text-rose-400' : 'text-slate-300'}`} aria-live="polite">
          {status}
        </p>
      )}
    </form>
  );
}

export default AppointmentForm;
