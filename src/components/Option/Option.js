import React from 'react';
import './Option.css'
const Option = ({option,id}) => {
    // console.log(id)
    return (
        <div>
        <p>
            <label>
            <input type="radio"/><span className='pl-2'>{option}</span>
            </label>
        </p>
        </div>
    );
};

export default Option;