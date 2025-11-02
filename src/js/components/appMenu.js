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
                <ul class="c-grid">
                    <li class="c-grid__tile centered">
                        <span class="c-logo">
                            <img src="./src/assets/images/logo.svg" alt="Logo" width="100" height="100" />
                        </span>
                    </li>
                    <li class="c-grid__tile">
                        <a class="c-button c-button--primary c-button--tile c-icon-file-plus" data-link href="/new-game">
                            Nouvelle partie
                        </a>
                    </li>
                    <li class="c-grid__tile">
                        <a class="c-button c-button--primary c-button--tile c-icon-file-up" data-link href="/load-game">
                            Charger une partie
                        </a>
                    </li>
                    <li class="c-grid__tile">
                        <a class="c-button c-button--primary c-button--tile c-icon-settings" data-link href="/options">
                            Options
                        </a>
                    </li>
                </ul>
            `;
        } else {
            this.innerHTML = /*html*/`
                <ul class="c-grid">
                    <li class="c-grid__tile ">
                        <a class="c-button c-button--primary c-button--tile c-icon-arrow-right" data-link href="/game">
                            Continuer&nbsp;<strong>"${currentGame[0].name}"</strong>
                        </a>
                    </li>
                    <li class="c-grid__tile">
                        <a class="c-button c-button--primary c-button--tile c-icon-file-plus" data-link href="/new-game">
                            Nouvelle partie
                        </a>
                    </li>
                    <li class="c-grid__tile">
                        <a class="c-button c-button--primary c-button--tile c-icon-file-up" data-link href="/load-game">
                            Charger une partie
                        </a>
                    </li>
                    <li class="c-grid__tile">
                        <a class="c-button c-button--primary c-button--tile c-icon-settings" data-link href="/options">
                            Options
                        </a>
                    </li>
                </ul>
            `;
        }
    }
}

customElements.define("app-menu", appMenu);