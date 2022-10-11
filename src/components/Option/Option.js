import React from 'react';
import './Option.css'
const Option = ({option,id}) => {
    // console.log(id)
    return (
        <div>
        <p>
            <input className='form-check-input' name='quiz' id='radioQuiz' type="radio"/>
            <label className='form-check-label' for="radioQuiz"><span className='pl-2'>{option}</span></label>
        </p>
        </div>
    );
};

export default Option;