var apiKey = 'z9pRWUcIVzfatJAKeH5sQatsuyXk7ZZsMD9POXUC';

// GET https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0

// function issData() {
//     fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         var lat = data.latitude;
//         var lon = data.longitude;
//         console.log("iss data", data);
//         issPan(lat, lon);
  
//         document.querySelector(".latdata").textContent =
//           "Latitude: " + data.latitude;
//         document.querySelector(".londata").textContent =
//           "Longitude: " + data.longitude;
//         document.querySelector(".vel").textContent =
//             "Velocity: " + Math.round(data.velocity) + " km/h"; 
//         document.querySelector(".alti").textContent =
//             "Alititude: " + Math.round(data.altitude)  + " Kilometers"
//       });
//     }

    function marsWeather () {
        fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('mars data', data);
        })
    }

    marsWeather()