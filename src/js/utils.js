/*
* Utils
* Setup data & debug
*/


export function currentGameId() {
    let appData = JSON.parse(localStorage.getItem("medic_data"));
    let currentGameID = appData.defaultSettings.currentGame;
    return currentGameID;
}


export function gameData() {
    let appData = JSON.parse(localStorage.getItem("medic_data"));
    let currentGameID = appData.defaultSettings.currentGame;
    let currentGame = appData.games.filter(g => g.id === currentGameID);
    //return currentGame[0];
}


/*
* Function date & time
*/
export function formatDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months start at 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export function formatTime(dateString) {
    const date = new Date(dateString);

    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");

    return `${hours}h${minutes}`;
}


