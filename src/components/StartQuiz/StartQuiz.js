import React from 'react';
import './StartQuiz.css'
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
const StartQuiz = () => {
    const objectStartQuiz = useLoaderData()
    const startQuiz = objectStartQuiz.data
    const {name,questions} = startQuiz
    // console.log(questions)
    return ( 
        <div>
            <p className='text-3xl text-teal-500 font-bold mt-7 mb-6'>Quiz of {name}</p>
              <div className='grid md:grid-cols-3 ml-10 gap-5'>
              {
                questions.map( query => <QuizQuestion
                key={query.id}
                query = {query}
                ></QuizQuestion>)
               }
              </div>
        </div>
    );
};
export default StartQuiz;