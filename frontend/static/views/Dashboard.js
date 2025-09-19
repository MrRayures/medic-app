import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Accueil')
    }

    async getHtml() {
        return `
            <div class="c-content c-content--hp">
                <a href="#" class="c-logo {{ logo.class }}">
                    <img src="/static/assets/img/logo.svg" alt="Logo" width="200" height="200" />
                </a>

                <ul class="c-buttonList c-buttonList--center">
                    <li class="c-buttonList__item"><a class="c-button c-button--primary" href="/" data-link>Accueil</a></li>
                    <li class="c-buttonList__item"><a class="c-button c-button--primary" href="/posts" data-link>Articles</a></li>
                    <li class="c-buttonList__item"><a class="c-button c-button--primary" href="/settings" data-link>Paramètres</a></li>
                    <!--
                    <li class="c-buttonList__item">
                        <a class="c-button c-button--primary" href="game-add.html">Nouvelle partie</a>
                    </li>
                    <li class="c-buttonList__item">
                        <a class="c-button c-button--primary" href="game-list.html">Charger une partie</a>
                    </li>
                    <li class="c-buttonList__item">
                        <a class="c-button c-button--primary" href="app-settings.html">Options</a>
                    </li>
                    -->
                </ul>
            
            </div>  
        `;
    }
}