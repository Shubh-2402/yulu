import React, { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { deleteCookie } from '../utils/cookieHelper';
import { useNavigate } from 'react-router';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const url = `${BASE_URL}user/profile`;
                const response = await axiosInstance.get(url);

                if (response.status === 200) {
                    setUser(response.data.user);
                } else {
                    console.error('Failed to fetch user data');
                    toast.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const login = async(userData) => {
        try {
            const signup_url = `${BASE_URL}auth/login`;
            const response = await axiosInstance.post(signup_url, userData);

            if (response.status === 200) {
                setUser(response.data.user);
                const authToken = response.data.token;
                const expiryDate = new Date();
                expiryDate.setTime(expiryDate.getTime() + (1 * 60 * 60 * 1000)); // 1 hour from now

                // Set cookie
                document.cookie = `authToken=${JSON.stringify({ value: authToken, expires: expiryDate.toUTCString() })}; expires=${expiryDate.toUTCString()}; path=/`;

                navigate("/");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const logout = () => {
        setUser(null);
        deleteCookie("authToken");
        navigate("/login");
    };

    const authContextValue = {
        user,
        login,
        logout,
        loading,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};
