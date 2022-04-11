import * as React from 'react'
import { options1, data1, options2, data2 } from './data/finishersData.js'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-moment'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Filler,
  TimeSeriesScale,
} from 'chart.js'
ChartJS.register(
  TimeScale,
  TimeSeriesScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend
)

const Linechart = ({ data, chartClass }) => {
  let optionsfile = ''
  let datafile = ''

  if (data === 'attendance') {
    optionsfile = options1
    datafile = data1
  }
  if (data === 'fasttimes') {
    optionsfile = options2
    datafile = data2
  }

  return (
    <div className={chartClass}>
      <Line options={optionsfile} data={datafile} />
    </div>
  )
}

export default Linechart
