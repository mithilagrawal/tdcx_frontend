
import axios from 'axios';
import { getToken, isLogin } from '.';

export const apiRequest = () => {
    const headers = {
        Accept: 'application/json'
    }

    if (isLogin()) {
        headers['authorization'] = `Bearer ${getToken()}`;
    }
    return axios.create({
        baseURL: 'http://localhost:3092/api',
        headers
    });
}