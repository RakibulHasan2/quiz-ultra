import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Quizzes from './components/Quizzes/Quizzes';

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
          path:'result',
          element: <h1>Result</h1>
        },
        {
          path:'blog',
          element: <h1>Blog</h1>
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
