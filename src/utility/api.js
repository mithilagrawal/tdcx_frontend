
import axios from 'axios';

export const axiosBaseConfig = {
    baseURL: 'http://localhost:3092/api',
    headers: {
        Accept: 'application/json',
    }
};

export const apiRequest = axios.create(axiosBaseConfig);