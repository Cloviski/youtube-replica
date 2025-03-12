import axios from 'axios';

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://xr6vvv2l-4000.brs.devtunnels.ms/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('Using API URL:', API_URL);

export default api;
