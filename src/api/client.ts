import axios from 'axios';
import { useAuthStore } from 'src/store/authStore';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
});

apiClient.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { refreshToken, setTokens, setLoggedOutState } =
      useAuthStore.getState();

    // If the error is from the refresh endpoint itself, logout immediately
    if (originalRequest.url.includes('/auth/refresh')) {
      setLoggedOutState();
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await apiClient.post('/auth/refresh', { refreshToken });
        // Save new tokens
        setTokens(res.data.accessToken, res.data.refreshToken);
        // Retry original request with new accessToken
        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        setLoggedOutState();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
