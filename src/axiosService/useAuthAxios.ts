// hooks/useAuthAxios.ts
import { useEffect } from 'react';

import { useAuth } from '../context/useAuth';
import axiosInstance from './axiosInstance';
import { jwtDecode } from 'jwt-decode';
import { authService } from '../service/authService';

interface JwtPayload {
    exp: number;
}

export const useAuthAxios = () => {
    const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useAuth();

    useEffect(() => {
        const interceptor = axiosInstance.interceptors.request.use(async (config) => {
            if (accessToken) {
                const decoded: JwtPayload = jwtDecode(accessToken);
                const isExpired = decoded.exp * 1000 < Date.now();


                if (isExpired && refreshToken) {
                    try {
                        const response = await authService.refresh({refreshToken})

                        const newAccessToken = response.accessToken

                        setAccessToken(newAccessToken);
                        setRefreshToken(response.refreshToken)
                        config.headers.Authorization = `Bearer ${newAccessToken}`;
                    } catch (error) {
                        console.error('Failed to refresh token', error);
                    }
                }

                config.headers.Authorization = `Bearer ${accessToken}`;

            }
            return config;
        });

        return () => {
            axiosInstance.interceptors.request.eject(interceptor);
        };
    }, [accessToken, refreshToken, setAccessToken, setRefreshToken]);

    return axiosInstance;
};
