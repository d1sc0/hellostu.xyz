import ApexCharts from 'apexcharts';

var options = {
  series: [40, 5, 15, 30, 10],
  chart: {
    width: '100%',
    height: 450,
    type: 'pie',
  },
  legend: {
    show: true,
    position: 'bottom',
  },
  labels: [
    'Worrying too much about other people and their reactions',
    'Messing about with post images',
    'Finding and writing the words',
    'Correcting mistakes',
    'Distracted by some other existential crisis',
  ],
  theme: {
    monochrome: {
      enabled: false,
    },
  },
  dataLabels: {
    formatter(val) {
      return [val.toFixed(1) + '%'];
    },
  },
  responsive: [
    {
      breakpoint: 900,
      options: {
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector('#blogging-chart'), options);
chart.render();
