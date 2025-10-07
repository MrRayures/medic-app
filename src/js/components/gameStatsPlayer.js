import {formatDate} from '../utils.js';
import {formatTime} from '../utils.js';

// New component
class GameStatsPlayers extends HTMLElement {

    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        // Create patients list
        this.listPlayers = document.createElement('ul');
        this.listPlayers.classList.add('c-patientList', 'u-mt-32');
        this.appendChild(this.listPlayers);

        currentGame[0].players.forEach((player, index) => {
            let count = index + 1;

            this.listItem = document.createElement('li');
            this.listItem.classList.add('c-patientList__item');

            let playerID = player.id;
            let playerName = player.name;
            let playerDate = formatDate(player.date);
            let playerTime= formatTime(player.date);
            let playerLocalisation = player.localisation;
            let playerInjury = player.injury;
            let playerProtection = player.protection;
            let playerStatus = player.dead;

            if(playerStatus === true) {
                playerStatus = "Décédé ☠️ ";
            } else {
                playerStatus = "Soigné"
            }

            if(playerProtection === true) {
                playerProtection = "Oui";
            } else {
                playerProtection = "Non"
            }

            this.listItem.innerHTML = `
                <div class="c-patient">
                    <span class="c-patient__order">${count}</span>
                    <h2 class="c-patient__title">
                        #ID${playerID} - ${playerTime} 
                    </h2>
                    <div class="c-patient__injury">
                        <p>Date : ${playerDate}</p>
                        <p>Status : ${playerStatus}</p>
                        <p>Zone : ${playerLocalisation}</p>
                        <p>Protection ballistique : ${playerProtection}</p>
                        <p>Blessure : ${playerInjury}</p>
                        
                    </div>
                </div>
            `;
            this.listPlayers.appendChild(this.listItem);
        })
    }

}



customElements.define("game-statsplayer", GameStatsPlayers);