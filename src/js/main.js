import home from "./views/home.js";
import options from "./views/options.js";
import newGame from "./views/new-game.js";
import loadGame from "./views/load-game.js";
import game from "./views/game.js";
import injuryLocalisation from "./views/injury-localisation.js";
import injuryProtection from "./views/injury-protection.js";
import injuryCheck from "./views/injury-check.js";
import injuryTreat from "./views/injury-treat.js";
import injuryHealed from "./views/injury-healed.js";


const routes = {
    "404": { title: "Accueil", render: home },
    "/": { title: "Accueil", render: home },
    "/options": { title: "Options", render: options },
    "/new-game": { title: "Nouvelle partie", render: newGame },
    "/load-game": { title: "Charger une partie", render: loadGame },
    "/game": { title: "Partie", render: game },
    "/injury-localisation": { title: "Localisation de la blessure", render: injuryLocalisation },
    "/injury-protection": { title: "Protection ballistique", render: injuryProtection },
    "/injury-check": { title: "Diagnostique en cours...", render: injuryCheck },
    "/injury-treat": { title: "Soigner le patient !", render: injuryTreat },
    "/injury-healed": { title: "Patient soigné !", render: injuryHealed },
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


// Debug
let appData = JSON.parse(localStorage.getItem("medic_data"));
console.log(appData);


// Create settings and
if (localStorage.getItem("medic_data") === null) {
    var data = {
        "defaultSettings":{
            "death": false,
            "healTime": 30,
            "currentGame": null
        },
        "games": [
            {
                "ID": "a41e233096",
                "name": "Old scarab",
                "date": "2025-10-21T13:28:06.419Z",
                "settings": [
                    {
                        "death": false,
                        "healTime": 30
                    }
                ],
                "patients": [
                    {
                        "ID": "03258",
                        "name": "",
                        "date": "2025-10-21T15:28:06.419Z",
                        "localisation": "Tête",
                        "injury": "Hémoragie",
                        "protection": false,
                        "death": false
                    },
                    {
                        "ID": "32147",
                        "name": "",
                        "date": "2025-10-21T15:45:06.419Z",
                        "localisation": "Bras gauche",
                        "injury": "Fracture",
                        "protection": false,
                        "death": false
                    }
                ]
            }
        ]
    }

    localStorage.setItem('medic_data', JSON.stringify(data));
} 

