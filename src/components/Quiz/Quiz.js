import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'
const Quiz = ({quiz}) => {
    const {name, logo, total,id} = quiz;
   
    return (
        <div className='quiz-body'>
            <img src={logo} alt="" />
            <div className='quiz-info'>
                <p>{name}</p>
                
                <Link to = {`/${id}`}>
                <button>Start Practice</button>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;