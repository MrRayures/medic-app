import {formatDate} from '../utils.js';
import {formatTime} from '../utils.js';

// New component
class PlayerStats extends HTMLElement {

    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        // Current player data
        const currentPlayer = currentGame[0].players[currentGame[0].players.length - 1];
        let playerData = currentGame[0].players.filter(p => p.id === currentPlayer.id);

        let statusIcon;
        let playerID = playerData[0].id;
        let playerDate = formatDate(playerData[0].date);
        let playerTime = formatTime(playerData[0].date);
        let playerInjuryLocalisation = appData.localisation.filter(i => i.id === playerData[0].localisation);
        let playerProtection = playerData[0].protection;
        let playerInjury = appData.injury.filter(i => i.id === playerData[0].injury);
        let playerStatus = playerData[0].dead;
        
        //console.log(playerInjury);

        if(playerProtection === true) {
            playerProtection = "Oui";
        } else {
            playerProtection = "Non";
        }

        if(playerStatus === true) {
            playerStatus = "Décédé ☠️ ";
            statusIcon = "dead";
        } else {
            playerStatus = "Soigné";
            statusIcon = "win ";
        }

        this.innerHTML = `
            <div class="c-blockCorner u-full-h">
                <span class="c-icon-${statusIcon} c-icon--left"></span>
                <ul class="c-list">
                    <li class="c-list__item"><span>#ID${playerID}</span></li>
                    <li class="c-list__item">Status: <span>${playerStatus}</span></li>
                    <li class="c-list__item">Le <span>${playerDate}</span> à <span>${playerTime}</span></li>
                    <li class="c-list__item">Zone blessé : <span>${playerInjuryLocalisation[0].name}</span></li>
                    <li class="c-list__item">Blessure : <span>${playerInjury[0].name}</span></li>
                    <li class="c-list__item">Protection ballistique : <span>${playerProtection}</span></li>
                </ul>
            </div>
        `;
        
    }

}



customElements.define("player-stats", PlayerStats);