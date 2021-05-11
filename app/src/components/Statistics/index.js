/* eslint-disable */
import react, { useState } from 'react';
import { Chart } from "react-google-charts";


export default function Graphics() {
    const [options, setOptions] = useState({
        hAxis: {
            title: 'Time',
        },
        vAxis: {
            title: 'Popularity',
        },
        series: {
            1: { curveType: 'function' },
        },
    })

    const [data, setData] = useState([
        ['x', 'dogs'],
        [0, 0],
        [1, 10],
        [2, 23],
        [3, 17],
        [4, 18],
        [5, 9],
        [6, 11],
        [7, 27],
        [8, 33],
        [9, 40],
        [10, 32],
        [11, 35],
    ])

    return (
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={options}
            />
        </div>
    );
}