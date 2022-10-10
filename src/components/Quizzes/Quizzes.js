import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quizzes.css'
import Quiz from './../Quiz/Quiz';
const Quizzes = () => {
    const ObjectQuizzes = useLoaderData();
    const quizzes = ObjectQuizzes.data;
    console.log(quizzes)
    return (
        <div>
            <h1>quizzes {quizzes.length}</h1>
            <div  className='all-quiz'>
            {
                quizzes.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>) 
            }
            </div>
        </div>
    );
};

export default Quizzes;