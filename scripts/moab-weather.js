const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.5733&lon=-109.5498&units=imperial&appid=60e330121d372ee8e765d641446dc0e1';

async function apiFetch() {
    try {
        console.log("Fetching weather data...");

        const response = await fetch(url);
        console.log("Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Weather Data:", data); // Log full data for debugging

        // Call function to display the results
        displayResults(data);

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Function to display results in the HTML document
function displayResults(data) {
    const temp = data.main.temp;  // Current temperature
    const iconCode = data.weather[0].icon; // Weather icon code
    const description = data.weather[0].description; // Weather description

    // Update the webpage
    currentTemp.textContent = `${temp}°F`; // Display temp
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${iconCode}.png`); // Weather icon URL
    weatherIcon.setAttribute('alt', description); // Set alt text for accessibility
    captionDesc.textContent = description; // Set caption text
}

// Call the function to fetch and display weather data
apiFetch();
