import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = ({state}) => {
    const {name, total} = state
    console.log(name, total)
    return (
        <div>
            <LineChart width={600} height={300} data = {state}></LineChart>
            <Line type="monotone" dataKey={total} stroke="#8884d8" />
            <XAxis dataKey={name} />
            <YAxis />
            <Tooltip></Tooltip>
        </div>
    );
};

export default Chart;