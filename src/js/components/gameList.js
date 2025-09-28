// New component
class GameList extends HTMLElement {
    constructor() {
        super();

        function formatDate(dateString) {
            const date = new Date(dateString);

            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // months start at 0
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        }

        let appData = JSON.parse(localStorage.getItem("medic_data"));

        this.list = document.createElement('ul');
        this.list.classList.add('c-gameList');

        this.appendChild(this.list);

        
        if (appData.games.length  === 0) {
            this.listItem = document.createElement('li');
            this.listItem.classList.add('c-gameList__item');
            this.listItem.innerHTML = `
                <p class="u-mb-16">Aucune partie</p>   
                <a href="/new-game" class="c-button c-button--secondary">Créer une partie</a>
            `;
            this.list.appendChild(this.listItem);
        } else {
            appData.games.forEach(game => {
                this.listItem = document.createElement('li');
                this.listItem.classList.add('c-gameList__item');

                // Display infos
                let currentGameID = appData.defaultSettings.currentGame;

                let gameID = game.ID;
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

                if (game.ID === currentGameID) {
                    this.listItem.innerHTML = `
                        <div id="${gameID}" class="c-gameCard">
                            <div class="c-gameCard__infos">
                                <h2 class="c-gameCard__title">${gameName}</h2>
                                <p>${formatDate(gameDate)} ${gameLocation}</p>
                                <p>Mort active: ${gameDeath}</p>
                                <p>Temps de soin: ${gameHealTime}</p>
                                <p>Patients : ${gamePlayers}</p>
                            </div>
                            <form action="/load-game">
                                <p class="c-button c-button--ghost">Partie chargé</p>     
                                <button data-id="${gameID}" data-delete type="submit" class="c-button c-button--ghost c-icon-delete"><span class="c-button__content">Supprimer</span></button>
                            </form>
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
                            <form action="/load-game">  
                                <button data-id="${gameID}" data-load type="submit" class="c-button c-button--secondary">Charger</button>
                                <button data-id="${gameID}" data-delete type="submit" class="c-button c-button--ghost c-icon-delete"><span class="c-button__content">Supprimer</span></button>
                            </form>
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
            

            // delete game
            let deletButton = this.querySelectorAll("[data-delete]");
            deletButton.forEach((el) => {
                el.onclick = () => {
                    let gameID = el.getAttribute("data-id");
                    
                    appData.games = appData.games.filter(g => g.ID !== gameID);

                    if (appData.defaultSettings.currentGame === gameID) {
                        appData.defaultSettings.currentGame = null;
                    }

                    localStorage.setItem("medic_data", JSON.stringify(appData));

                };
            });
        }
        
     
    }
}
customElements.define("game-list", GameList);