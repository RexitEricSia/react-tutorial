import axios, { AxiosError } from "axios";
import { LoginRequestDTO } from "../model/LoginRequestDTO";
import { LoginResponseDTO } from "../model/LoginResponseDTO";

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
};