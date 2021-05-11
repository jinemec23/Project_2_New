// // Creating map object
// var myMap = L.map("map", {
//   center: [34.0522, -118.2437],
//   zoom: 8
// });


// // Adding tile layer
// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);

// // Load in data
// var wineData = "Data/Wines_updated.csv";
// var worldJSON = "custom.geo.json"

// d3.csv(wineData).then(loadedData => {
//   console.log(loadedData)
// })


// d3.json(worldJSON).then(data => {
// console.log(data.features);
// var Country = L.geoJSON(data.features.name, {
//   onEachFeature: (feature, layer) => {
//     layer.bindPopup(`<h3>${data.features.name}</h3>`)
//   }
// })
// .addTo(myMap)

// map = L.choropleth(data, {
//   valueProperty: 'Country',
//   scale: ['white', 'purple'],
//   steps: 10, // number of breaks or steps in range
//   mode: 'q', // q for quantile, e for equidistant, k for k-means
//   style: {
//     color: '#fff', // border color
//     weight: 2,
//     fillOpacity: 0.8
//   },
//   //onEachFeature: function(columns, layer) {
//     //layer.bindPopup(`Winery: ${columns.Winery}`)
//   //}
// }).addTo(myMap)

// });

// var Country = worldJSON.properties

// // //Convert to JSON
// // var parsedCSV = Papa.parse("Wines.csv", {
// // download: true,
// // header: true,
// // complete: function(results) { //everything below runs only after the CSV has been loaded and processed.
// //     CountryHolder = L.geoJson(Country, { //defining the leaflet overlay layer that will house this data; polygons with location data is loaded in Country variable.,
// //             onEachFeature: function PBpopulate(feature, layer) { //will be executed for each item in the layer
// //                 var popupText = "";
// //                 var labelText = "";
// //                 if (features.properties && features.properties.name) {
// //                     popupText += "<b>" + features.properties.name.toString() + "</b>";
// //                     labelText = features.properties.name.toString();
// //                     //look up the CSV data for a row having the same name as the map item's name
// //                     var filtered = results.data.filter(function(data){return data.name == this;}, feature.properties.name.toString());
// //                     console.log(JSON.stringify(filtered));
// //                     popupText += "<br>" + JSON.stringify(filtered);
// //                     }
// //                 if (feature.properties && feature.properties.description) {
// //                     popupText += "<br>" + feature.properties.description.toString();
// //                     }
// //                 layer.bindPopup(popupText).bindLabel(labelText);
// //             }   //closing onEachFeature function
// //         }).addTo(myMap); //map layer created, added to "country" overlay layer
// // }   //Papa.parse's complete: section over
// // }); // Papa.parse function over.
// // console.log(parsedCSV)

// // Create a new choropleth layer
// // Binding a pop-up to each layer

// // map = L.choropleth(data, {
// //     valueProperty: 'Country',
// //     scale: ['white', 'purple'],
// //     steps: 10, // number of breaks or steps in range
// //     mode: 'q', // q for quantile, e for equidistant, k for k-means
// //     style: {
// //       color: '#fff', // border color
// //       weight: 2,
// //       fillOpacity: 0.8
// //     },
// //     //onEachFeature: function(columns, layer) {
// //       //layer.bindPopup(`Winery: ${columns.Winery}`)
// //     //}
// //   }).addTo(myMap)


// d3.csv('Data/Wines.csv', function(err, rows){
//       function unpack(rows, key) {
//           return rows.map(function(row) { return row[key]; });
//       }

//        var data = [{
//             type: 'choropleth',
//             locations: unpack(rows, 'country'),
//             z: unpack(rows, 'winery'),
//             text: unpack(rows, 'country'),
//             colorscale: [
//                 [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
//                 [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
//                 [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
//             autocolorscale: false,
//             reversescale: true,
//             marker: {
//                 line: {
//                     color: 'rgb(180,180,180)',
//                     width: 0.5
//                 }
//             },
//             tick0: 0,
//             zmin: 0,
//             dtick: 1000,
//             colorbar: {
//                 autotic: false,
//                 tickprefix: '$',
//                 title: 'GDP<br>Billions US$'
//             }
//       }];

//       var layout = {
//           title: '2014 Global GDP<br>Source: <a href="https://www.cia.gov/library/publications/the-world-factbook/fields/2195.html"> CIA World Factbook</a>',
//           geo:{
//               showframe: false,
//               showcoastlines: false,
//               projection:{
//                   type: 'mercator'
//               }
//           }
//       };
//       Plotly.newPlot("myDiv", data, layout, {showLink: false});
// });
// //add legend
// var legend = L.control({ position: "bottomright"});

// Creating map object
var myMap = L.map("map", {
  center: [34.0522, -118.2437],
  zoom: 8
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);



// Load in GeoJson data
var geoData = "https://opendata.arcgis.com/datasets/484f797a1abb4b6296bedf823895e609_15.geojson";

var geojson;

// Grab data with d3
d3.json(geoData).then(loadedData => {
  console.log(loadedData)

  // Create a new choropleth layer
  // Define what  property in the features to use
  // Set color scale
  // Number of breaks in step range
  // q for quartile, e for equidistant, k for k-means
  // Binding a pop-up to each layer
  
  geojson = L.choropleth(loadedData, {
    valueProperty: 'Region', // which property in the features to use
    scale: ['white', 'purple'],
    steps: 10,
    mode: 'q',
    style: {
      color: '#fff',
      weight: 2,
      fillOpacity: 0.8
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(`Winery: ${feature.properties.Name}<br>Region:<br>$${feature.properties.Region}`)
    }
  }).addTo(myMap)


  // Set up the legend
  var legend = L.control({ position: "bottomright"});

  // legend.onAdd = function() {
  //   var div = L.DomUtil.create("div", "info legend");
  //   var limits = geojson.options.limits;
  //   var colors = geojson.options.colors;
  //   var labels = [];
  // }

})

console.log(myMap); // should output the object that represents instance of Leaflet
if (myMap !== undefined && myMap !== null) {
  myMap.remove(); // should remove the map from UI and clean the inner children of DOM element
  console.log(myMap); // nothing should actually happen to the value of mymap
}