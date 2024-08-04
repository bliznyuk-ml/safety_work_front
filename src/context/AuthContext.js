import { createContext, useEffect, useState } from "react";
import {refreshToken, logout} from '../services/authService';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const handleLogin = (decodedToken) => {
    // try{
    //     const data = await login(username, password);
    //     const decodedToken = jwtDecode(data.accessToken);
    //     setUser(decodedToken);
    // } catch (error) {
    //     console.error(error.message);
    //     throw error;
    // }
    setUser(decodedToken);
};

const handleLogout = () => {
    logout();
    setUser(null);
};

useEffect(() => {
    const autoRefreshToken = async () => {
        try{
            const data = await refreshToken();
            const decodedToken = jwtDecode(data.accessToken);
            setUser(decodedToken);
        } catch (error) {
            console.error(error.message);
        }
    };

    const interval = setInterval(() => {
        autoRefreshToken();
    }, 1*60*1000); // Refresh every 1 minutes
    return () => clearInterval(interval);
}, []);

return (
    <AuthContext.Provider value = {{user, handleLogin, handleLogout}}>
        {children}
    </AuthContext.Provider>
);
};

export {AuthContext, AuthProvider};
