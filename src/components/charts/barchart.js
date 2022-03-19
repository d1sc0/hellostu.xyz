import * as React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Barchart = () => {
  const options = {
    plugins: {
      layout: {
        padding: 20,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
      legend: { position: 'right' },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        max: 1000,
        stacked: true,
      },
    },
  }
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: ['100', '200', '300'],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        data: ['300', '100', '300'],
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Dataset 3',
        data: ['100', '200', '100'],
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  }
  return (
    //this is a comment
    <Bar options={options} data={data} />
  )
}

export default Barchart
