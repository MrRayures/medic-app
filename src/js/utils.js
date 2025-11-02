/*
* Utils
* Setup data & debug
*/

/*
* Application Data
* Utilitaires
*/

let appData = JSON.parse(localStorage.getItem("medic_data"));


// Data: array
export function data() {
    return appData;
}


// Settings data: array
export function settingsData() {
    return appData.defaultSettings;
}

// Game data: array
export function gameData() {
    return appData.games;
}


// Injury data: array
export function injuryData() {
    return appData.injury;
}


// Localisation data: array
export function localisationData() {
    return appData.localisation;
}


// Current Game data: array
export function currentGameData() {
    let currentGameId = appData.defaultSettings.currentGame;
    let currentGame = appData.games.filter(g => g.id === currentGameId);

    return currentGame[0];
}





/*
* Function date & time
*/

export function formatDate(dateString) {
    const date = new Date(dateString);
    const shifted = new Date(date.getTime() + 60 * 60000); // +1 hour

    const day = String(shifted.getUTCDate()).padStart(2, '0');
    const month = String(shifted.getUTCMonth() + 1).padStart(2, '0'); // months start at 0
    const year = shifted.getUTCFullYear();

    return `${day}/${month}/${year}`;
}

export function formatTime(dateString) {
    const date = new Date(dateString);
    const shifted = new Date(date.getTime() + 60 * 60000); // +1 hour

    const hours = String(shifted.getUTCHours()).padStart(2, "0");
    const minutes = String(shifted.getUTCMinutes()).padStart(2, "0");

    return `${hours}h${minutes}`;
}


