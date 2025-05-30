import { RefreshRequestDTO } from './../model/RefreshRequestDTO';
import axios, { AxiosError } from "axios";
import { LoginRequestDTO } from "../model/LoginRequestDTO";
import { LoginResponseDTO } from "../model/LoginResponseDTO";
import { LogoutRequestDTO } from '../model/LogoutRequestDTO';
import { LogoutResponseDTO } from '../model/LogoutResponse';

const BASE_URL = 'http://localhost:8080/auth';

export const authService = {

    login: async (loginRequestDTO: LoginRequestDTO): Promise<LoginResponseDTO> => {
        try {
            const response = await axios.post<LoginResponseDTO>(`${BASE_URL}/login`, loginRequestDTO);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                throw err; 
            } else {
                throw new Error("An unknown error occurred during login.");
            }
        }
    },
    refresh: async (req: RefreshRequestDTO): Promise<LoginResponseDTO> => {
        try {
            const res = await axios.post<LoginResponseDTO>(`${BASE_URL}/refresh`, req);
            return res.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                throw err; 
            } else {
                throw new Error("An unknown error occurred during login.");
            }
        }
    },
    logout: async (req: LogoutRequestDTO): Promise<LogoutResponseDTO> => {
        try {
            const res = await axios.post<LogoutResponseDTO>(`${BASE_URL}/logout`, req);
            return res.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                throw err; 
            } else {
                throw new Error("An unknown error occurred during login.");
            }
        }
    },
};