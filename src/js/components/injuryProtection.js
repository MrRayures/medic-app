// New component
class InjuryProtection extends HTMLElement {
    constructor() {
        super();
        
        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        // Current player data
        const currentPlayer = currentGame[0].players[currentGame[0].players.length - 1];
        let playerData = currentGame[0].players.filter(p => p.id === currentPlayer.id);
        
        let injuryLocalisationName = appData.localisation.filter(i => i.id === playerData[0].localisation);

        this.innerHTML = `
            <div class="c-buttonGroup">
                <a data-link href="/injury-check" data-protection="true" type="submit" class="c-button c-button--secondary">Oui</a>
                <a data-link href="/injury-check" data-protection="false" type="submit" class="c-button c-button--secondary">Non</a>
            </div>

            <ul class="c-list c-list--corner u-mt-32">
                <li class="c-list__item">Zone blessé : <span>${injuryLocalisationName[0].name}</span></li>
            </ul>
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