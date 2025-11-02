import "../components/navbar.js";
import "../components/gameOptions.js";

// Display infos
let appData = JSON.parse(localStorage.getItem("medic_data"));
let currentGameID = appData.defaultSettings.currentGame;
let currentGame = appData.games.filter(g => g.id === currentGameID);

export default () => /*html*/`
    <nav-bar data-back="/game" data-page="game"></nav-bar>

    <div class="c-content c-content--page">
        <h1 class="c-title">Paramètres</h1>

        <game-options></game-options>

    </div>
`;