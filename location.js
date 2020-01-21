
var mymap = L.map('mapid').setView([-7.732890, 113.700250], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <ahref="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 20,
id: 'mapbox.streets',
accessToken:'pk.eyJ1IjoiaWZpa2FyaWZpbiIsImEiOiJjamxndm83cTQwZjYwM3BvMHBma3dndGJqIn0.6LyWJiWv-yvp7mNPbyebYA'}).addTo(mymap);

(async () => {
 const URL="location.json";
 try {
   let resp= await(fetch(URL));
   let resp2= await resp.json();
   localStorage.setItem('places',JSON.stringify(resp2.places));
 } catch(err){
   console.log(err);
 }
})( );

function assignMarker(p, index) {
  var marker= L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
  marker.on("click", function(){
   var gambar = document.getElementById("gambar");
   gambar.src=p.foto;
   var rev = document.getElementById("deskripsi");
   rev.innerHTML=p.review;
   var nm = document.getElementById("nm");
   nm.innerHTML=p.sponsor;
  })
}
let places = JSON.parse(localStorage.getItem('places'));
//console.log(places);
places.forEach(assignMarker);
