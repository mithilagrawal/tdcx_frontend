const token = 'token';

export const setToken = (t) => {
    window.localStorage.setItem(token, t)
}

export const getToken = () => {
    return window.localStorage.getItem(token);
}

export const logout = () => {
    localStorage.removeItem(token);
}

export const isLogin = () => {
    if (localStorage.getItem(token)) {
        return true;
    }

    return false;
}