import { formatDate, formatTime } from '../utils.js';

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
        this.listPlayers.classList.add('c-patientList');
        this.appendChild(this.listPlayers);

        if(currentGame[0].players.length != 0) {
            currentGame[0].players.reverse().forEach((player, index) => {
                //let count = index + 1;
                let count = currentGame[0].players.length - index;

                this.listItem = document.createElement('li');
                this.listItem.classList.add('c-patientList__item');

                let playerID = player.id;
                let playerName = player.name;
                let playerDate = formatDate(player.date);
                let playerTime= formatTime(player.date);
                let playerLocalisation = appData.localisation.filter(el => el.id === player.localisation);
                let playerInjury = appData.injury.filter(el => el.id === player.injury);
                let playerProtection = player.protection;
                let playerStatus = player.dead;
                let playerStatusClass = "";

                if(playerStatus === true) {
                    playerStatus = "Décédé ☠️ ";
                    playerStatusClass = "c-patient--dead"
                } else {
                    playerStatus = "Soigné"
                }

                if(playerProtection === true) {
                    playerProtection = "Oui";
                } else {
                    playerProtection = "Non"
                }

                this.listItem.innerHTML = `
                    <div class="c-patient ${playerStatusClass}">
                        <div class="c-patient__content">
                            <span class="c-patient__order">${count}</span>
                            <h2 class="c-patient__title">
                                #ID${playerID} - ${playerTime} 
                            </h2>
                            <div class="c-patient__injury">
                                <p>Date : ${playerDate}</p>
                                <p>Status : ${playerStatus}</p>
                                <p>Zone : ${playerLocalisation[0].name}</p>
                                <p>Protection ballistique : ${playerProtection}</p>
                                <p>Blessure : ${playerInjury[0].name}</p>
                                
                            </div>
                        </div>
                    </div>
                `;
                this.listPlayers.appendChild(this.listItem);
            })
        } else {
            this.listItem = document.createElement('li');
            this.listItem.classList.add('c-patientList__item');
            this.listItem.innerHTML = `
                <p>C'est vide... au boulot !</p>
            `;
            this.listPlayers.appendChild(this.listItem);
        }

    }
    
}



customElements.define("game-statsplayer", GameStatsPlayers);