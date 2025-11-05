// New component
class GameFooter extends HTMLElement {
    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        let playersLenght = currentGame[0].players.length;
        let playersID = "";

        if(playersLenght != 0) {
            const currentPlayer = currentGame[0].players[currentGame[0].players.length - 1];
            if(currentPlayer.treated != true) {
                playersID = `// Joueur #${currentPlayer.id}`
            }
        } 

        this.innerHTML = /*html*/`
            <div class="c-footer">
                <p>${currentGame[0].name} | ID#${currentGameID} ${playersID}</p>
            </div>
        `;

    }


}

customElements.define("game-footer", GameFooter);