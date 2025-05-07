import { createContext, useContext } from "react";

interface AuthContextInterface {
    accessToken: string
    setAccessToken: (token: string) => void;
    refreshToken: string;
    setRefreshToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const useAuth = (): AuthContextInterface => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};