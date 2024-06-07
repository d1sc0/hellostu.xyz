import L from 'leaflet';
import { incData } from './data/fire-inc-data.js';

const map = L.map('map', {
  zoomControl: false,
  dragging: false,
  boxZoom: false,
  touchZoom: false,
}).setView([53.0, -3.0], 6);

const tiles = L.tileLayer(
  'https://api.mapbox.com/styles/v1/discodroid/cl1uingit001s15qrej26suwa/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGlzY29kcm9pZCIsImEiOiJjanVhdzNlcXQwNmprNDRsNG9iNmQ4dTlpIn0.bkdjNk6mySecnK6gg-3KXw',
  {
    minZoom: 6,
    maxZoom: 6,
    attribution:
      '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>',
  }
).addTo(map);

// control that shows state info on hover
const info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

info.update = function (props) {
  const contents = props
    ? `<b>${props.name}</b><br />${props.incidents} incidents`
    : '<br />Hover over a region';
  this._div.innerHTML = `<strong>Number of Incidents</strong><br /><br />${contents}`;
};

info.addTo(map);

// get color depending on population density value
function getColor(incidents) {
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
    : '#FEB24C';
}

function style(feature) {
  return {
    weight: 1,
    opacity: 1,
    color: 'white',
    dashArray: '2',
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.incidents),
  };
}

function highlightFeature(e) {
  const layer = e.target;

  layer.setStyle({
    weight: 2,
    color: '#fff',
    dashArray: '',
    fillOpacity: 0.7,
  });

  layer.bringToFront();

  info.update(layer.feature.properties);
}

/* global statesData */
const geojson = L.geoJson(incData, {
  style,
  onEachFeature,
}).addTo(map);

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    // click: zoomToFeature,
  });
}

map.attributionControl.addAttribution(
  'Fire incident data from &copy; <a href="https://www.gov.uk/government/statistical-data-sets/fire-statistics-data-tables#incidents-attended">GOV.UK</a>'
);

const legend = L.control({ position: 'topleft' });

legend.onAdd = function (map) {
  const div = L.DomUtil.create('div', 'info legend');
  const grades = [0, 2000, 4000, 6000, 12000, 24000];
  const labels = ['<strong>Number of Incidents</strong>'];
  let from, to;

  for (let i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      `<i style="background:${getColor(from + 1)}"></i> ${from}${
        to ? `&ndash;${to}` : '+'
      }`
    );
  }

  div.innerHTML = labels.join('<br>');
  return div;
};

legend.addTo(map);
