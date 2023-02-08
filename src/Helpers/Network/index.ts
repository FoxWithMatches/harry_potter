import axios from 'axios';

export const networkInstance = axios.create({
  baseURL: 'https://hp-api.onrender.com/api',
  timeout: 10000,
});
