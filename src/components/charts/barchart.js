import * as React from 'react'
import { options, data } from './data/avgFinishTimes.js'
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

const Barchart = ({ chartClass }) => {
  return (
    <div className={chartClass}>
      <Bar options={options} data={data} />
    </div>
  )
}

export default Barchart
