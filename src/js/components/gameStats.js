import {formatDate} from '../utils.js';
import {formatTime} from '../utils.js';
import {gameData} from '../utils.js';

// New component
class GameStats extends HTMLElement {

    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        console.log(currentGame[0]);
        console.log(gameData());

        // Current player data
        let playerTotal = currentGame[0].players.length;
        let playerDead = currentGame[0].players.filter(p => p.dead).length;

        let playerProtected = currentGame[0].players.filter(p => p.protection).length;
        let playerProtectePercentage = (playerProtected / playerTotal) * 100;

        if(playerProtected.length != undefined){
            playerProtectePercentage = playerProtectePercentage.toFixed(2) + "%";

        } else {
            playerProtectePercentage = "0";
        }


        let mostCommonInjury;
        let mostCommonLocalisation;

        if(playerTotal != 0) {
            let injuryCounts = currentGame[0].players.reduce((array, player) => {
                array[player.injury] = (array[player.injury] || 0) + 1;
                return array;
            }, {});

            mostCommonInjury = Object.entries(injuryCounts).reduce((a, b) =>
                b[1] > a[1] ? b : a
            );

            let localisationCounts = currentGame[0].players.reduce((array, player) => {
                array[player.localisation] = (array[player.localisation] || 0) + 1;
                return array;
            }, {});

            mostCommonLocalisation = Object.entries(localisationCounts).reduce((a, b) =>
                b[1] > a[1] ? b : a
            );
        } else {
            mostCommonInjury = ["Aucune", "0"];
            mostCommonLocalisation = ["Aucune", "0"];
        }
        
        // Create stats list
        this.listStats = document.createElement('ul');
        this.listStats.classList.add('c-list', 'c-list--corner');
        this.listStats.innerHTML = `
            <li class="c-list__item">Total : <span>${playerTotal}</span></li>
            <li class="c-list__item">Soigné(s) : <span>${playerTotal - playerDead}</span></li>
            <li class="c-list__item">Décédé(s) : <span>${playerDead}</span></li>
            <li class="c-list__item">Zone la plus endommagée: <span>${mostCommonLocalisation[0]} (${mostCommonLocalisation[1]})</span></li>
            <li class="c-list__item">Blessure la plus courante : <span>${mostCommonInjury[0]} (${mostCommonInjury[1]})</span></li>
            <li class="c-list__item">Avec protection ballistique : <span>${playerProtectePercentage}</span></li>
        `;
        this.appendChild(this.listStats);
    }

}



customElements.define("game-stats", GameStats);