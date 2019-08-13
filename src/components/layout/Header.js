import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header >
            <h1 
                className='list-decoration'>
                    To Do List
            </h1>
            <Link to='/'>Start</Link>
            <Link to='/about'>About</Link>
        </header>
    )
}

export default Header;