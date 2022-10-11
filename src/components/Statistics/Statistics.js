import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const states = [
        {id:1,name:"React",total:8},
        {id:2,name:"JavaScript",total:9},
        {id:4,name:"CSS",total:8},
        {id:5,name:"Git",total:11}
    ]
    // console.log(states)
    return (
        <div >
            <p className='text-2xl font-bold mt-5 mb-5'>This is The States of Total Question OF the Quiz</p>
            <div className='flex justify-center'>
            <LineChart width={450} height={300} data={states}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} />

            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>

              
        </div>
    );
};

export default Statistics;