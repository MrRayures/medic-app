/*
* Utils
* Setup data & debug
*/

document.body.requestFullscreen();

function formatDate(dateString) {
            const date = new Date(dateString);

            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // months start at 0
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        }

// Debug
let appData = JSON.parse(localStorage.getItem("medic_data"));
console.log(appData);



// Create settings
if (localStorage.getItem("medic_data") === null) {
    var data = {
        "defaultSettings": {
            "death": false,
            "healTime": "30",
            "currentGame": null
        },
        "injury": [
            {
                "ID": "bleeding",
                "name": "Hémorragie légère",
                "death": false,
                "steps": [
                    {
                        "title": "Bandage",
                        "text": "Appliquer un bandage sur la blessure"
                    }
                ]
            },
            {
                "ID": "dislocation",
                "name": "Luxation",
                "death": false,
                "steps": [
                    {
                        "title": "Bandage",
                        "text": "Stabiliser la luxation avec un bandage"
                    },
                    {
                        "title": "Adrenaline",
                        "text": "Injecter l'adrenaline au joueur"
                    }
                ]
            },
            {
                "ID": "fracture",
                "name": "Fracture",
                "death": false,
                "steps": [
                    {
                        "title": "Bandage",
                        "text": "Stabiliser la fracture avec un bandage"
                    },
                    {
                        "title": "Adrenaline",
                        "text": "Injecter l'adrenaline au joueur"
                    },
                    {
                        "title": "Attelle",
                        "text": "Poser une attelle sur la fracture"
                    }
                ]
            },
            {
                "ID": "heart_failure",
                "name": "Arrêt cardiaque",
                "death": true,
                "steps": [
                    {
                        "title": "Morphine",
                        "text": "Injecter la morphine au joueur"
                    },
                    {
                        "title": "Massage cardiaque / Défibrilateur",
                        "text": "Effectuer un massage cardiaque au joueur. Si ça ne suffit pas utliser le défibrilateur"
                    },
                ]
            },
            {
                "ID": "heavy_bleeding",
                "name": "Hémorragie massive",
                "death": true,
                "steps": [
                    {
                        "title": "Garrot",
                        "text": "Appliquer un garrot sur la blessure"
                    },
                    {
                        "title": "Morphine",
                        "text": "Injecter la morphine au joueur"
                    },
                    {
                        "title": "Bandage",
                        "text": "Appliquer un bandage sur la blessure"
                    },
                ]
            }  
        ],
        "localisation": [
            {
                "ID": "head",
                "name": "Tête",
                "injury": ["bleeding", "heart_failure", "heavy_bleeding"],
                "injury_protection": ["bleeding", "fracture"]

            },
            {
                "ID": "left_arm",
                "name": "Bras gauche",
                "injury": ["bleeding", "dislocation", "fracture", "heavy_bleeding"],
                "injury_protection": ["bleeding", "dislocation", "fracture"]
            },
            {
                "ID": "right_arm",
                "name": "Bras droit",
                "injury": ["bleeding", "dislocation", "fracture", "heavy_bleeding"],
                "injury_protection": ["bleeding", "dislocation", "fracture"]
            },
            {
                "ID": "thorax",
                "name": "Thorax",
                "injury": ["bleeding", "fracture", "heart_failure", "heavy_bleeding"],
                "injury_protection": ["bleeding", "fracture"]
            },
            {
                "ID": "pelvis",
                "name": "Pelvis",
                "injury": ["bleeding", "fracture", "heart_failure", "heavy_bleeding"],
                "injury_protection": ["bleeding", "fracture"]
            },
            {
                "ID": "left_leg",
                "name": "Jambe gauche",
                "injury": ["bleeding", "dislocation", "fracture", "heavy_bleeding"],
                "injury_protection": ["bleeding", "dislocation", "fracture"]
            },
            {
                "ID": "right_leg",
                "name": "Jambe droite",
                "injury": ["bleeding", "dislocation", "fracture", "heavy_bleeding"],
                "injury_protection": ["bleeding", "dislocation", "fracture"]
            }
        ],
        "games": [
            {
                "ID": "468e5789c9",
                "name": "Partie de test",
                "date": "2025-10-21T13:28:06.419Z",
                "location": "Angoulême",
                "settings": 
                    {
                        "death": false,
                        "healTime": "30"
                    },
                "players": [
                    {
                        "ID": "001",
                        "name": "",
                        "date": "2025-10-21T15:28:06.419Z",
                        "localisation": "Tête",
                        "injury": "Hémoragie",
                        "protection": false,
                        "dead": true,
                        "treated": true
                    },
                    {
                        "ID": "002",
                        "name": "",
                        "date": "2025-10-21T15:45:06.419Z",
                        "localisation": "Bras gauche",
                        "injury": "Fracture",
                        "protection": true,
                        "dead": false,
                        "treated": true
                    },
                    {
                        "ID": "003",
                        "name": "",
                        "date": "2025-10-21T15:45:06.419Z",
                        "localisation": "Bras droit",
                        "injury": "Luxation",
                        "protection": true,
                        "dead": false,
                        "treated": true
                    },
                    {
                        "ID": "004",
                        "name": "",
                        "date": "2025-10-21T15:45:06.419Z",
                        "localisation": "Bras droit",
                        "injury": "Hémoragie",
                        "protection": false,
                        "dead": false,
                        "treated": true
                    }
                ]
            }
        ]
    }


    localStorage.setItem('medic_data', JSON.stringify(data));
}


