import axios from 'axios';

// "/api/campaign for proxy"
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // base URL for all your APIs
});

export default axiosInstance;