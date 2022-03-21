export const options = {
  layout: {
    padding: 20,
  },
  responsive: true,
  scales: {
    x: {
      title: 'events',
      display: true,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Weekly Finishers at The Great Field',
    },
  },
}

export const data = {
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
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.2,
    },
  ],
}
