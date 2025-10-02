import home from "./views/home.js";
import options from "./views/options.js";
import newGame from "./views/new-game.js";
import loadGame from "./views/load-game.js";
import gameHome from "./views/game-home.js";
import gameOptions from "./views/game-options.js";
import gameStats from "./views/game-stats.js";
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
    "/game-stats": { title: "Stats de la partie", render: gameStats },
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

        const url = e.target.href;
        showLoader();
        
        // Check if View Transitions API is supported
        showLoader();

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                history.pushState(null, "", url);
                router();
            }).finished.finally(hideLoader);
        } else {
            history.pushState(null, "", url);
            router();
            hideLoader();
        }
    }
});


document.addEventListener("submit", e => {
    if (e.target.matches("form[data-form]")) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // Example: build new URL or update content
        const url = form.action + "?" + new URLSearchParams(formData).toString();

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                history.pushState(null, "", url);
                router(); // or update DOM with new content
            });
        } else {
            history.pushState(null, "", url);
            router();
        }
    }
});


// Update router
window.addEventListener("popstate", () => {
    showLoader();

    if (document.startViewTransition) {
        document.startViewTransition(() => router())
            .finished.finally(hideLoader);
    } else {
        router();
        hideLoader();
    }
});
window.addEventListener("DOMContentLoaded", router);


//Loading
function showLoader() {
    let loader = document.getElementById("loader");
    if (loader !== null) {
        loader.hidden = false;
    }
}

function hideLoader() {
    let loader = document.getElementById("loader");
    if (loader !== null) {
        loader.hidden = true;
    }
}