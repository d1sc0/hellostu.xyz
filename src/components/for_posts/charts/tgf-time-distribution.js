import ApexCharts from 'apexcharts';

var options = {
  series: [
    {
      name: 'Number of finshers',
      data: [0, 180, 1162, 1778, 1202, 449, 165, 57, 17, 31, 6],
    },
  ],
  chart: {
    type: 'bar',
    height: 450,
    background: '#ffeeff',
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: { min: 0, max: 2000 },
  xaxis: {
    categories: [
      '10-15 mins ',
      '15-20 mins ',
      '20-25 mins ',
      '25-30 mins ',
      '30-35 mins ',
      '35-40 mins ',
      '40-45 mins ',
      '45-50 mins ',
      '50-55 mins ',
      '55-60 mins ',
      '60-65 mins',
    ],
  },
};

var chart = new ApexCharts(
  document.querySelector('#tgf-time-distribution'),
  options
);
chart.render();
