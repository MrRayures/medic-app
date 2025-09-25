// New component
class GameFooter extends HTMLElement {
    constructor() {
        super();

        // Display infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.ID === currentGameID);

        let patientsLenght = currentGame[0].patients.length;
        let patientID = "";
        
        if(patientsLenght != 0) {
            const lastPatient = currentGame[0].patients[currentGame[0].patients.length - 1];
            patientID = `// Patient #${lastPatient.ID}`
            console.log(lastPatient.ID); 
        } 

        this.innerHTML = /*html*/`
            <div class="c-footer">
                <p>${currentGame[0].name} | ID#${currentGameID} ${patientID}</p>
            </div>
        `;

    }


}

customElements.define("game-footer", GameFooter);