(function(window){
    //I recommend this
    'use strict';
    function define_leafletMap(){
        var leafletMap = {};
        //var name = "Norwegian Polar Institute";

        leafletMap.createmap  = function(){
            //alert("Hello from the " + name );
            console.log(formdata);

            var map = L.map('mapid').setView([78.000, 16.000], 4);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(map);

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

        }
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