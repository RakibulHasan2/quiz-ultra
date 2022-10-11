import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Chart from '../Chart/Chart';
const Statistics = () => {
    const objectStates = useLoaderData()
    const states = objectStates.data
    // console.log(states)
    return (
        <div>
            <h1> States{states.length}</h1>
            {
                states.map( state => <Chart
                key={state.id}
                state = {state}
                ></Chart>)
            }     
        </div>
    );
};

export default Statistics;