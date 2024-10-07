import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Graficos({ dadosAPI }) {
    const dados = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Faturamento Mensal',
                data: dadosAPI, // Agora os dados são passados por props
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

    return <Bar data={dados} options={opcoes} height={400} width={800} />;
}
