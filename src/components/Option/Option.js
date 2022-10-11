import React from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({option,id,correctAnswer}) => {
    const seeResult = () => toast(correctAnswer,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    // console.log(correctAnswer)
        
    return (
        <div className='flex'>
            <input  onClick={seeResult} className='form-check-input get-text' name='quiz' id='radioQuiz' type="radio"/><ToastContainer/>
            <label className='form-check-label' htmlFor="radioQuiz"><span className='pl-2' >{option}</span></label>
        </div>
    );  
};

export default Option;