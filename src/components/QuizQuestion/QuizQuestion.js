import Option from '../Option/Option';
import './QuizQuestion.css'

const QuizQuestion = ({query}) => {
    const {question,options, id} = query; 

    // console.log(query)
    return (
        <div className='question-border p-10 w-96'>
            <h1><span className='font-bold'>Question :</span> {question}</h1> <br />
            {
                options.map( option => <Option
                id = {id}
                key= {option}
                option = {option}
                ></Option>)
            }
        </div>
    );
};

export default QuizQuestion;