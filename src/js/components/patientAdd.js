// New component
class PatientAdd extends HTMLElement {


    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.ID === currentGameID);

        // Delete patient with treatment aborted
        currentGame[0].patients = currentGame[0].patients.filter(patient => {
            return patient.healed === true; // keep only healed patients
        });
        // Update localStorage if needed
        localStorage.setItem("medic_data", JSON.stringify(appData));
        

        let label;
        if (this.hasAttribute("data-label")) {
            this.label = this.getAttribute("data-label");
        } else {
            this.label = "Nouveau patient";
        }
        
        
        this.innerHTML = /*html*/`
            <form action="/injury-localisation">
                <button id="addButton" type="submit" class="c-button c-button--lg c-button--primary c-button--sticky">
                    ${this.label}
                </button>
            </form>
        `;

        let addButton = this.querySelector("#addButton");
        addButton.onclick = () => {

            let patientsLenght = currentGame[0].patients.length;
            let patientID = 0;

            if(patientsLenght === 0) {
                patientID = 1;
            } else {
                patientID = patientsLenght + 1;
            }

            const patientData = {
                ID: ("00" + patientID).slice(-3),
                name: "",
                date: "",
                localisation: "",
                injury: "",
                protection: false,
                death: false,
                healed: false
            };
            
            currentGame[0].patients.push(patientData);
            localStorage.setItem("medic_data", JSON.stringify(appData));

            //console.log(appData);
        };
       
    }

}



customElements.define("patient-add", PatientAdd);