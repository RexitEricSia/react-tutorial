// hooks/useAuthAxios.ts
import { useEffect } from 'react';

import { useAuth } from '../context/useAuth';
import axiosInstance from './axiosInstance';

export const useAuthAxios = () => {
  const { accessToken } = useAuth();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.request.use((config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    return () => {
      axiosInstance.interceptors.request.eject(interceptor);
    };
  }, [accessToken]);

  return axiosInstance;
};
