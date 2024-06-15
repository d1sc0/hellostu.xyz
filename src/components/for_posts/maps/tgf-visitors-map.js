import L from 'leaflet';
import { VisitorData } from './data/tgfVisitorHomes.js';

var map = L.map('TGFmap').setView([54.09354272113172, -2.765121459960938], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function circleWithText(latLng, txt, radius, borderWidth, circleClass) {
  var size = radius * 2;
  var style =
    'style="width: ' +
    size +
    'px; height: ' +
    size +
    'px; border-width: ' +
    borderWidth +
    'px;"';
  var iconSize = size + borderWidth * 2;
  var icon = L.divIcon({
    html:
      '<span class="' +
      'circle ' +
      circleClass +
      '" ' +
      style +
      '>' +
      txt +
      '</span>',
    className: '',
    iconSize: [iconSize, iconSize],
  });
  var marker = L.marker(latLng, {
    icon: icon,
  });
  return marker;
}

function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.HomeName) {
    layer.bindPopup(
      'Number of unique athleteIDs to <br/>visit the Great Field parkrun<br/> from <strong>' +
        feature.properties.HomeName +
        '</strong> is: ' +
        feature.properties.NoOfAthletes
    );
  }
}

L.geoJSON(VisitorData, {
  pointToLayer: function (feature, latlng) {
    return circleWithText(
      latlng,
      feature.properties.NoOfAthletes,
      15,
      2,
      'circle1'
    );
  },
  onEachFeature,
}).addTo(map);

document.getElementById('UK').addEventListener('click', () => {
  map.setView([54.09354272113172, -2.765121459960938], 6);
});

document.getElementById('Ireland').addEventListener('click', () => {
  map.setView([54.14433895052212, -6.646728515625001], 7);
});

document.getElementById('France').addEventListener('click', () => {
  map.setView([46.21167508670015, 6.624755859375001], 6);
});

document.getElementById('Germany').addEventListener('click', () => {
  map.setView([50.91125953173824, 8.668212890625002], 6);
});

document.getElementById('Finland').addEventListener('click', () => {
  map.setView([61.50271713616598, 24.158935546875004], 6);
});

document.getElementById('USA').addEventListener('click', () => {
  map.setView([29.462318337210963, -88.92333984375001], 5);
});

document.getElementById('Australia').addEventListener('click', () => {
  map.setView([-25.31671837192806, 133.90136718750003], 4);
});

document.getElementById('NewZealand').addEventListener('click', () => {
  map.setView([-39.92843137829837, 174.56176757812503], 6);
});

document.getElementById('SouthAfrica').addEventListener('click', () => {
  map.setView([-28.064709657296667, 27.993164062500004], 5);
});

document.getElementById('SouthEastAsia').addEventListener('click', () => {
  map.setView([1.8934235913826891, 102.85400390625], 5);
});

//turn on to get coords from mouse click on map
/* map.on('click', function (ev) {
  var coordinates = map.mouseEventToLatLng(ev.originalEvent);
  console.log(coordinates.lat + ', ' + coordinates.lng);
}); */
