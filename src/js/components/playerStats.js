// New component
class PlayerStats extends HTMLElement {

    constructor() {
        super();

        function formatDate(dateString) {
            const date = new Date(dateString);

            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // months start at 0
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        }

        function formatTime(dateString) {
            const date = new Date(dateString);

            const hours = String(date.getUTCHours()).padStart(2, "0");
            const minutes = String(date.getUTCMinutes()).padStart(2, "0");

            return `${hours}h${minutes}`;
        }

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.ID === currentGameID);

        // Current player data
        const currentPlayer = currentGame[0].players[currentGame[0].players.length - 1];
        let playerData = currentGame[0].players.filter(p => p.ID === currentPlayer.ID);

        let playerID = playerData[0].ID;
        let playerDate = formatDate(playerData[0].date);
        let playerTime = formatTime(playerData[0].date);
        let playerInjuryLocalisation = appData.localisation.filter(i => i.ID === playerData[0].localisation);
        let playerProtection = playerData[0].protection;
        let playerInjury = appData.injury.filter(i => i.ID === playerData[0].injury);
        let playerStatus = playerData[0].dead;
        
        console.log(playerInjury);

        if(playerProtection === true) {
            playerProtection = "Oui";
        } else {
            playerProtection = "Non";
        }

        if(playerStatus === true) {
            playerStatus = "Décédé ☠️ ";
        } else {
            playerStatus = "Soigné"
        }

        this.innerHTML = `
            <ul class="c-list c-list--corner u-mb-32">
                <li class="c-list__item"><span>#ID${playerID}</span></li>
                <li class="c-list__item">Status: <span>${playerStatus}</span></li>
                <li class="c-list__item">Le <span>${playerDate}</span> à <span>${playerTime}</span></li>
                <li class="c-list__item">Zone blessé : <span>${playerInjuryLocalisation[0].name}</span></li>
                <li class="c-list__item">Blessure : <span>${playerInjury[0].name}</span></li>
                <li class="c-list__item">Protection ballistique : <span>${playerProtection}</span></li>
            </ul>
        `;
        
    }

}



customElements.define("player-stats", PlayerStats);