import { useState } from 'react';
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
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    try {
      await api.post('/appointments', formData);
      setStatus('Your appointment request has been submitted.');
      setFormData({ full_name: '', email: '', phone: '', branch_id: '', date_time: '', message: '' });
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glowing">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" required className="w-full px-4 py-3" />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-3" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full px-4 py-3" />
        <input name="date_time" value={formData.date_time} onChange={handleChange} placeholder="Preferred date/time" required className="w-full px-4 py-3" />
      </div>
      <input name="branch_id" value={formData.branch_id} onChange={handleChange} placeholder="Branch ID (optional)" className="w-full px-4 py-3" />
      <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us more" className="w-full px-4 py-3"></textarea>
      <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90">
        Request booking
      </button>
      {status && <p className="text-sm text-slate-300">{status}</p>}
    </form>
  );
}

export default AppointmentForm;
