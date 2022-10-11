import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quizzes.css'
import Quiz from './../Quiz/Quiz';
const Quizzes = () => {
    const ObjectQuizzes = useLoaderData();
    const quizzes = ObjectQuizzes.data;
    // console.log(quizzes)
    return (
        <div>
            <div className='bg-slate-200 w-11/12 ml-14 h-40 background'>
            <h1 className='quiz-heading text-xl font-bold pt-10'>We have made a fun and informative quiz and game for students. <br /> Hope You will enjoy this !!</h1>
            </div>
            <div  className='flex justify-center gap-14'>
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