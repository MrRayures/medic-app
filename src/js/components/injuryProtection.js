// New component
class InjuryProtection extends HTMLElement {
    constructor() {
        super();
        
        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.ID === currentGameID);

        // Current player data
        const currentPlayer = currentGame[0].players[currentGame[0].players.length - 1];
        let playerData = currentGame[0].players.filter(p => p.ID === currentPlayer.ID);
        
        let injuryLocalisationName = appData.localisation.filter(i => i.ID === playerData[0].localisation);

        this.innerHTML = `
            <form action="/injury-check">   
                <ul class="c-list c-list--corner u-mb-32">
                    <li class="c-list__item">Zone blessé : <span>${injuryLocalisationName[0].name}</span></li>
                </ul>
                <div class="c-buttonGroup">
                    <button data-protection="true" type="submit" class="c-button c-button--primary">Oui</button>
                    <button data-protection="false" type="submit" class="c-button c-button--secondary">Non</button>
                </div>
            </form>
        `;


        // set localisation
        let protectionButton = this.querySelectorAll("[data-protection]");
        protectionButton.forEach((el) => {
            el.onclick = () => {
                let playerProtection = el.getAttribute("data-protection") === "true";
                playerData[0].protection = playerProtection;
                localStorage.setItem("medic_data", JSON.stringify(appData));
            };
        });
    }

    

}
customElements.define("injury-protection", InjuryProtection);