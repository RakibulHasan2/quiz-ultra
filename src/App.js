import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Main from './components/Main/Main';
import Quizzes from './components/Quizzes/Quizzes';
import StartQuiz from './components/StartQuiz/StartQuiz';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    { 
      path: '/', 
      element: <Main></Main>,
      errorElement: <About></About>,
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
          path:'statistics',
          element: <Statistics></Statistics>
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
