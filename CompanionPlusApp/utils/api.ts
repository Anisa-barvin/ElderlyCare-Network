/*
// utils/api.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.124.65:5000', // Your backend IP
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
*/
// utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // ✅ only one /api
});

export default api;