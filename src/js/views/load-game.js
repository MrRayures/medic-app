import "../components/gameList.js";
import "../components/navbar.js";

export default () => /*html*/`
    <nav-bar data-back="/" data-page="home"></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">Charger une partie</h1>

        <game-list></game-list>

        <div class="c-buttonGroup u-mt-32">
            <a data-link href="/" class="c-button c-button--primary c-button--icon-left c-icon-arrow-left">Retour à l'accueil</a>
        </div>
    </div>
`;