import ApexCharts from 'apexcharts';

var options = {
  series: [
    {
      name: 'Finishers',
      data: [
        345, 317, 341, 325, 255, 223, 207, 261, 194, 257, 271, 275, 270, 262,
        363, 243, 222, 243, 231, 230,
      ],
    },
  ],
  chart: {
    height: 450,
    type: 'area',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  title: {
    text: 'Weekly finishers at The Great Field parkrun',
    align: 'left',
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    title: {
      text: 'Dates',
    },
    labels: { hideOverlappingLabels: true },
    categories: [
      '30 Oct 21',
      '06 Nov 21',
      '13 Nov 21',
      '20 Nov 21',
      '27 Nov 21',
      '04 Dec 21',
      '11 Dec 21',
      '18 Dec 21',
      '01 Jan 22',
      '08 Jan 22',
      '15 Jan 22',
      '22 Jan 22',
      '29 Jan 22',
      '05 Feb 22',
      '12 Feb 22',
      '19 Feb 22',
      '26 Feb 22',
      '05 Mar 22',
      '12 Mar 22',
      '19 Mar 22',
    ],
  },
  yaxis: {
    title: {
      text: 'Finishers',
    },
    min: 0,
    max: 400,
  },
};

var chart = new ApexCharts(document.querySelector('#tgf-attendance'), options);
chart.render();
