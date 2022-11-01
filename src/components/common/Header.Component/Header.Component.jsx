import React from 'react';
import { getData, logout } from '../../../utility';
import { useHistory } from 'react-router-dom';

import ProfilePic from '../../../static/image/profile.png';

import './Header.Component.css';
const Header = () => {
    const history = useHistory();

    // process the logout operation
    const logOut = () => {
        logout();
        history.replace('/login');
    }
    return (<div className='header'>
        <div className='userName'>
            <img  src={ProfilePic} alt={"profile pic"} />
            <p>{getData('name') || ''}</p>
        </div>
        <div onClick={logOut} className='logout'>Log out</div>
    </div>)

}

export default Header;