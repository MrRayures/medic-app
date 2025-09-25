// New component
class gameAdd extends HTMLElement {

     static get observedAttributes () {
        return ['value']
    }

    constructor() {
        super();

        /*
        this.form = document.createElement('form');


        // Field game_name
        this.field_name = document.createElement('div');
        this.field_name.classList.add('c-field');

        this.input_name = document.createElement('input');
        this.input_name.classList.add('c-input');
        this.input_name.setAttribute("id", "game_name");


        //Button group

        // Button Save
        this.button_save = document.createElement('button');
        this.button_save.innerHTML = "Créer la partie";
        this.button_save.classList.add('c-button', 'c-button--primary');
        this.button_save.setAttribute("id", "save_button");
        this.button_save.setAttribute("type", "button");

        // Button Save
        this.button_save = document.createElement('button');
        this.button_save.innerHTML = "Créer la partie";
        this.button_save.classList.add('c-button', 'c-button--primary');
        this.button_save.setAttribute("id", "save_button");
        this.button_save.setAttribute("type", "button");
        


        this.appendChild(this.form);
        this.form.appendChild(this.field_name);
        this.field_name.appendChild(this.input_name);


        this.form.appendChild(this.button_save);

        const saveButton = document.getElementById('save_button');
        saveButton.onclick = () => {
            console.log(document.getElementById("game_name").value);
            //saveGameData(gameName);
        };
        */

        
        this.innerHTML = `
            <form class="c-form" action="/">
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
                        <label class="c-label" for="game_healing_timing">Temps de soin moyen</label>
                        <input class="c-input" value="" type="number" step="1" min="0" id="game_healing_timing" />
                    </div>
                    <p class="c-label__hint">
                        En seconde et par defaut de 30s. <br />
                        Cela affectera le temp de diagnostique afin de rallonger ou écourter le soin selon
                        la valeur choisie.
                    </p>
                </div>

                <div class="c-field c-field--radio ">
                    <div class="c-field__wrapper">
                        <input class="c-radio" value="" type="radio" id="game_death" />
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
            let appData = JSON.parse(localStorage.getItem("medic_data"));

            // Simple validation
            if (!name || name.trim() === "") {
                //alert("Name is required!");
                //return false;
            }

            // Store data in localStorage
            const gameData = {
                ID: id,
                name: name.trim(),
                date: date,
                location: location.trim(),
                settings: {
                    death: death,
                    healTime: healing
                },
                patients: []
            };

            //console.log(gameData);

            appData.defaultSettings.currentGame = id;
            appData.games.push(gameData);
            localStorage.setItem("medic_data", JSON.stringify(appData));

            //console.log(appData);

            return true;

        }

        
    }

    connectedCallback() {}

    attributeChangedCallback() {}

}

customElements.define("game-add", gameAdd);