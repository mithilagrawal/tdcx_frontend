
import axios from 'axios';
import { getToken, isLogin } from '.';

const headers = {
    Accept: 'application/json'
}

if (isLogin()) {
    headers['authorization'] = `Bearer ${getToken()}`;
}

export const axiosBaseConfig = {
    baseURL: 'http://localhost:3092/api',
    headers: headers
};

export const apiRequest = axios.create(axiosBaseConfig);