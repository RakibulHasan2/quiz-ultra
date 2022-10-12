import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='flex justify-around items-center h-20 background-header '>
            <h1 className='text-3xl text-white font-bold'>Quiz-Ultra</h1>
            <div className='text-white text-xl hover'>
                <Link to='quiz'>Quizzes</Link>
                <Link to='statistics' className='ml-4'>Statistics</Link>
                <Link to='blog' className='ml-4'>Blog</Link>
                <Link to='about' className='ml-4'>About</Link>
            </div>
        </nav>
    );
};

export default Header;