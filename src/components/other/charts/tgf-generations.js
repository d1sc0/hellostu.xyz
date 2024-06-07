import ApexCharts from 'apexcharts';

var options = {
  chart: {
    width: '100%',
    height: 450,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '35%',
      },
    },
  },
  dataLabels: { style: { fontSize: '14px' } },
  legend: {
    position: 'bottom',
  },
  labels: [
    'Silent Generation',
    'Baby Boomers',
    'Generation X',
    'Millenials',
    'Generation Z',
    'Generation Alpha',
  ],
  series: [13, 437, 701, 449, 198, 86],
};

var chart = new ApexCharts(document.querySelector('#tgf-generations'), options);
chart.render();
