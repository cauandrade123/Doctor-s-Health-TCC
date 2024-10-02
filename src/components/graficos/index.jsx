import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Graficos() {
    const dados = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Faturamento Mensal',
                data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120,140],
                backgroundColor: 'rgba(4, 106, 226, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }
        ]
    };

    const opcoes = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return <Bar data={dados} options={opcoes}   height={400} width={800}/>;
}
