// New component
class gameTitle extends HTMLElement {
    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);
        console.log(currentGame[0].name);

        this.innerHTML = /*html*/`
            <h1 class="c-title">${currentGame[0].name}</h1>
        `;
        
    }

}

customElements.define("game-title", gameTitle);

