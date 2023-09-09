import axios from 'axios';

// Create an Axios instance
const httpClient = axios.create({
  baseURL: '', // Replace with your API base URL
});

httpClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export { httpClient };
