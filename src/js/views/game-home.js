import "../components/navbar.js";
import "../components/playerAdd.js";
import "../components/gameStats.js";
import "../components/gameSettings.js";
import "../components/gameFooter.js";
import "../components/gameTitle.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--gameStart">
        <player-add></player-add>
        <game-settings></game-settings>
    </div>
`;

