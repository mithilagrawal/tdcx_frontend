import React from 'react';
import { getData, logout } from '../../../utility';
import {useHistory} from 'react-router-dom';

import './Header.Component.css';
const Header = () => {
    const history = useHistory();

    const logOut = () => {
        logout();
        history.replace('/login');
    }
    return (<div className='header'>
        <div className='userName'>{getData('name') || ''}</div>
        <div onClick={logOut} className='logout'>Log out</div>
    </div>)

}

export default Header;