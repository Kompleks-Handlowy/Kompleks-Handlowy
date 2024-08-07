// script.js
function updateDateTime() {
    const dateTimeElement = document.getElementById('datetime');
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: '2-digit', minute: '2-digit'
    };
    dateTimeElement.textContent = now.toLocaleDateString('pl-PL', options);
}

// Wywołanie funkcji po załadowaniu strony
window.onload = function() {
    updateDateTime();
    // Aktualizacja co minutę
    setInterval(updateDateTime, 60000);
};
