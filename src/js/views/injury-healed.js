import "../components/navbar.js";
import "../components/patientAdd.js";

// Display infos
let appData = JSON.parse(localStorage.getItem("medic_data"));
let currentGameID = appData.defaultSettings.currentGame;
let currentGame = appData.games.filter(g => g.ID === currentGameID);

export default () => /*html*/`

    <div class="c-content c-content--page">
        <h1 class="c-title">Patient soigné </h1>

        [Stats]
        
        <patient-add data-label="Nouveau patient"></patient-add>
        
        <a data-link href="/game" class="c-button c-button--primary c-button--icon-left c-icon-arrow-back c-button--back">Retour à l'accueil</a>
        
    </div>
`;