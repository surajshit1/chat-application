import axios from 'axios';

export const axiosInstance = axios.create({ 
    baseURL: import.meta.env.MODE==="development" ? "http://localhost:5001/api" : "/api" , withCredentials: true });  //we are using withCredentials to send the cookies to the backend