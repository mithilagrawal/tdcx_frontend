
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
        baseURL: 'https://tdcs-backend.herokuapp.com/api',
        headers
    });
}