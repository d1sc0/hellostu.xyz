import * as React from 'react'
import { options1, data1, options2, data2 } from './linechart-data.js'
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
  Tooltip,
  Legend
)

const Linechart = ({ data }) => {
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
    //this is a comment
    <Line options={optionsfile} data={datafile} />
  )
}

export default Linechart
