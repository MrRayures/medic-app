// New component
class Injury extends HTMLElement {
    constructor() {
        super();
        
        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        // Current player data
        const currentPlayer = currentGame[0].players[currentGame[0].players.length - 1];
        let playerData = currentGame[0].players.filter(p => p.id === currentPlayer.id);

        let playerInjury = playerData[0].injury;
        let playerInjuryName = appData.injury.filter(i => i.id === playerData[0].injury);

         this.innerHTML = /*html*/`
           <div class="c-blockCorner u-full-h">
                <span class="c-icon-${playerInjuryName[0].id} c-icon--left"></span>
                <p class="u-font-48 u-font-700 u-text-uppercase u-line-height-xs">${playerInjuryName[0].name}</p>
            </div>
        `;

        
        
    }

    

}
customElements.define("player-injury", Injury);