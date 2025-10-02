import {formatDate} from '../utils.js';
import {currentGameId} from '../utils.js';



// New component
class GameList extends HTMLElement {
    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));

        this.list = document.createElement('ul');
        this.list.classList.add('c-gameList');

        this.appendChild(this.list);

        
        if (appData.games.length  === 0) {
            this.listItem = document.createElement('li');
            this.listItem.classList.add('c-gameList__item');
            this.listItem.innerHTML = `
                <div class="c-block">
                    <p class="u-mb-16">Aucune partie</p>   
                    <a data-link href="/new-game" class="c-button c-button--secondary">Créer une partie</a>
                </div>
            `;
            this.list.appendChild(this.listItem);
        } else {
            appData.games.forEach(game => {
                this.listItem = document.createElement('li');
                this.listItem.classList.add('c-gameList__item');

                // Display infos
                let currentGameID = currentGameId();

                let gameID = game.id;
                let gameName = game.name;
                let gameDate = game.date;
                let gameLocation = game.location;
                let gameDeath = game.settings.death;
                let gameHealTime = game.settings.healTime;
                let gamePlayers = game.players.length;


                if(gameLocation != "") {
                    gameLocation = `à ${gameLocation}`;
                }

                if(gameDeath === true) {
                    gameDeath = "Oui";
                } else {
                    gameDeath = "Non"
                }

                if(gameHealTime === "") {
                    gameHealTime = appData.defaultSettings.healTime;
                    
                }

                if (game.id === currentGameID) {
                    this.listItem.innerHTML = `
                        <div id="${gameID}" class="c-gameCard c-gameCard--loaded">
                            <div class="c-gameCard__infos">
                                <h2 class="c-gameCard__title">${gameName}</h2>
                                <p>${formatDate(gameDate)} ${gameLocation}</p>
                                <p>Mort active: ${gameDeath}</p>
                                <p>Temps de soin: ${gameHealTime}</p>
                                <p>Patients : ${gamePlayers}</p>
                            </div>
                            <div class="c-gameCard__actions">
                                <p><span class="c-icon-check c-icon--left"></span> Partie chargé</p>    
                                <button data-id="${gameID}" data-delete type="submit" class="c-button c-button--sm c-button--secondary c-button--icon-left c-icon-trash"><span class="c-button__content">Supprimer</span></button>
                            </div>
                        </div>
                    `;
                } else {
                    this.listItem.innerHTML = `
                        <div id="${gameID}" class="c-gameCard">
                            <div class="c-gameCard__infos">
                                <h2 class="c-gameCard__title">${gameName}</h2>
                                <p>${formatDate(gameDate)} ${gameLocation}</p>
                                <p>Mort active: ${gameDeath}</p>
                                <p>Temps de soin: ${gameHealTime}</p>
                                <p>Patients : ${gamePlayers}</p>
                            </div>
                            <div class="c-gameCard__actions">  
                                <button data-id="${gameID}" data-load type="submit" class="c-button c-button--secondary c-button--icon-left c-icon-upload">Charger</button>
                                <button data-id="${gameID}" data-delete type="submit" class="c-button c-button--sm c-button--secondary c-button--icon-left c-icon-trash"><span class="c-button__content">Supprimer</span></button>
                            </div>
                        </div>
                    `;
                }
                
                this.list.appendChild(this.listItem);
            });


            // Load game
            let loadButton = this.querySelectorAll("[data-load]");
            loadButton.forEach((el) => {
                el.onclick = () => {
                    let gameID = el.getAttribute("data-id");

                    appData.defaultSettings.currentGame = gameID;
                    localStorage.setItem("medic_data", JSON.stringify(appData));
                    
                    document.location.href="/game";
                };
            });
            

            // Delete game
            let deletButton = this.querySelectorAll("[data-delete]");
            deletButton.forEach((el) => {
                el.onclick = () => {
                    let gameID = el.getAttribute("data-id");
                    
                    // Remove from medic_data
                    appData.games = appData.games.filter(g => g.id !== gameID);

                    // Remove currentGame 
                    if (appData.defaultSettings.currentGame === gameID) {
                        appData.defaultSettings.currentGame = null;
                    }

                    // Delete listItem
                    document.getElementById(gameID).parentElement.remove();

                    localStorage.setItem("medic_data", JSON.stringify(appData));

                };
            });
        }
        
     
    }
}
customElements.define("game-list", GameList);