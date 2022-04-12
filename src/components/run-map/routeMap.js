import * as React from 'react'
import { TileLayer, MapContainer, ZoomControl, GeoJSON } from 'react-leaflet'
import { features } from './data/route.js'

const RouteMap = ({ mapClass }) => {
  return (
    <div className={mapClass}>
      <MapContainer
        center={[50.711, -2.452]}
        zoom={15}
        style={{ height: '600px' }}
        zoomControl={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
        dragging={false}
      >
        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/discodroid/cl1wk717l003v14p8vwvttkn7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGlzY29kcm9pZCIsImEiOiJjanVhdzNlcXQwNmprNDRsNG9iNmQ4dTlpIn0.bkdjNk6mySecnK6gg-3KXw"
        />
        <GeoJSON data={features} />
      </MapContainer>
    </div>
  )
}

export default RouteMap
