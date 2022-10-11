import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Main from './components/Main/Main';
import Quizzes from './components/Quizzes/Quizzes';
import Result from './components/Result/Result';
import StartQuiz from './components/StartQuiz/StartQuiz';

function App() {
  const router = createBrowserRouter([
    { 
      path: '/', 
      element: <Main></Main>,
      children:[
        {
          path:'/', 
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quizzes></Quizzes>
        },
        {
          path:'/:id',
          loader: async ({params}) =>{
            // console.log(params.id)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <StartQuiz></StartQuiz>
        },
        {
          path:'result',
          element: <Result></Result>
        },
        {
          path:'blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
