import "../components/navbar.js";
import "../components/playerAdd.js";
import "../components/gameStats.js";
import "../components/gameSettings.js";
import "../components/gameFooter.js";

// Game infos
let appData = JSON.parse(localStorage.getItem("medic_data"));
let currentGameID = appData.defaultSettings.currentGame;
let currentGame = appData.games.filter(g => g.ID === currentGameID);

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">${currentGame[0].name}</h1>
        
        <game-settings></game-settings>

        <player-add></player-add>
        

        <p class="c-subtitle">Statistiques joueurs</p>
        <game-stats></game-stats>

        <game-footer></game-footer>
    </div>
`;