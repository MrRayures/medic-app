// New component
class appMenu extends HTMLElement {
    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        if (currentGameID === null) {
            this.innerHTML = /*html*/`
                <ul class="c-buttonList">
                    <li class="c-buttonList__item">
                        <a class="c-button c-button--secondary" data-link href="/new-game">
                            Nouvelle partie
                        </a>
                    </li>
                    <li class="c-buttonList__item">
                        <a class="c-button c-button--secondary" data-link href="/load-game">
                            Charger une partie
                        </a>
                    </li>
                    <li class="c-buttonList__item">
                        <a class="c-button c-button--secondary" data-link href="/options">Options</a>
                    </li>
                </ul>
            `;
        } else {
            this.innerHTML = /*html*/`
                <ul class="c-buttonList">
                    <li class="c-buttonList__item">
                        <a class="c-button c-button--primary u-flex-column" data-link href="/game">
                            Continuer <strong>"${currentGame[0].name}"</strong>
                        </a>
                    </li>
                    <li class="c-buttonList__item">
                        <a class="c-button c-button--secondary" data-link href="/new-game">
                            Nouvelle partie
                        </a>
                    </li>
                    <li class="c-buttonList__item">
                        <a class="c-button c-button--secondary" data-link href="/load-game">
                            Charger une partie
                        </a>
                    </li>
                    <li class="c-buttonList__item">
                        <a class="c-button c-button--secondary" data-link href="/options">Options</a>
                    </li>
                </ul>
            `;
        }
    }
}

customElements.define("app-menu", appMenu);