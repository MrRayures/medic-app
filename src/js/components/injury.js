// New component
class Injury extends HTMLElement {
    constructor() {
        super();

        let data = localStorage.getItem('data');
        let injury = JSON.parse(data);
        console.log(injury);

        this.innerHTML = /*html*/`
            <hr>
            ${data}
            <hr>
            ${injury.defaultSettings.death}
        `;
        
    }
}
if (localStorage.getItem("data") === null) {
    var count = 0;
    var data = {
        "defaultSettings":{
            "death": false,
            "healTime": 30
        },
        "games": [
            {
                "ID": "03258",
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
        
    localStorage.setItem('data', JSON.stringify(data));

} 


customElements.define("injury-test", Injury);