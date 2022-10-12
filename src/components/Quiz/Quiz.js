import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'
const Quiz = ({quiz}) => {
    const {name, logo ,id} = quiz;
   
    return (
        <div className='border w-64 h-72 quiz-body ml-7 hoverEffect'>
            <img className='w-4/5 ml-7' src={logo} alt="" />
            <div className='md:flex justify-evenly md:mt-7 mt-3 mb-7'>
                <p className='font-bold text-white mb-2'>{name}</p>
                <Link to = {`/${id}`}>
                <button className='button'>Start Practice</button>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;