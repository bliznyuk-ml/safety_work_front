import axios from "axios";

const API_URL = 'http://localhost:8189';

const login = async (username, password) => {
    try{
        const response = await axios.post(`${API_URL}/login`, {username, password}, {withCredentials: true});
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Authentication failed');
    }
};

const refreshToken = async () => {
    try{
        const response = await axios.post(`${API_URL}/refresh-token`, {}, {withCredentials: true});
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Token refresh failed');
    }
};

const logout = () => {
    // Clear cookies or any other necessary logout steps
  document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/refresh-token;";
};

export{login, refreshToken, logout};