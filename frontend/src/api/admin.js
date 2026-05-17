import api from './axios';

const authConfig = () => {
  const accessToken = localStorage.getItem('lawfirm_admin_token');
  return {
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  };
};

export const adminLogin = async (data) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const fetchAppointments = async () => {
  const response = await api.get('/admin/appointments', authConfig());
  return response.data;
};

export const fetchBranches = async () => {
  const response = await api.get('/branches');
  return response.data;
};

export const createBranch = async (data) => {
  const response = await api.post('/admin/branches', data, authConfig());
  return response.data;
};

export const deleteBranch = async (branchId) => {
  await api.delete(`/admin/branches/${branchId}`, authConfig());
};

export const fetchEmployees = async () => {
  const response = await api.get('/employees');
  return response.data;
};

export const createEmployee = async (data) => {
  const response = await api.post('/admin/employees', data, authConfig());
  return response.data;
};

export const deleteEmployee = async (employeeId) => {
  await api.delete(`/admin/employees/${employeeId}`, authConfig());
};
