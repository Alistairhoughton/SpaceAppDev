var apiKey = 'z9pRWUcIVzfatJAKeH5sQatsuyXk7ZZsMD9POXUC';

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