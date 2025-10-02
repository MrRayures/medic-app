// New component
class GameSettings extends HTMLElement {
    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        let gameDeath = currentGame[0].settings.death;
        let gameHealTime = currentGame[0].settings.healTime;

        if(gameDeath === true) {
            gameDeath = "Oui";
        } else {
            gameDeath = "Non"
        }

        this.innerHTML = /*html*/`
            <ul class="c-list c-list--corner">
                <li class="c-list__item">Temps de soin : <span>${gameHealTime}s</span></li>
                <li class="c-list__item">Mort active : <span>${gameDeath}</span></li>
            </ul>
        `;

    }


}

customElements.define("game-settings", GameSettings);