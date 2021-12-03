function issData() {
    fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("iss data", data);
        var lat = data.latitude;
        var lon = data.longitude;
        console.log(lat);
        console.log(lon);
      });
  };
  
  issData();
  // var updateData = setInterval(issData,1000)