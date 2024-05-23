to convert gpx to geojson make sure have the following CLI tool installed-

'npm install -g @mapbox/togeojson'

can then run as follows

'togeojson src/components/run-map/data/jccRoute.gpx > src/components/run-map/data/jccRoute.geojson'

https://github.com/mapbox/geojson-extent
this is also a helpful tool for getting the bounding box extent of the geojason

'npm install --save @mapbox/geojson-extent'

example

'geojson-extent leaflet < src/components/run-map/data/jccRoute.geojson'

this returns the values needed for the bounds parameter

also see - https://github.com/thijssmudde/react-leaflet-distance-marker
