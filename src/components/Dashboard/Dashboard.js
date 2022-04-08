import React from 'react';
import { Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 610000
    }
];




const Dashboard = () => {
    return (

        <div>
            <div className='headline'><h3>Dashboard</h3></div>
            <div className='dashboard'>
                <div className='chart'>

                    <LineChart width={700} height={500} data={data}>

                        <Line dataKey={'investment'}></Line>
                        <YAxis dataKey={'revenue'}></YAxis>
                        <XAxis dataKey={'month'}></XAxis>
                    </LineChart>
                </div>


                <div>
                    <PieChart width={700} height={500}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="blue"></Pie>
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />

                    </PieChart>
                </div>
            </div>

        </div>

    );
};

export default Dashboard;