import React from 'react';
import './Option.css'
const Option = ({option}) => {
    console.log(option)
    return (
        <div>
        <h1>option : {option}</h1>
        </div>
    );
};

export default Option;