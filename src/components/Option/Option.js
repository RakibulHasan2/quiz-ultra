import React from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({option,id,correctAnswer}) => {
    const seeResult = () => toast(result,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      const result = () =>{
        if(correctAnswer === option){
            return 'Correct Answer, Cool'
        }
        else{
            return "Incorrect Answer !!"
        }
      }
    // console.log(correctAnswer)
        
    return (
        <div className='flex'>
            <input  onClick={seeResult} className='form-check-input get-text' name='quiz' id='radioQuiz' type="radio"/><ToastContainer/>
            <label className='form-check-label' htmlFor="radioQuiz"><span className='pl-2' >{option}</span></label>
        </div>
    );  
};

export default Option;