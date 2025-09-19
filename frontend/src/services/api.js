  import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
});

export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};

export const sendContactMessage = async (messageData) => {
  const response = await api.post('/contact', messageData);
  return response.data;
};
