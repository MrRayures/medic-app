import "../components/navbar.js";
import "../components/playerAdd.js";
import "../components/playerStats.js";

// Display infos
let appData = JSON.parse(localStorage.getItem("medic_data"));
let currentGameID = appData.defaultSettings.currentGame;
let currentGame = appData.games.filter(g => g.id === currentGameID);

export default () => /*html*/`
    <nav-bar></nav-bar>
    <div class="c-content c-content--page">
        <h1 class="c-title">Joueur décédé</h1>

        <player-stats></player-stats>
        
        <div class="c-buttonGroup u-mt-32">
            <player-add data-label="Nouveau joueur"></player-add>
            <a data-link href="/game" class="c-button c-button--secondary c-button--icon-left c-icon-arrow-left">Retour à l'accueil</a>
        </div>
    </div>
`;