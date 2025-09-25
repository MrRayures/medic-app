// New component
class GameStats extends HTMLElement {

    constructor() {
        super();

        // Display infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.ID === currentGameID);

        this.innerHTML = /*html*/`
            <ul class="c-list c-list--corner">
                <li class="c-list__item">Patient(s) soigné(s) : <span>4</span></li>
                <li class="c-list__item">Patient(s) décédé(s) : <span>1</span></li>
                <li class="c-list__item">Zone la plus endommagée: <span>Thorax</span></li>
                <li class="c-list__item">Blessure la plus courante : <span>?</span></li>
                <li class="c-list__item">Protection ballistique : <span>20%</span></li>
            </ul>

            <ul class="c-patientList u-mt-32">
                    <li class="c-patientList__item">
                        <div class="c-patient">
                            <span class="c-patient__order">01</span>
                            <h2 class="c-patient__title">
                                #ID0001 - 18h24 ☠️
                            </h2>
                            <div class="c-patient__injury">
                                <p>Thorax [Protection ballistique]</p>
                                <p>Fracture</p>
                            </div>
                        </div>
                    </li>
            </ul>
        `;
    }

}



customElements.define("game-stats", GameStats);