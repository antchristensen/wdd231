document.addEventListener("DOMContentLoaded", async () => {
    const apiKey = "60e330121d372ee8e765d641446dc0e1"; 
    const city = "Moab";
    const country = "US";
    
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&appid=${apiKey}`;

    try {
      
        const weatherResponse = await fetch(weatherURL);
        const weatherData = await weatherResponse.json();

       
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();

       
        document.getElementById("current-temp").textContent = `${Math.round(weatherData.main.temp)}°F`;
        document.getElementById("current-desc").textContent = weatherData.weather[0].description;

        
        const forecastList = document.getElementById("forecast");
        forecastList.innerHTML = "";

        const dailyForecasts = forecastData.list.filter((reading) => reading.dt_txt.includes("12:00:00")).slice(0, 3);
        
        dailyForecasts.forEach((day) => {
            const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
            const temp = `${Math.round(day.main.temp)}°F`;
            const desc = day.weather[0].description;
            
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${date}:</strong> ${temp} - ${desc}`;
            forecastList.appendChild(listItem);
        });

    } catch (error) {
        console.error("Weather data fetch failed:", error);
        document.getElementById("current-temp").textContent = "N/A";
        document.getElementById("current-desc").textContent = "N/A";
        document.getElementById("forecast").innerHTML = "<li>Weather unavailable.</li>";
    }
});
