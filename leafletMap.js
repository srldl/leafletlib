(function(window){
    //I recommend this
    'use strict';
    function define_leafletMap(){
        var leafletMap = {};
        //var name = "Norwegian Polar Institute";

        leafletMap.createmap  = function(){
            //alert("Hello from the " + name );
            console.log(formdata);

        /*    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap); */

       var map = L.map('mapid').setView([78.000, 16.000], 4);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
}).addTo(map);

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