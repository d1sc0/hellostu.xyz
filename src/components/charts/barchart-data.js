export const options = {
  plugins: {
    layout: {
      padding: 0,
    },
    title: {
      display: true,
      text: 'Finish times distribution',
    },
    legend: { display: false, position: 'right' },
  },
  responsive: true,
  aspectRatio: 1.5,
  scales: {
    y: {
      min: 0,
      max: 2000,
    },
  },
}

export const data = {
  labels: [
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
  datasets: [
    {
      label: 'Finishers',
      backgroundColor: '#ffa600',
      data: [0, 180, 1162, 1778, 1202, 449, 165, 57, 17, 31, 6],
    },
  ],
}
