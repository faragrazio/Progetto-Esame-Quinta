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
function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: center, // starting position [lng, lat]
        zoom: 15 // starting zoom
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
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [44.69885585089053, 10.631003367214195]
                },
                properties: {
                  title: 'Mapbox',
                  description: 'HM'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-122.414, 37.776]
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
