var mymap = L.map('mapid').setView([40.845, -73.958], 11.04);
var marker = L.marker([40.928, -73.997]).addTo(mymap); // Bergenfield
let marker2 = L.marker([40.820, -73.945]).addTo(mymap); //Mahalia Jackson Elementary
let marker3 = L.marker([40.822,-73.945]).addTo(mymap);//Grandma's House
let marker4 = L.marker([40.915,-73.994]).addTo(mymap);//Hoover Elementary School
marker.bindPopup("I lived in Bergenfield from 1997-2002 then 2004-2005").openPopup();
marker2.bindPopup("This was my elementary school in New York </b><br>Mahalia Jackson Elementary.").openPopup();
marker3.bindPopup("My grandmother's house in Harlem.").openPopup();
marker4.bindPopup("This was my elementary school in Bergenfield.").openPopup();

L.tileLayer('https://api.mapbox.com/styles/v1/ctheophin/cjp0fq6o607le2tobewbhdqsa/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY3RoZW9waGluIiwiYSI6ImNqb3R6cWFnaTBjZjAzcW5xbzNxc2V5dW4ifQ.2MBRLy8jiOtZDQ4BwCzlVw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);
