import React from 'react';
import { useLoaderData } from 'react-router-dom';
const StartQuiz = () => {
    const objectStartQuiz = useLoaderData()
    const startQuiz = objectStartQuiz.data
    const {name} = startQuiz
    console.log(startQuiz)
    return (
        <div>
            <h1>Quiz of {name}</h1>
        </div>
    );
};
export default StartQuiz;