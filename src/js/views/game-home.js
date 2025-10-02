import "../components/navbar.js";
import "../components/playerAdd.js";
import "../components/gameStats.js";
import "../components/gameSettings.js";
import "../components/gameFooter.js";
import "../components/gameTitle.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--page">
        <game-title></game-title>

        <div class="c-grid c-grid--2 u-mb-32">
            <player-add></player-add>
            <game-settings></game-settings>
        </div>

        <div class="c-buttonGroup">
            <a data-link href="/game-options" class="c-button c-button--secondary c-button--icon-left c-icon-settings">Paramètres</a>
            <a data-link href="/game-stats" class="c-button c-button--secondary c-button--icon-left c-icon-chart-pie">Stats</a>
        </div>

        <game-footer></game-footer>
    </div>
`;

