const ipstackAccessKey = '081f2669b09d4c859d2202735241609';

fetch(`http://api.weatherapi.com/v1/current.json?key=081f2669b09d4c859d2202735241609&q=auto:ip&aqi=no`)

  .then(response => response.json())
  .then(data => {
    
        const locationElement = document.getElementById('location');
        const city = data.location.name
        const region = data.location.region;
        const country = data.location.country;
        const latitude = data.location.lat;
        const longitude = data.location.lon;

        locationElement.innerHTML = `Your location: ${city}, ${region}, ${country}`;

        const locationRow = document.getElementById('locationRow');
        locationRow.innerHTML = `
          <td>${city}</td>
          <td>${region}</td>
          <td>${country}</td>
          <td>${latitude}</td>
          <td>${longitude}</td>
        `;     
        const weatherTableBody = document.getElementById('weatherTableBody');
        weatherTableBody.innerHTML = `
          <tr>
            <td>${data.current.temp_c}°C</td>
            <td>${data.current.condition.text}</td>
            <td>${data.current.wind_kph} km/h</td>
            <td>${data.current.wind_degree}°</td>
            <td>${data.current.pressure_mb} mb</td>
            <td>${data.current.precip_mm} mm</td>
            <td>${data.current.humidity}%</td>
          </tr>
        `;

  })
  .catch(error => {
    console.error('Error fetching IP address data:', error);
    const locationElement = document.getElementById('location');
    locationElement.innerHTML = 'Error fetching IP address data.';
  });


