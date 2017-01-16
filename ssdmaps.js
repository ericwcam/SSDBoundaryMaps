$(document).ready(function() {
  var mymap = new L.Map('mapid');
  var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 11, maxZoom: 17, attribution: osmAttrib});	
  mymap.setView([45.3575,-122.845 ], 13);
  mymap.addLayer(osm);
 
  function addDataToMap(data, map) {
    var dataLayer = L.geoJson(data, {
	    style: function (feature) {
		  var area = feature.properties.area;
		  			if (area === undefined) {		  console.log("UNDEFINED"); } else { console.log(area); }
		  var es = areadata[area]['es']
		  var trans = 'walk';
		  if (areadata[area]['esbus'] > 0) {
		    trans= 'bus';
		  }
		  return style[es+'_'+trans];
   	    },
        onEachFeature: function(feature, layer) {
		  var area = feature.properties.area;

		  if (areadata[area]['esbus'] > 0) {
		    trans= 'bus';
		  }

          var popupText = "Area: " + feature.properties.area +"<br>";
	      popupText += "Elementary: "+ skoolname[ areadata[area]['es'] ] +"<br>";
	      if (areadata[area]['esbus'] > 0) {
			popupText += "Elementary Bus: "+ areadata[area]['esbus'] +"<br>";
		  } else {
		    popupText += "Elementary Walk Zone<br>";
		  }
          layer.bindPopup(popupText);
		  layer.on('mouseover', function (e) {
            this.openPopup();
        });
        layer.on('mouseout', function (e) {
            this.closePopup();
        });
		}
    });
    dataLayer.addTo(map);
  }

  $.getJSON("http://myplace.frontier.com/~eric.campbell/ssdmap/map.geojson", function(data) { 
    addDataToMap(data, mymap); 
  })
  .error(function(jqXHR, textStatus, errorThrown) {
      console.log("error " + textStatus);
       console.log("incoming Text " + jqXHR.responseText);
   })
 
   /* $.get(location.protocol + '//nominatim.openstreetmap.org/search?format=json&q='+address, function(data){
       console.log(data);
  });
  var popup = L.popup();
  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ll['']=[ "+e.latlng.lng+","+e.latlng.lat+"];")
      .openOn(mymap);
  }
  mymap.on('click', onMapClick);
*/
}); // end document.ready