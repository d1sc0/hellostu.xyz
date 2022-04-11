import { useEffect } from 'react'
import { useMap, GeoJSON } from 'react-leaflet'
import { features } from './data/fire.js'
import L from 'leaflet'

const ChoroData = ({}) => {
  const map = useMap()
  console.log(map)
  return null
}

export default ChoroData
