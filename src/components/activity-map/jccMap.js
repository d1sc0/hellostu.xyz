import * as React from 'react'
import { TileLayer, MapContainer, ZoomControl, GeoJSON } from 'react-leaflet'
import { features } from './data/jcc/jccRoute2.js'

const featureStyle = {
  color: '#0000ff',
  weight: 8,
  opacity: 0.65,
}

const JccMap = ({ mapClass }) => {
  return (
    <div className={mapClass}>
      <MapContainer
        style={{ height: '100%', minHeight: '100%' }}
        zoomControl={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
        dragging={true}
        bounds={[
          [50.595872, -2.446157],
          [50.644892, -1.956058],
        ]}
      >
        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={features} style={featureStyle} />
      </MapContainer>
    </div>
  )
}

export default JccMap
