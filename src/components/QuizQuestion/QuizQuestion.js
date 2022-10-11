import Option from '../Option/Option';
import './QuizQuestion.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({query}) => {
    const {question,options, id, correctAnswer} = query; 

    const answer = () => toast(correctResult,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     const correctResult = () =>{
        return "Correct Answer is "+ correctAnswer;
     }
    // console.log(correctAnswer)
    return (
        <div className='question-border p-10 w-96 '>
          <div className=' p-5 mb-10'>
          <EyeIcon onClick={answer} className="h-6 w-10 float-right"/>
          <h1><span className='font-bold text-lg'>Question :</span> {question}</h1>
          
          </div>
            {
                options.map( option => <Option
                correctAnswer ={ correctAnswer}
                id = {id}
                key= {option}
                option = {option}
                ></Option>)
            }
        </div>
    );
};

export default QuizQuestion;