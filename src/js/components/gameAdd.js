// New component
class gameAdd extends HTMLElement {

    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);
        let defaultHealTime = appData.defaultSettings.healTime;


        this.innerHTML = `
            <form class="c-form" data-form action="/game">
                <div class="c-field">
                    <div class="c-field__wrapper">
                        <label class="c-label" for="game_name">
                            Nom de la partie <i>(obligatoire)</i>
                        </label>
                        <input required class="c-input" value="" type="text" id="game_name" />
                    </div>
                </div>

                <div class="c-field">
                    <div class="c-field__wrapper">
                        <label class="c-label" for="game_location"> Lieu </label>
                        <input class="c-input" value="" type="text" id="game_location" />
                    </div>
                </div>

                <div class="c-field">
                    <div class="c-field__wrapper">
                        <label class="c-label" for="game_healing_timing">Temps de soin moyen (<i>en seconde</i>)</label>
                        <input class="c-input" value="${defaultHealTime}" type="number" step="1" min="0" id="game_healing_timing" />
                    </div>
                    <p class="c-label__hint">
                        Par defaut de 30s.<br />
                        Cela affectera les temps de diagnostique et de soins afin de se rapprocher au maximum de la valeur choisie.
                    </p>
                </div>

                <div class="c-field c-field--checkbox ">
                    <div class="c-field__wrapper">
                        <input class="c-checkbox" value="" type="checkbox" id="game_death" />
                        <label class="c-label" for="game_death">Mort active ?</label>
                    </div>
                    <p class="c-label__hint">Active le risque de décéder d'une blessure grave<br /></p>
                </div>

                <div class="c-buttonGroup">
                    <button type="submit" id="save_button" class="c-button c-button--primary">Créer la partie</button>
                    <a data-link href="/" class="c-button c-button--secondary">Annuler</a>
                </div>
            </form>
        `;
        

        const saveButton = document.getElementById('save_button');

        saveButton.onclick = () => {
            const gameId = Math.floor(Math.random() * Date.now()).toString(16);
            const gameDate = new Date().toISOString();
            const gameName = document.getElementById("game_name").value;
            const gameLocation = document.getElementById("game_location").value;
            const gameHealing_timing = document.getElementById("game_healing_timing").value;
            const gameDeath = document.getElementById("game_death").checked;

            //console.log(gameDeath);

            saveGameData(gameId, gameName, gameDate, gameLocation, gameHealing_timing, gameDeath);
        };
        

        function saveGameData(id, name, date, location, healing, death) {

            // Simple validation
            if (!name || name.trim() === "") {
                //alert("Name is required!");
                //return false;
            }

            // Store data in localStorage
            const gameData = {
                id: id,
                name: name.trim(),
                date: date,
                location: location.trim(),
                settings: {
                    death: death,
                    healTime: healing
                },
                players: []
            };

            //console.log(gameData);

            appData.defaultSettings.currentGame = id;
            appData.games.push(gameData);
            localStorage.setItem("medic_data", JSON.stringify(appData));

            //console.log(appData);

            //return true;

        }

        
    }

    connectedCallback() {}

    attributeChangedCallback() {}

}

customElements.define("game-add", gameAdd);