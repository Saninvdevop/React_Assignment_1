import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Amazon', 'In House Website', 'Flipkart'],
        datasets: [
            {
                label: 'Projects',
                data: [30, 50, 20], // Example data
                backgroundColor: [
                    '#56487a',  // #56487a
                    '#130C2A)',   // #130C2A
                    'orange',      // black
                ],
                borderColor: [
                    'rgba(86, 72, 122, 1)',    // #56487a
                    'rgba(19, 12, 42, 1)',     // #130C2A
                    'rgba(0, 0, 0, 1)',        // black
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="pie-chart-container">
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
