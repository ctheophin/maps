var mymap = L.map('mapid').setView([39.644, -95.239], 3.77);
for ( let i = 0; i< places.length; i++) {
  L.marker( [ places[i].latitude,places[i].longitude ])
  .bindPopup( '<h3>' + places[i].placename + '</h3>' + '<p>' + places[i].descrip + '</p>' )
  .addTo(mymap);
}
L.tileLayer('https://api.mapbox.com/styles/v1/ctheophin/cjp1gs932168r2rnzomljpopg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY3RoZW9waGluIiwiYSI6ImNqb3R6cWFnaTBjZjAzcW5xbzNxc2V5dW4ifQ.2MBRLy8jiOtZDQ4BwCzlVw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);
