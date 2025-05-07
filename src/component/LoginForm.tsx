import React, { useState } from 'react'
import { authService } from '../service/authService';
import { LoginRequestDTO } from '../model/LoginRequestDTO';
import { AxiosError } from 'axios';
import { useAuth } from '../context/useAuth';

const LoginForm = () => {

    const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useAuth();

    const [formData, setFormData] = useState<LoginRequestDTO>({ username: '', password: '' });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(accessToken) {
            await authService.logout({refreshToken});
            setAccessToken("")
            setRefreshToken("")
            return
        }

        try {
            const res = await authService.login(formData)
            setAccessToken(res.accessToken)
            setRefreshToken(res.refreshToken)
            setError(null)
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response) {
                    setError(err.response.data);
                }
            }
        }
    };

    return (
        <div className="bg-white shadow-lg px-6 pt-8 pb-4 rounded-lg h-max">
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className="flex flex-col gap-2 w-full">
                    <div className='flex items-center gap-2 w-full'>
                        <label htmlFor="username" className='font-medium'>Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className='p-1 border border-gray-300 rounded w-full'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='flex items-center gap-3 w-full'>
                        <label htmlFor="password" className='font-medium'>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className='p-1 border border-gray-300 rounded w-full'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                {error && <div className="font-medium text-red-600">{error}</div>}
                <div className={`flex ${accessToken ? "justify-between" : "justify-end"} items-center`}>
                    {accessToken && <h1 className='font-medium text-green-500'>Logged In</h1>}
                    <button type="submit" className={`${accessToken? "bg-red-600" : "bg-stone-700"} p-2 rounded-lg font-medium text-white`}>{accessToken ? "Logout" : "Login"}</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm