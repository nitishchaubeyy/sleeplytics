'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Record {
  date: string;
  amount: number;
}

const BarChart = ({ records }: { records: Record[] }) => {
  const data = {
    labels: records.map((record) => new Date(record.date).toLocaleDateString()),
    datasets: [
      {
        data: records.map((record) => record.amount),
        backgroundColor: records.map((record) =>
          record.amount < 7
            ? 'rgba(255, 182, 193, 0.6)' // Soft pastel pink
            : 'rgba(144, 238, 144, 0.6)' // Soft pastel green
        ),
        borderColor: records.map((record) =>
          record.amount < 7
            ? 'rgba(255, 105, 135, 1)'
            : 'rgba(60, 179, 113, 1)'
        ),
        borderWidth: 1,
        borderRadius: 6,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#111',
        bodyColor: '#333',
        borderColor: '#e0e0e0',
        borderWidth: 1,
        titleFont: {
          weight: 'bold' as 'bold', // ✅ Type assertion added
        },
        padding: 10,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          font: { size: 14, weight: 'bold' as const },
          color: '#4B5563',
        },
        ticks: {
          font: { size: 12 },
          color: '#6B7280',
        },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: 'Hours Slept',
          font: { size: 14, weight: 'bold' as const },
          color: '#4B5563',
        },
        ticks: {
          font: { size: 12 },
          color: '#6B7280',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        suggestedMin: 4,
        suggestedMax: 10,
        beginAtZero: false,
      },
    },
  };

  return (
    <div className='bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-xl p-4 shadow-sm'>
      <div className='bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg h-[350px]'>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
