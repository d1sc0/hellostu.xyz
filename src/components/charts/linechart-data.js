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
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
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
