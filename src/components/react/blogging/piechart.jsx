import React from "react";
import { Chart } from "react-google-charts";


const BlogPie = () => {

 const data = [
  ["Writing Task", "Percentage of time"],
  ["Worrying too much about other people and their reactions", 40],
  ["Messing about with post images", 5],
  ["Finding and writing the words", 15],
  ["Correcting mistakes", 30],
  ["Distracted by some other existential crisis", 10],
];

const options = {
  theme: 'maximized',
  is3D: true,
  chartArea: {width: '100%', height: '100%'},
  legend: {position: 'right'},
};
  return (
    <div className='PieFull'>
      <p>Breakdown of how I spend any blog writing time</p>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"95%"}
      height={"450px"}
    />
    </div>
  )
}

export default BlogPie