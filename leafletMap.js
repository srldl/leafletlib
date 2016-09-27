(function(window){
    //I recommend this
    'use strict';
    function define_leafletMap(){
        var leafletMap = {};
        var name = "Norwegian Polar Institute";
        leafletMap.createmap  = function(){
            alert("Hello from the " + name );
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