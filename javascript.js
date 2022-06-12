mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyYWdyYXppbyIsImEiOiJjbDJnZmoyaWYwM2owM25xd2FxYWZzdTBtIn0.JDafX9t6_ZbxhR39L169-Q';
// Set bounds to polo scolastico.
//const bounds = [
//[10.635846, 44.702533], // Southwest coordinates
//[10.631763, 44.710463] // Northeast coordinates
//];
//var scuola =[10.6373117,44.7059897];

const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/faragrazio/cl3q00vxi006315ms0b69i24d/draft', // style URL
center: [10.635846, 44.702533], // starting position
zoom: 15, // starting zoom
//maxBounds: bounds // Set the map's geographical boundaries.
});
//aggiunge i controlli di zoom e "rotazione mappa"
const nav = new mapboxgl.NavigationControl()
map.addControl(nav)
  map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })
    );

map.addControl(
    new MapboxDirections({
    accessToken:'pk.eyJ1IjoiZmFyYWdyYXppbyIsImEiOiJjbDJnZmoyaWYwM2owM25xd2FxYWZzdTBtIn0.JDafX9t6_ZbxhR39L169-Q'
    }),
    'top-left'
    );
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.631003367214195,44.69885585089053]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.6342104,44.7045491]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }
  ]
};
// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';
  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(feature.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
      )
  )
  .addTo(map);
}










































