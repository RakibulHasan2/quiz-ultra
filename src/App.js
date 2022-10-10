import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';

function App() {
  const router = createBrowserRouter([
    { 
      path: '/', 
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <h1>home</h1>
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
