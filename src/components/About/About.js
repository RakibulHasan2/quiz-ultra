import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
    <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
              <span className='sr-only'>Error</span>404
            </h2>
            <p className='text-2xl font-semibold md:text-3xl mb-8'>
             <span className='text-indigo-700 font-bold'>Ooopppps</span>, This page is not found
            </p>
            <Link to='/' className='px-8 py-3 font-semibold rounded bg-emerald-500 text-gray-900 hovarButton'> <span className=' text-white'>Back To Quiz</span> </Link>
          </div>
    </div>
    );
};

export default About;