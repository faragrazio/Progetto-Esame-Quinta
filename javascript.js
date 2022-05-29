mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyYWdyYXppbyIsImEiOiJjbDJnZmoyaWYwM2owM25xd2FxYWZzdTBtIn0.JDafX9t6_ZbxhR39L169-Q';
// Set bounds to polo scolastico.
const bounds = [
[10.635846, 44.702533], // Southwest coordinates
[10.631763, 44.710463] // Northeast coordinates
];
var scuola =[10.6373117,44.7059897];
const map = new mapboxgl.Map({

container: 'map', // container ID
style: 'mapbox://styles/faragrazio/cl3q00vxi006315ms0b69i24d/draft', // style URL
center: [10.635846, 44.702533], // starting position
zoom: 12, // starting zoom
maxBounds: bounds // Set the map's geographical boundaries.
});


//aggiunge i controlli di zoom e "rotazione mappa"
const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

map.addControl(
    new MapboxDirections({
    accessToken:'pk.eyJ1IjoiZmFyYWdyYXppbyIsImEiOiJjbDJnZmoyaWYwM2owM25xd2FxYWZzdTBtIn0.JDafX9t6_ZbxhR39L169-Q'
    }),
    'top-left'
    );

    /* 
Add an event listener that runs
  when a user clicks on the map element.
*/
map.on('click', (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ['polo-scolastico'] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  /* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
const popup = new mapboxgl.Popup({ offset: [0, -15] })
.setLngLat(scuola)
.setHTML(
  `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
)
.addTo(map);

});




/*


//ogni account ha bisogno del proprio token per poter utilizzare le funzionalità di mapblox
mapboxgl.accessToken = 
'pk.eyJ1IjoiZmFyYWdyYXppbyIsImEiOiJjbDJnZmoyaWYwM2owM25xd2FxYWZzdTBtIn0.JDafX9t6_ZbxhR39L169-Q';

// è l'api che ti fornisce la tua locazione attuale
navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation, { 
        enableHighAccuracy:true
    })
function successLocation(position) {
    console.log(position) //se andiamo su ispeziona e su console possiamo vedere l'altitudine e longitudine della nostra attuale posizione
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation() {
    setupMap([-2.24,53.48])
}

const bounds= [  
  
  [10.635846, 44.702533], // Southwest coordinates
  [10.631763, 44.710463] // Northeast coordinates
  
  ];
function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [10.635846, 44.702533], // starting position [lng, lat]
        zoom: 15, // starting zoom
        maxBounds: bounds
    });
    //aggiunge i controlli di zoom e "rotazione mappa"
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    map.addControl(
        new MapboxDirections({
        accessToken:'pk.eyJ1IjoiZmFyYWdyYXppbyIsImEiOiJjbDJnZmoyaWYwM2owM25xd2FxYWZzdTBtIn0.JDafX9t6_ZbxhR39L169-Q'
        }),
        'top-left'
        );

        const geojson = {
          'type': 'FeatureCollection',
          'features': [
          {
          'type': 'Feature',
          'properties': {
          'message': 'H&M',
          'iconSize': [10, 10]
            },
          'geometry': {
          'type': 'Point',
          'coordinates': [10.631003367214195,44.69885585089053]
            }
          },
    
          {
            'type': 'Feature',
            'properties': {
            'message': 'bar per i pischelli',
            'iconSize': [10, 10]
              },
            'geometry': {
            'type': 'Point',
            'coordinates': [10.6342104,44.7045491]
              }
            },
    
            {
              'type': 'Feature',
              'properties': {
              'message': 'Foo',
              'iconSize': [10, 10]
                },
              'geometry': {
              'type': 'Point',
              'coordinates': [10.631003367214195,44.69885585089053]
                }
              },
    
    
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
  
/*
    map.addLayer({
        id: 'points',
        source: pointsSource,
        type: 'circle',
        paint:{
        'circle-radius': 10,
        'circle-color' : 'skyblue'
        }
    });



    map.on( "click", e=>{
    const result = map.queryRenderedfeatures(e. point, { layers: ['point']});
    if(result.length){
    const popup=new mapboxgl.Popup ({ closebutton: false });
    popup.setLngLat (44.69885585089053, 10.631003367214195) //ci mostra il popup in base alla latitudine e longitudine che scriviamo
    .setHTML('<h1>MapBox</h1>test')
    .addTo(map)
    }
   });
}
*/

