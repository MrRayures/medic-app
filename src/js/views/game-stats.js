import "../components/navbar.js";
import "../components/gameStats.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    <div class="c-content c-content--page">
        <h1 class="c-title">Stats</h1>

        <game-stats></game-stats>

        <div class="c-buttonGroup u-mt-32 c-buttonGroup--sticky">
            <a data-link href="/game" class="c-button c-button--primary c-button--icon-left c-icon-arrow-left">Retour à l'accueil</a>
        </div>
    </div>
`;