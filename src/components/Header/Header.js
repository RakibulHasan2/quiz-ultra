import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h1 className='header-name'>Quiz-Ultra</h1>
            <div>
                <Link to='/'>Quizzes</Link>
                <Link to='result'>Result</Link>
                <Link to='blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;