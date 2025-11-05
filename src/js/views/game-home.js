import "../components/gameFooter.js";
import "../components/gameSettings.js";
import "../components/gameStats.js";
import "../components/navbar.js";
import "../components/playerAdd.js";

export default () => /*html*/`
    <nav-bar data-page="game"></nav-bar>
    
    <div class="c-content">
        <div class="c-grid c-grid--singleRow">
            <div class="c-grid__tile">
                <player-add></player-add>
            </div>

            <div class="c-grid__tile">
                <game-settings></game-settings>
            </div>
        </div>
    </div>
`;

