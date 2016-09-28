(function(window){
    //I recommend this
    'use strict';
    function define_leafletMap(){
        var leafletMap = {};


        leafletMap.createmap  = function(inputParams){


         /*     var map = new L.Map('mapid', {center: new L.LatLng(inputParams.lat, inputParams.lng), zoom: inputParams.zoom});
              var googleLayer = new L.Google('ROADMAP');
              map.addLayer(googleLayer); */


            var map = L.map(inputParams.cssmark, {
              fullscreenControl: true,
              fullscreenControlOptions: {
                position: 'topleft'
              }}).setView([inputParams.lat, inputParams.lng], inputParams.zoom);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(map);

            //Display coords on map if there are any
            var a = 0;
            while  ((inputParams.geoJson[a]) && (typeof inputParams.geoJson[a].geometry.coordinates !== 'undefined')) {
                 console.log(inputParams.geoJson[a].geometry.coordinates);

                 var marker = L.marker(inputParams.geoJson[a].geometry.coordinates).addTo(map);
                 //Add location as text
                 marker.bindPopup(inputParams.geoJson[a].properties.locality).openPopup();
                 a++;
            }

            //If we want the map to be editable, add drawing options
            if (inputParams.editable === 'y') {

                // Initialise the FeatureGroup to store editable layers
                var drawnItems = new L.FeatureGroup();
                map.addLayer(drawnItems);


                //Create a draw control
                var drawControl = new L.Control.Draw({
                    draw: {
                        position: 'topleft',
                        polygon: false,
                        polyline: false,
                        rectangle: true,
                        circle: false,
                        marker: false
                    },
                edit: { featureGroup: drawnItems, remove:true }
                });

                map.addControl(drawControl);


            map.on('draw:created', function (e) {
                var type = e.layerType,
                layer = e.layer;

                if (type === 'marker') {
                    // Do marker specific actions
                }

                // Do whatever else you need to. (save to db, add to map etc)
                map.addLayer(layer);
            });


            map.on('draw:edited', function (e) {
                var layers = e.layers;
                layers.eachLayer(function (layer) {
                //do whatever you want, most likely save back to db
                });
            });

        } //if editable



        } //createMap
        return leafletMap;
    }
    //define globally if it doesn't already exist
    if(typeof(leafletMap) === 'undefined'){
        window.leafletMap = define_leafletMap();
    }
    else{
        console.log("leafletMap already defined.");
    }
})(window);