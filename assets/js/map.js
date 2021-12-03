L.mapbox.accessToken =
  "pk.eyJ1IjoiaGFra2kxODEwIiwiYSI6ImNrd21reTdzajJjdjIyeG5zanY4M2FwN3UifQ._Y_FFA1j6916TXqVusZ6Lg";
var map = L.map("map", {
  center: [0, 0],
  zoom: 3,
  minZoom: 2,
  maxZoom: 6,
});

L.tileLayer(
  "https://api.mapbox.com/styles/v1/hakki1810/ckwmmq08p69z514oclunhvyfu/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGFra2kxODEwIiwiYSI6ImNrd21reTdzajJjdjIyeG5zanY4M2FwN3UifQ._Y_FFA1j6916TXqVusZ6Lg",
  {
    tileSize: 512,
    zoomOffset: -1,
    attribution:
      '© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
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
      // console.log("iss data", data);
      // console.log("lat", lat);
      // console.log("lon", lon);
    });
  issPan(lat, lon);
}

function issPan(lat, lon) {
  iss.setLatLng(lat, lon);
  map.panTo((lat, lon), (animate = true));
}

var spaceIcon = L.icon({
  iconUrl:
    "https://toppng.com/uploads/preview/red-circle-1155276042606ekqvli9k.png",
  iconSize: [50, 50],
  iconAnchor: [25, 15],
  popupAnchor: [50, 25],
});

var iss = L.marker([0, 0], { icon: spaceIcon }).addTo(map);

issData();
issPan();

// var updateData = setInterval(issPan,1000)
