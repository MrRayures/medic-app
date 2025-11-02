// New component
class PlayerAdd extends HTMLElement {
    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        // Delete patient not fully treated healed or dead ;)
        currentGame[0].players = currentGame[0].players.filter(player => {
            return player.treated === true; // keep only healed patients
        });
        // Update localStorage if needed
        localStorage.setItem("medic_data", JSON.stringify(appData));
        

        let label;
        if (this.hasAttribute("data-label")) {
            this.label = this.getAttribute("data-label");
        } else {
            this.label = "Soigner le joueur";
        }
        
        
        this.innerHTML = /*html*/`
            <a data-link href="/injury-localisation" id="addButton" class="c-button c-button--tile c-icon-person-standing c-button--primary">
                ${this.label}
            </a>
            
        `;

        let addButton = this.querySelector("#addButton");
        addButton.onclick = () => {

            const playerDate = new Date().toISOString();

            let playersLength = currentGame[0].players.length;
            let playerID = 0;

            if(playersLength === 0) {
                playerID = 1;
            } else {
                playerID = playersLength + 1;
            }

            const patientData = {
                id: ("00" + playerID).slice(-3),
                name: "",
                date: playerDate,
                localisation: "",
                injury: "",
                protection: false,
                dead: false,
                treated: false
            };
            
            currentGame[0].players.push(patientData);
            localStorage.setItem("medic_data", JSON.stringify(appData));

            //console.log(appData);
        };
       
    }

}



customElements.define("player-add", PlayerAdd);