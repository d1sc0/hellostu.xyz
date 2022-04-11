// get color depending on population density value
export const getColor = incidents => {
  return incidents > 24000
    ? '#800026'
    : incidents > 12000
    ? '#BD0026'
    : incidents > 6000
    ? '#E31A1C'
    : incidents > 4000
    ? '#FC4E2A'
    : incidents > 2000
    ? '#FD8D3C'
    : '#FEB24C'
}

export const styleFeature = feature => {
  return {
    fillColor: getColor(feature && feature.properties.incidents),
    weight: 1,
    opacity: 1,
    color: '#fff',
    dashArray: '2',
    fillOpacity: 0.7,
  }
}
