import React from 'react';
import Option from '../Option/Option';
import './QuizQuestion.css'

const QuizQuestion = ({query}) => {
    const {question,options} = query; 
    // console.log(query)
    return (
        <div className='question-border'>
            <h1>Question : {question}</h1>
            {
                options.map( option => <Option
                key= {option}
                option = {option}
                ></Option>)
            }
        </div>
    );
};

export default QuizQuestion;