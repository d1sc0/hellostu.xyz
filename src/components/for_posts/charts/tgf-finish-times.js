import ApexCharts from 'apexcharts';
import moment from 'moment';

var options = {
  series: [
    {
      name: 'Fastest Man (mm:ss)',
      data: [
        new Date('2019-01-01T09:16:37').getTime(),
        new Date('2019-01-01T09:16:29').getTime(),
        new Date('2019-01-01T09:16:21').getTime(),
        new Date('2019-01-01T09:17:18').getTime(),
        new Date('2019-01-01T09:17:01').getTime(),
        new Date('2019-01-01T09:16:23').getTime(),
        new Date('2019-01-01T09:17:23').getTime(),
        new Date('2019-01-01T09:16:37').getTime(),
        new Date('2019-01-01T09:18:16').getTime(),
        new Date('2019-01-01T09:18:34').getTime(),
        new Date('2019-01-01T09:18:01').getTime(),
        new Date('2019-01-01T09:18:19').getTime(),
        new Date('2019-01-01T09:18:41').getTime(),
        new Date('2019-01-01T09:18:08').getTime(),
        new Date('2019-01-01T09:18:07').getTime(),
        new Date('2019-01-01T09:17:45').getTime(),
        new Date('2019-01-01T09:17:44').getTime(),
        new Date('2019-01-01T09:17:22').getTime(),
        new Date('2019-01-01T09:17:14').getTime(),
        new Date('2019-01-01T09:17:37').getTime(),
      ],
    },
    {
      name: 'Fastest Women (mm:ss)',
      data: [
        new Date('2019-01-01T09:20:17').getTime(),
        new Date('2019-01-01T09:20:53').getTime(),
        new Date('2019-01-01T09:20:02').getTime(),
        new Date('2019-01-01T09:21:02').getTime(),
        new Date('2019-01-01T09:21:44').getTime(),
        new Date('2019-01-01T09:21:19').getTime(),
        new Date('2019-01-01T09:21:43').getTime(),
        new Date('2019-01-01T09:18:40').getTime(),
        new Date('2019-01-01T09:20:42').getTime(),
        new Date('2019-01-01T09:18:26').getTime(),
        new Date('2019-01-01T09:21:32').getTime(),
        new Date('2019-01-01T09:20:15').getTime(),
        new Date('2019-01-01T09:22:10').getTime(),
        new Date('2019-01-01T09:21:39').getTime(),
        new Date('2019-01-01T09:21:47').getTime(),
        new Date('2019-01-01T09:20:01').getTime(),
        new Date('2019-01-01T09:21:49').getTime(),
        new Date('2019-01-01T09:21:10').getTime(),
        new Date('2019-01-01T09:20:38').getTime(),
        new Date('2019-01-01T09:21:33').getTime(),
      ],
    },
  ],
  chart: {
    height: 450,
    type: 'line',
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
    text: 'Fastest finishers at The Great Field parkrun',
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
      text: '',
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
      text: 'Finishing Time (mm:ss)',
    },
    min: new Date('2019-01-01T09:13:00').getTime(),
    max: new Date('2019-01-01T09:23:00').getTime(),
    labels: {
      formatter: function (val, index) {
        return moment(val).format('mm:ss');
      },
    },
  },
};

var chart = new ApexCharts(
  document.querySelector('#tgf-finish-times'),
  options
);
chart.render();
