import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
                <h1 className= 'text-center mt-6 text-3xl font-bold'>FAQ Section</h1>
            <div>
                <div className='QA'>
                    <h3 className='font-bold text-lg'>Question-01 : How dose react work?</h3>
                    <h4> React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.React is a declarative, efficient, and flexible JavaScript library for building user interfaces. </h4>
                </div>
                <div className='QA'>
                    <h3 className='font-bold text-lg'>Question-02 : What is the difference between props and state?</h3>
                    <h4>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component. </h4>
                </div>
                <div className='QA'>
                    <h3 className='font-bold text-lg'>Question-03 : What are the use of useEFfect execpt load data form API?</h3>
                    <h4>We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. In this case, we'll need a state to handle the cart items, and another state to handle the animation trigger. </h4>
                 </div>   
            </div>

        </div>
 
    );
};

export default Blog;