import home from "./views/home.js";
import options from "./views/options.js";
import newGame from "./views/new-game.js";
import loadGame from "./views/load-game.js";
import gameHome from "./views/game-home.js";
import gameOptions from "./views/game-options.js";
import injuryLocalisation from "./views/injury-localisation.js";
import injuryProtection from "./views/injury-protection.js";
import injuryCheck from "./views/injury-check.js";
import injuryTreat from "./views/injury-treat.js";
import playerHealed from "./views/player-healed.js";
import playerDead from "./views/player-dead.js";


const routes = {
    "404": { title: "Accueil", render: home },
    "/": { title: "Accueil", render: home },
    "/options": { title: "Options", render: options },
    "/new-game": { title: "Nouvelle partie", render: newGame },
    "/load-game": { title: "Charger une partie", render: loadGame },
    "/game": { title: "Partie", render: gameHome },
    "/game-options": { title: "Options de la partie", render: gameOptions },
    "/injury-localisation": { title: "Localisation de la blessure", render: injuryLocalisation },
    "/injury-protection": { title: "Protection ballistique", render: injuryProtection },
    "/injury-check": { title: "Diagnostique en cours...", render: injuryCheck },
    "/injury-treat": { title: "Soigner le joueur !", render: injuryTreat },
    "/player-healed": { title: "Joueur soigné !", render: playerHealed },
    "/player-dead": { title: "Joueur décédé !", render: playerDead },
};



function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
        router();
    }
};

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);


