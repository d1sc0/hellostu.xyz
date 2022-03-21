export const options = {
  layout: {
    padding: 10,
  },
  responsive: true,
}

export const data = {
  labels: [
    'Silent Generation',
    'Baby Boomers',
    'Generation X',
    'Millenials',
    'Generation Z',
    'Generation Alpha',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [13, 437, 701, 449, 198, 86],
      backgroundColor: [
        '#003f5c', // Silent Generation
        '#ff6e54', // Baby Boomers
        '#955196', // Generation X
        '#dd5182', // Millenials
        '#444e86', // Generation Z
        '#ffa600', // Generation Alpha
      ],
      borderColor: [
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
      ],
      borderWidth: 2,
    },
  ],
}
