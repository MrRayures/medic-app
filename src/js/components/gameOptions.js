// New component
class GameOptions extends HTMLElement {
    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);
        
        let gameName = currentGame[0].name;
        let gameLocation = currentGame[0].location;
        let gameDeath = currentGame[0].settings.death;
        let gameHealTime = currentGame[0].settings.healTime;

        if(gameDeath != true) {
            gameDeath = "";
        } else {
            gameDeath = "checked";
        }

        this.innerHTML = /*html*/`
            <form class="c-form" data-form class="c-form" action="/game">
                <div class="c-field">
                    <div class="c-field__wrapper">
                        <label class="c-label" for="game_location"> Lieu </label>
                        <input class="c-input" value="${gameLocation}" type="text" id="game_location" />
                    </div>
                </div>

                <div class="c-field">
                    <div class="c-field__wrapper">
                        <label class="c-label" for="game_healing_timing">Temps de soin moyen (<i>en seconde</i>)</label>
                        <input class="c-input" value="${gameHealTime}" type="number" step="1" min="0" id="game_healing_timing" />
                    </div>
                    <p class="c-label__hint">
                        Par defaut de 30s.<br />
                        Cela affectera les temps de diagnostique et de soins afin de se rapprocher au maximum de la valeur choisie.
                    </p>
                </div>

                <div class="c-field c-field--checkbox ">
                    <div class="c-field__wrapper">
                        <input class="c-checkbox" type="checkbox" id="game_death" ${gameDeath}/>
                        <label class="c-label" for="game_death">Mort active ?</label>
                    </div>
                    <p class="c-label__hint">Active le risque de décéder d'une blessure grave<br /></p>
                </div>

                <div class="c-buttonGroup">
                    <button type="submit" id="save_button" class="c-button c-button--primary">Mettre à jour</button>
                    <a data-link href="/game" class="c-button c-button--secondary">Annuler</a>
                </div>
            </form>
        `;

        const saveButton = document.getElementById('save_button');

        saveButton.onclick = () => {
            const newGameLocation = document.getElementById("game_location").value;
            const newGameHealing_timing = document.getElementById("game_healing_timing").value;
            const newGameDeath = document.getElementById("game_death").checked;

            currentGame[0].location = newGameLocation;
            currentGame[0].settings.death = newGameDeath;
            currentGame[0].settings.healTime = newGameHealing_timing;

            localStorage.setItem("medic_data", JSON.stringify(appData));

        }

    }


}

customElements.define("game-options", GameOptions);