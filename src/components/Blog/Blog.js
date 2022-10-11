import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
                <h1 className= 'text-center mt-6 text-3xl font-bold'>FAQ Section</h1>
            <div>
                <div className='QA'>
                    <h3 className='font-bold text-lg'>Question-01 : What is the purpose of React Router?</h3>
                    <h4>React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route s as it changes, and it also gives you tools to update the location using Link s and the history API.
                    We simply couple a component with a specific route, which makes our root component (normally called App) clear, maintainable and readable. Without router, either the root component or state would be messy and hard to maintain </h4>
                </div>
                <div className='QA'>
                    <h3 className='font-bold text-lg'>Question-02 : How does Context API works?</h3>
                    <h4>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. </h4>
                </div>
                <div className='QA'>
                    <h3 className='font-bold text-lg'>Question-03 : What is useRef?</h3>
                    <h4>Refs in React are used to store a reference to a React element and their values are persisted across re-render. Refs are mutable objects, hence they can be updated explicitly and can hold values other than a reference to a React element.
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. </h4>
                 </div>   
            </div>

        </div>
 
    );
};

export default Blog;