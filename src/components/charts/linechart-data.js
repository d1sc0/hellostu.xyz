import moment from 'moment'

export const options1 = {
  layout: {
    padding: 20,
  },
  responsive: true,
  scales: {
    y: {
      min: 0,
      max: 400,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Weekly finishers at The Great Field parkrun',
    },
  },
}

export const data1 = {
  labels: [
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
  datasets: [
    {
      label: 'Finishers',
      data: [
        345, 317, 341, 325, 255, 223, 207, 261, 194, 257, 271, 275, 270, 262,
        363, 243, 222, 243, 231, 230,
      ],
      fill: false,
      borderColor: '#955196',
      borderWidth: 5,
      tension: 0.2,
    },
  ],
}

export const options2 = {
  layout: {
    padding: 20,
  },
  responsive: true,
  scales: {
    y: {
      min: '0:12:00',
      max: '0:22:00',
      type: 'time',
      time: {
        parser: 'H:mm:ss',
        displayFormats: {
          millisecond: 'H:mm:ss',
          second: 'H:mm:ss',
          minute: 'H:mm:ss',
          hour: 'H:mm:ss',
          day: 'H:mm:ss',
          week: 'H:mm:ss',
          month: 'H:mm:ss',
          quarter: 'H:mm:ss',
          year: 'H:mm:ss',
        },
        tooltipFormat: 'mm:ss',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Times of fastest finisher weekly',
    },
  },
}

export const data2 = {
  labels: [
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
  datasets: [
    {
      label: 'Fastest time',
      data: [
        /* moment.duration(997, 'seconds'), */
        '0:16:37',
        '0:16:29',
        '0:16:21',
        '0:17:18',
        '0:17:01',
        '0:16:23',
        '0:17:23',
        '0:16:37',
        '0:18:16',
        '0:18:26',
        '0:18:01',
        '0:18:19',
        '0:18:41',
        '0:18:08',
        '0:18:07',
        '0:17:45',
        '0:17:44',
        '0:17:22',
        '0:17:14',
        '0:17:37',
      ],
      fill: false,
      borderColor: '#ff6e54',
      borderWidth: 5,
      tension: 0.2,
    },
  ],
}
