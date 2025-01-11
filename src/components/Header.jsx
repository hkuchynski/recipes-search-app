import React from 'react';

import SearchBox from './SearchBox';

import logo from '../assets/logo.png';
import '../index.css';

const Header = () => {

    return (
        <div className='header'>
            <img src={logo} alt='Logo' className='header__logo' />
            <SearchBox />
        </div>
    )
    
}

export default Header;