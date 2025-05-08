import axios from 'axios';

// "/api/campaign for proxy"
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // base URL for all your APIs
});

export default axiosInstance;