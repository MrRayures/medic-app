import "../components/navbar.js";
import "../components/patientAdd.js";
import "../components/gameStats.js";
import "../components/gameFooter.js";

// Display infos
let appData = JSON.parse(localStorage.getItem("medic_data"));
let currentGameID = appData.defaultSettings.currentGame;
let currentGame = appData.games.filter(g => g.ID === currentGameID);

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">${currentGame[0].name}</h1>

        <patient-add ></patient-add>
        

        <p class="c-subtitle">Statistiques [TODO]</p>
        <game-stats></game-stats>

        <game-footer></game-footer>
    </div>
`;