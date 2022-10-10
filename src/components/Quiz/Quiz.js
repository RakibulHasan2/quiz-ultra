import React from 'react';
import './Quiz.css'
const Quiz = ({quiz}) => {
    const {name, logo, total} = quiz;
    return (
        <div className='quiz-body'>
            <img src={logo} alt="" />
            <div className='quiz-info'>
                <p>{name}</p>
                <button>Start Practice</button>
            </div>
        </div>
    );
};

export default Quiz;