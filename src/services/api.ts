import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
    // present loading
  return config;
});
api.interceptors.response.use((config) => {
    // dismiss loading
  return config;
});

export default api;
