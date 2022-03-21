import React from 'react'
import { options, data } from './doughnut-data.js'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const Doughnutchart = ({ chartClass }) => {
  return (
    //this is a comment
    <div className={chartClass}>
      <Doughnut options={options} data={data} />
    </div>
  )
}

export default Doughnutchart
