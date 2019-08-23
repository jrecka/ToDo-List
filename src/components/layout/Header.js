import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header >
            <Link to='/'>Start</Link>
            <Link to='/list'>List</Link>
            <Link to='/about'>About</Link>
        </header>
    )
}

export default Header;