import "../components/navbar.js";
import "../components/gameFooter.js";
import "../components/injuryLocalisation.js";

// Display infos
let appData = JSON.parse(localStorage.getItem("medic_data"));
let currentGameID = appData.defaultSettings.currentGame;
let currentGame = appData.games.filter(g => g.id === currentGameID);

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--localisation">
        <h1 class="c-title">Localisation de la blessure</h1>

        <injury-localisation></injury-localisation>

        <game-footer></game-footer>
    </div>
`;