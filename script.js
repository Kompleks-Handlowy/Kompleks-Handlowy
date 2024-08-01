// script.js

// Funkcja aktualizująca datę i godzinę
function updateDateTime() {
    const dateElement = document.getElementById('date');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('pl-PL', options);
    const time = now.toLocaleTimeString('pl-PL');

    dateElement.innerHTML = `<p>Data: ${date}</p><p>Godzina: ${time}</p>`;
}

// Funkcja pobierająca dane o pogodzie
async function fetchWeather() {
    const weatherElement = document.getElementById('weather');
    const apiKey = 'YOUR_API_KEY'; // Zamień na swój klucz API OpenWeatherMap
    const city = 'Lublin';

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`);
        const data = await response.json();
        const weather = data.weather[0].description;
        const temperature = data.main.temp;
        weatherElement.innerHTML = `Aktualna pogoda w Lublinie: ${weather}, ${temperature.toFixed(1)}°C`;
    } catch (error) {
        weatherElement.innerHTML = 'Nie można pobrać pogody.';
    }
}

// Aktualizacja daty, godziny i pogody przy ładowaniu strony
window.onload = () => {
    updateDateTime();
    fetchWeather();
};
