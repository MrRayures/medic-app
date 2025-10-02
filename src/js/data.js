/*
* Data
* Setup data 
*/


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
                "id": "bleeding",
                "name": "Hémorragie légère",
                "death": false,
                "steps": [
                    {
                        "id": "bandage",
                        "title": "Appliquer un bandage sur la blessure"
                    }
                ]
            },
            {
                "id": "dislocation",
                "name": "Luxation",
                "death": false,
                "steps": [
                    {
                        "id": "bandage",
                        "title": "Stabiliser la luxation avec un bandage"
                    },
                    {
                        "id": "adrenaline",
                        "title": "Injecter l'adrenaline au joueur"
                    }
                ]
            },
            {
                "id": "fracture",
                "name": "Fracture",
                "death": false,
                "steps": [
                    {
                        "id": "bandage",
                        "title": "Stabiliser la fracture avec un bandage"
                    },
                    {
                        "id": "adrenaline",
                        "title": "Injecter l'adrenaline au joueur"
                    },
                    {
                        "id": "splint",
                        "title": "Poser une attelle sur la fracture"
                    }
                ]
            },
            {
                "id": "heart-failure",
                "name": "Arrêt cardiaque",
                "death": true,
                "steps": [
                    {
                        "id": "morphine",
                        "title": "Injecter la morphine au joueur"
                    },
                    {
                        "id": "defibrilator",
                        "title": "Effectuer un massage cardiaque au joueur. Si ça ne suffit pas utliser le défibrilateur"
                    },
                ]
            },
            {
                "id": "heavy-bleeding",
                "name": "Hémorragie massive",
                "death": true,
                "steps": [
                    {
                        "id": "splint",
                        "title": "Appliquer un garrot sur la blessure",
                    },
                    {
                        "id": "morphine",
                        "title": "Injecter la morphine au joueur",
                    },
                    {
                        "id": "bandage",
                        "title": "Appliquer un bandage sur la blessure",
                    },
                ]
            }  
        ],
        "localisation": [
            {
                "id": "head",
                "name": "Tête",
                "injury": ["bleeding", "heart-failure", "heavy-bleeding"],
                "injury_protection": ["bleeding", "fracture"]

            },
            {
                "id": "left_arm",
                "name": "Bras gauche",
                "injury": ["bleeding", "dislocation", "fracture", "heavy-bleeding"],
                "injury_protection": ["bleeding", "dislocation", "fracture"]
            },
            {
                "id": "right_arm",
                "name": "Bras droit",
                "injury": ["bleeding", "dislocation", "fracture", "heavy-bleeding"],
                "injury_protection": ["bleeding", "dislocation", "fracture"]
            },
            {
                "id": "thorax",
                "name": "Thorax",
                "injury": ["bleeding", "fracture", "heart-failure", "heavy-bleeding"],
                "injury_protection": ["bleeding", "fracture"]
            },
            {
                "id": "pelvis",
                "name": "Pelvis",
                "injury": ["bleeding", "fracture", "heart-failure", "heavy-bleeding"],
                "injury_protection": ["bleeding", "fracture"]
            },
            {
                "id": "left_leg",
                "name": "Jambe gauche",
                "injury": ["bleeding", "dislocation", "fracture", "heavy-bleeding"],
                "injury_protection": ["bleeding", "dislocation", "fracture"]
            },
            {
                "id": "right_leg",
                "name": "Jambe droite",
                "injury": ["bleeding", "dislocation", "fracture", "heavy-bleeding"],
                "injury_protection": ["bleeding", "dislocation", "fracture"]
            }
        ],
        "games": [
            {
                "id": "468e5789c9",
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
                        "id": "001",
                        "name": "",
                        "date": "2025-10-21T15:28:06.419Z",
                        "localisation": "Tête",
                        "injury": "Hémoragie",
                        "protection": false,
                        "dead": true,
                        "treated": true
                    },
                    {
                        "id": "002",
                        "name": "",
                        "date": "2025-10-21T15:45:06.419Z",
                        "localisation": "Bras gauche",
                        "injury": "Fracture",
                        "protection": true,
                        "dead": false,
                        "treated": true
                    },
                    {
                        "id": "003",
                        "name": "",
                        "date": "2025-10-21T15:45:06.419Z",
                        "localisation": "Bras droit",
                        "injury": "Luxation",
                        "protection": true,
                        "dead": false,
                        "treated": true
                    },
                    {
                        "id": "004",
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


