import * as React from 'react'
import { TileLayer, MapContainer } from 'react-leaflet'
import Legend from './choropleth-legend'
import ChoroData from './choropleth-data.js'

const Choropleth = ({ mapClass }) => {
  return (
    <div className={mapClass}>
      <MapContainer
        center={[52.384, -2.0]}
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
        <ChoroData />
        <Legend />
      </MapContainer>
    </div>
  )
}

export default Choropleth
