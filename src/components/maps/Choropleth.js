import * as React from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { features } from './data/fire.js'

const Choropleth = ({ mapClass }) => {
  // Manage State
  const [onselect, setOnselect] = useState({})

  //style the features
  const style = feature => {
    return {
      fillColor: mapPolygonColorToDensity(feature.properties.incidents),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '2',
      fillOpacity: 0.7,
    }
  }
  //style the features weighted to number of incidents
  const mapPolygonColorToDensity = incidents => {
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

  /* function determining what should happen onmouseover, this function updates our state*/
  const highlightFeature = e => {
    var layer = e.target
    const { name, incidents } = e.target.feature.properties
    setOnselect({
      name: name,
      incidents: incidents,
    })
    layer.setStyle({
      weight: 3,
      color: '#fff',
      dashArray: '',
      fillOpacity: 1,
    })
  }

  /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
  const resetHighlight = e => {
    setOnselect({})
    e.target.setStyle(style(e.target.feature))
  }

  /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
     highlightFeature and resetHighlight*/
  const onEachFeature = (feature, layer) => {
    layer.setStyle({
      fillColor: mapPolygonColorToDensity(feature.properties.incidents),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '2',
      fillOpacity: 0.7,
    })
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    })
  }

  return (
    <div className={mapClass}>
      <MapContainer
        center={[52.884, -2.075]}
        zoom={6.2}
        style={{ height: '600px' }}
        zoomControl={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
        dragging={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/discodroid/cl1uingit001s15qrej26suwa/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGlzY29kcm9pZCIsImEiOiJjanVhdzNlcXQwNmprNDRsNG9iNmQ4dTlpIn0.bkdjNk6mySecnK6gg-3KXw"
        />
        <GeoJSON data={features} onEachFeature={onEachFeature} />
      </MapContainer>
    </div>
  )
}

export default Choropleth
