const token = 'token';

export const setToken = (t) => {
    window.localStorage.setItem(token, t)
}

export const setData = (key, data) => {
    window.localStorage.setItem(key, data)
}

export const getData = (key) => {
    return window.localStorage.getItem(key);

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