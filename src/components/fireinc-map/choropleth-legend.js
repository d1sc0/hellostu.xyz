import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import { getColor } from './choropleth-utils'

const Legend = () => {
  const map = useMap()

  useEffect(() => {
    const legend = L.control({ position: 'bottomright' })

    legend.onAdd = () => {
      var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 2000, 4000, 6000, 12000, 24000],
        labels = ['<strong>Number of Incidents</strong>'],
        from,
        to
      for (var i = 0; i < grades.length; i++) {
        from = grades[i]
        to = grades[i + 1]
        labels.push(
          '<i style="background:' +
            getColor(from + 1) +
            '"></i> ' +
            from +
            (to ? '&ndash;' + to : '+')
        )
      }
      div.innerHTML = labels.join('<br>')
      return div
    }

    legend.addTo(map)
  }, [map])

  return null
}

export default Legend
