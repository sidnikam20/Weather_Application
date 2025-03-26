const apiKey = "011c95c55ccb27da06b308b8f6fce4eb";  // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        
        document.getElementById("weather-info").innerHTML = `
            <p>🌆 <strong>City:</strong> ${data.name}, ${data.sys.country}</p>
            <p>🌡️ <strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p>🌬️ <strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p>💨 <strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            <p>🌥️ <strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById("weather-info").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
