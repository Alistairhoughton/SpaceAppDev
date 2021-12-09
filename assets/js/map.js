// break {

  var nameText = document.getElementById("storedName");
  nameText.innerHTML = localStorage.getItem("name");
  console.log(localStorage);

L.mapbox.accessToken =
  "pk.eyJ1IjoiaGFra2kxODEwIiwiYSI6ImNrd21reTdzajJjdjIyeG5zanY4M2FwN3UifQ._Y_FFA1j6916TXqVusZ6Lg";
var map = L.map("map", {
  center: [0, 0],
  zoom: 4,
  minZoom: 3,
  maxZoom: 12,
});

document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';

L.tileLayer(
  "https://api.mapbox.com/styles/v1/hakki1810/ckwmmq08p69z514oclunhvyfu/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGFra2kxODEwIiwiYSI6ImNrd21reTdzajJjdjIyeG5zanY4M2FwN3UifQ._Y_FFA1j6916TXqVusZ6Lg",
  {
    tileSize: 512,
    zoomOffset: -1,
    
  }
).addTo(map);

function issData() {
  fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data.latitude;
      var lon = data.longitude;
      console.log("iss data", data);
      issPan(lat, lon);
      // issPan2(lat, lon);
      
      document.querySelector(".latdata").textContent =
        "Latitude: " + data.latitude;
      document.querySelector(".londata").textContent =
        "Longitude: " + data.longitude;
      document.querySelector(".vel").textContent =
          "Velocity: " + Math.round(data.velocity) + " km/h"; 
      document.querySelector(".alti").textContent =
          "Alititude: " + Math.round(data.altitude)  + " Kilometers"
    });
    
  }
  
  
  function issPan(lat, lon) {
    iss.setLatLng([lat, lon]);
    map.panTo(([lat, lon]), (animate = true));
    
}

// function issPan2(lat, lon) {
//   map.panTo(([lat, lon]), (animate = true));
// }

var spaceIcon = L.icon({
  iconUrl:"../assets/media/spaceship2.svg",
  iconSize: [105, 75],
  iconAnchor: [25, 15],
  popupAnchor: [50, 25],
});

var iss = L.marker([0, 0], { icon: spaceIcon }).addTo(map);

var updateData = setInterval(issData,1500)

var checkbox = document.querySelector(".togglebutton");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});