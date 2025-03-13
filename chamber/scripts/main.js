document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Fetch and display weather data (mocked for now)
    async function fetchWeather() {
        try {
            // This would be an actual API call
            const weatherData = {
                temp: "75°F",
                condition: "Partly Cloudy",
                high: "85°F",
                low: "52°F",
                humidity: "34%",
                sunrise: "7:30am",
                sunset: "9:59pm"
            };

            document.querySelector(".weather p").innerHTML = `<strong>${weatherData.temp}</strong> - ${weatherData.condition}`;
            document.querySelector(".forecast p").innerHTML = `Today: ${weatherData.high} | Wed: 89°F | Thu: 68°F`;
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    }
    fetchWeather();

    // Mobile Menu Toggle
    const menuToggle = document.createElement("button");
    menuToggle.textContent = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("nav").prepend(menuToggle);
    
    menuToggle.addEventListener("click", () => {
        document.querySelector("nav ul").classList.toggle("active");
    });
});
