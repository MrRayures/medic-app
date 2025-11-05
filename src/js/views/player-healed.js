import "../components/navbar.js";
import "../components/playerAdd.js";
import "../components/playerStats.js";

export default () => /*html*/`
    <nav-bar data-page="ingame"></nav-bar>
    <div class="c-content">
        <div class="c-grid">
            <div class="c-grid__tile wideH">
                <player-stats></player-stats>
            </div>
            <div class="c-grid__tile">
                 <player-add data-label="Soigner un nouveau joueur"></player-add>
            </div>

            <div class="c-grid__tile">
                <a data-link href="/game" class="c-button c-button--secondary c-button--icon-left c-icon-arrow-left">Retour à l'accueil</a>
            </div>
        </div>
    </div>
`;