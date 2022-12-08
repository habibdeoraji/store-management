import React, { useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "2017",
        Sales_target: 40,
        Sales_done: 24,
        amt: 2400
    },
    {
        name: "2018",
        Sales_target: 40,
        Sales_done: 30,
        amt: 2210
    },
    {
        name: "2019",
        Sales_target: 45,
        Sales_done: 55,
        amt: 2290
    },
    {
        name: "2020",
        Sales_target: 30,
        Sales_done: 4,
        amt: 2000
    },
    {
        name: "2021",
        Sales_target: 55,
        Sales_done: 0,
        amt: 2181
    }
];


const TotalSalesChart = ({ salesAllOrder }) => {
    useEffect(() => {
        data.map(salesData => {
            if (salesData.name === "2021") {
                salesData.Sales_done = salesAllOrder.length;
            }
            return salesData;
        })

    }, [salesAllOrder]);

    console.log(data)

    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sales_target" barSize={10} fill="#8884d8" />
            <Bar dataKey="Sales_done" barSize={10} fill="#82ca9d" />
        </BarChart>
    );
}


export default TotalSalesChart;