import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createBranch,
  createEmployee,
  deleteBranch,
  deleteEmployee,
  fetchAppointments,
  fetchBranches,
  fetchEmployees,
} from '../api/admin';

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [branches, setBranches] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [branchForm, setBranchForm] = useState({ name: '', address: '', city: '', phone: '', email: '', description: '' });
  const [employeeForm, setEmployeeForm] = useState({ name: '', title: '', specialty: '', bio: '', photo_url: '' });
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      setAppointments(await fetchAppointments());
      setBranches(await fetchBranches());
      setEmployees(await fetchEmployees());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('lawfirm_admin_token');
    navigate('/admin/login');
  };

  const handleBranchSubmit = async (event) => {
    event.preventDefault();
    try {
      await createBranch(branchForm);
      setBranchForm({ name: '', address: '', city: '', phone: '', email: '', description: '' });
      await loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmployeeSubmit = async (event) => {
    event.preventDefault();
    try {
      await createEmployee(employeeForm);
      setEmployeeForm({ name: '', title: '', specialty: '', bio: '', photo_url: '' });
      await loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleBranchDelete = async (branchId) => {
    await deleteBranch(branchId);
    await loadData();
  };

  const handleEmployeeDelete = async (employeeId) => {
    await deleteEmployee(employeeId);
    await loadData();
  };

  return (
    <section className="min-h-screen bg-brand px-6 py-10 text-slate-100 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">Admin Dashboard</h1>
            <p className="mt-2 text-slate-400">Manage appointments, branches, and employee records.</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-400"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6">
              <h2 className="text-xl font-semibold text-white">Upcoming Appointments</h2>
              <div className="mt-5 space-y-4">
                {appointments.length ? (
                  appointments.map((item) => (
                    <div key={item.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
                      <p className="font-semibold text-white">{item.full_name}</p>
                      <p className="text-slate-400">{item.email} • {item.phone}</p>
                      <p className="mt-2 text-slate-300">{item.date_time}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400">No appointments found.</p>
                )}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6">
                <h2 className="text-xl font-semibold text-white">Active branches</h2>
                <div className="mt-5 space-y-4">
                  {branches.length ? (
                    branches.map((branch) => (
                      <div key={branch.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold text-white">{branch.name}</p>
                            <p className="text-slate-400">{branch.city}</p>
                          </div>
                          <button
                            onClick={() => handleBranchDelete(branch.id)}
                            className="rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-rose-500"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-400">No branches created.</p>
                  )}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6">
                <h2 className="text-xl font-semibold text-white">Team members</h2>
                <div className="mt-5 space-y-4">
                  {employees.length ? (
                    employees.map((employee) => (
                      <div key={employee.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold text-white">{employee.name}</p>
                            <p className="text-slate-400">{employee.title}</p>
                          </div>
                          <button
                            onClick={() => handleEmployeeDelete(employee.id)}
                            className="rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-rose-500"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-400">No employees created.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <form onSubmit={handleBranchSubmit} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6">
              <h2 className="text-xl font-semibold text-white">Create branch</h2>
              <div className="mt-5 space-y-4">
                {['name', 'address', 'city', 'phone', 'email', 'description'].map((field) => (
                  <input
                    key={field}
                    name={field}
                    value={branchForm[field]}
                    onChange={(event) => setBranchForm((prev) => ({ ...prev, [field]: event.target.value }))}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full px-4 py-3"
                    {...(field === 'email' ? { type: 'email' } : {})}
                  />
                ))}
              </div>
              <button className="mt-4 w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90">
                Add branch
              </button>
            </form>

            <form onSubmit={handleEmployeeSubmit} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6">
              <h2 className="text-xl font-semibold text-white">Create employee</h2>
              <div className="mt-5 space-y-4">
                {['name', 'title', 'specialty', 'bio', 'photo_url'].map((field) => (
                  <input
                    key={field}
                    name={field}
                    value={employeeForm[field]}
                    onChange={(event) => setEmployeeForm((prev) => ({ ...prev, [field]: event.target.value }))}
                    placeholder={field.charAt(0).toUpperCase() + field.replace('_', ' ').slice(1)}
                    className="w-full px-4 py-3"
                  />
                ))}
              </div>
              <button className="mt-4 w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90">
                Add employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
