import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import { features } from './data/fire.js'
import L from 'leaflet'
import { styleFeature } from './choropleth-utils.js'

const ChoroData = () => {
  const map = useMap()
  useEffect(() => {
    // control that shows state info on hover
    const info = L.control({ position: 'topleft' })

    info.onAdd = () => {
      info._div = L.DomUtil.create('div', 'info')
      info.update()
      return info._div
    }

    info.update = props => {
      info._div.innerHTML =
        '<h4>Fire Incidents (Apr-Sep 2018)</h4>' +
        (props
          ? '<b>' + props.name + '</b><br />' + props.incidents + ' incidents'
          : '<small>Hover over or tap a region</small>')
    }

    info.addTo(map)

    const highlightFeature = e => {
      const layer = e.target
      layer.setStyle({
        weight: 3,
        //color: '#fff',
        dashArray: '',
        fillOpacity: 0.7,
      })

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront()
      }

      info.update(layer.feature.properties)
    }

    let geojson

    const resetHighlight = e => {
      geojson.resetStyle(e.target)
      info.update()
    }

    /*     const zoomToFeature = e => {
      map.fitBounds(e.target.getBounds())
    } */

    const onEachFeature = (feature, layer) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        //onclick: zoomToFeature,
      })
    }

    geojson = L.geoJson(features, {
      style: styleFeature,
      onEachFeature: onEachFeature,
    }).addTo(map)
  }, [map])

  return null
}

export default ChoroData
