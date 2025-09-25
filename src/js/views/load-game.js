import "../components/gameList.js";

export default () => /*html*/`
    <div class="c-content c-content--page">
        <h1 class="c-title">Charger une partie</h1>

        <game-list></game-list>

        <a data-link href="/" class="c-button c-button--primary c-button--icon-left c-icon-arrow-back c-button--back">Retour à l'accueil</a>
    </div>
`;