import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import { apiRequest } from "../../../utility/api";
import { toast } from 'react-toastify';
import './Login.Component.css';
import { setData, setToken } from "../../../utility";

const Login = () => {
    const history = useHistory();
    const [form, setForm] = useState({
        name: '',
        apiKey: ''
    });

    const formSubmit = async e => {
        e.preventDefault();
        apiRequest().post('/login', form)
            .then(res => {

                setToken(res?.data?.token?.token);
                setData('name',res?.data?.token?.name);
                history.replace('/dashboard');
                toast.success('Successfully login');
            })
            .catch(err => {
                console.log({ err })
                toast.error(err?.response?.data?.msg || 'Something went wrong')

            });
    }


    return (
        <div className="cont">
            <div className="card">
                <div className="heading">Log in</div>
                <form onSubmit={e => { formSubmit(e) }}>
                    <input className="form-input" type="text" onInput={e => {
                        setForm({
                            ...form,
                            name: e.target.value
                        });
                    }} placeholder="Name" />
                    <input className="form-input" type="password" onInput={e => {
                        setForm({
                            ...form,
                            apiKey: e.target.value
                        });
                    }} placeholder="Password" />
                    <button className="btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;