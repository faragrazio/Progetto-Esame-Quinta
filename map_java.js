mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhdWRpb2VzY3UiLCJhIjoiY2w0Y3B6aTZoMDB5MTNrcGRobW1oZTVxayJ9.XHHxycI-1C2bMk_iXO8bNQ';
// Set bounds to polo scolastico.
/*const bounds = [
  44.701836758921516, // Southwest coordinates
  44.71010254575342, // Northeast coordinates
];*/
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/claudioescu/cl4cq6dj0000k15pfpkglp6ar/draft', // style URL
center: [10.636291, 44.706190], // starting position
zoom: 16.35, // starting zoom
//maxBounds: bounds // Set the map's geographical boundaries.
})
map.addControl(new mapboxgl.FullscreenControl());
const geolocate=new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })
    
//aggiunge i controlli di zoom e "rotazione mappa"
const nav = new mapboxgl.NavigationControl()
map.addControl(nav)
  map.addControl(
      geolocate
    );
 
let ciao=new MapboxDirections({
  accessToken:'pk.eyJ1IjoiZmFyYWdyYXppbyIsImEiOiJjbDJnZmoyaWYwM2owM25xd2FxYWZzdTBtIn0.JDafX9t6_ZbxhR39L169-Q'
  })
// ROBETTINO IN ALTO A SINISTRA
map.addControl(
      ciao,
    'bottom-right'
    );

geolocate.on('geolocate', (position) => {
console.log(position);
ciao.setOrigin([position.coords.longitude,position.coords.latitude])
});

//PARCHEGGI
const parcheggi = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.634097665295954, 44.704801517573586]
      },
      properties: {
        title: 'Parcheggio Gasometro',
        description: ''
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.635953225277376, 44.707514196660654]
      },
      properties: {
        title: 'Parcheggio Chiosco',
        description: ''
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.636809146009483, 44.70517825087349]
      },
      properties: {
        title: 'Parcheggio via Makkalle',
        description: ''
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.637967860267294, 44.70571774320238]
      },
      properties: {
        title: 'Parcheggio Prof',
        description: ''
      }
    },
  ]
};
// add markers to map
for (const feature of parcheggi.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'Markerparcheggio';
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


//SCUOLE
const scuole = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.63721415953305, 44.7058983671853]
      },
      properties: {
        title: 'Blaise Pascal',
        description: ''
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.63680378156674, 44.70627962962699]
      },
      properties: {
        title: 'Secchi',
        description: ''
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.636248564318544, 44.70594983774732]
      },
      properties: {
        title: 'Nobili',
        description: ''
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.63634512383969, 44.70673523495145]
      },
      properties: {
        title: 'Canossa',
        description: ''
      }
    }
  ]
};
for (const feature of scuole.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'Markerscuole';
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


//CIBO
const chioschi = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.636821886493461, 44.70473788413725]
      },
      properties: {
        title: 'Chiosco Betty',
        description: ''
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.635834936943967, 44.707820030222926]
      },
      properties: {
        title: 'King Arthur Piadineria',
        description: ''
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.638664667214039, 44.70697118028687]
      },
      properties: {
        title: 'Panificio al Grano Duro',
        description: ''
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.634092725808777, 44.70772385472873]
      },
      properties: {
        title: 'Cucinamica',
        description: ''
      }
    }
  ]
};
// add markers to map
for (const feature of chioschi.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'Markerchioschi';
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


//bar
const bar = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.634353125823788, 44.70400244813632]
      },
      properties: {
        title: 'Ti Amo caffe',
        description: ''
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.634520093370732, 44.70798378782625]
      },
      properties: {
        title: 'Caffe Siveri',
        description: ''
      }
    },
  ]
};
// add markers to map
for (const feature of bar.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'Markerbar';
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
