// New component
class InjuryCheck extends HTMLElement {
    constructor() {
        super();

         function chance(percent) {
            return Math.random() < percent / 100;
        }
        
        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.ID === currentGameID);

        // Current player data
        const currentPlayer = currentGame[0].players[currentGame[0].players.length - 1];
        let playerData = currentGame[0].players.filter(p => p.ID === currentPlayer.ID);
        

        let playerProtection = playerData[0].protection;
        let injuryLocalisation = playerData[0].localisation;
        let injuryLocalisationName = appData.localisation.filter(i => i.ID === playerData[0].localisation);

        if(playerProtection === true) {
            playerProtection = "Oui";
        } else {
            playerProtection = "Non";
        }

        function getInjury() {
            let injuryList = appData.localisation.filter(l => l.ID === injuryLocalisation);
            let playerInjuryList;

            if(playerData[0].protection === true) {
               playerInjuryList = injuryList[0].injury_protection;
            } else {
                playerInjuryList = injuryList[0].injury;
            }

            const playerInjury = playerInjuryList[Math.floor(Math.random() * playerInjuryList.length)];
            playerData[0].injury = playerInjury;

            localStorage.setItem("medic_data", JSON.stringify(appData));

            if(currentGame[0].settings.death != true) {
                document.location.href="/injury-treat";
            } else {
                let injuryDeath = appData.injury.filter(i => i.ID === playerInjury);
                //console.log('Mort active');
                //console.log(playerInjury);
                if(injuryDeath[0].death != true) {
                    //console.log("Alive !");
                    document.location.href="/injury-treat";
                } else {
                    if (chance(30)) {
                        //console.log("Dead !");
                        document.location.href="/player-dead";
                        playerData[0].treated = true;
                        playerData[0].dead = true;
                        localStorage.setItem("medic_data", JSON.stringify(appData));
                    } else {
                        //console.log("Alive !");
                        document.location.href="/injury-treat";
                    }
                }
                
            }
        }

        this.innerHTML = `
            <form action="/injury-check">   
                <ul class="c-list c-list--corner u-mb-32">
                    <li class="c-list__item">Zone blessé : <span>${injuryLocalisationName[0].name}</span></li>
                    <li class="c-list__item">Protection ballistique : <span>${playerProtection}</span></li>
                </ul>

                <div class="c-diagnostic u-mb-32">
                    <div id="progress" class="c-diagnostic__progress" style=""></div>
                    <div id="progress_msg" class="c-diagnostic__text">Merci de patienter...</div>
                    <p id="progress_percent" class="c-diagnostic__percent"></p>
                </div>
            </form>
        `;

        /*
        * Diagnostic = (1/3) / 2 / gameHealTime
        * Treat = 2/3 / gameHealTime
        */
        let gameHealTime = currentGame[0].settings.healTime;
        let diagTime = (gameHealTime / 3) / 2;

        const msg = [
            'Connexion au serveurs...',
            'Optimisation des assets...',
            'Application du dernier patch...',
            'Préparation du café...',
            'Mise à jour des seringues...',
            'Préparation des bandages...',
            'Winter is coming...',
            'Merci de patienter consultation du manuel...',
        ];

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        function startDiagnostic(duration) {
            const progress = document.getElementById('progress');
            const progress_percent = document.getElementById('progress_percent');
            const progress_msg = document.getElementById('progress_msg');

            const interval = 100; // ms
            const steps = (duration * 1000) / interval;
            let current = 0;

            const timer = setInterval(() => {
                current++;
                const percent = (current / steps) * 100;
                progress.style.width = percent + '%';
                progress_percent.textContent = Math.floor(percent) + '%';

                //console.log(current);

                if (percent == '20') {
                    let rand = getRandomInt(msg.length);
                    progress_msg.textContent = msg[rand];
                }

                if (percent == '40') {
                    let rand = getRandomInt(msg.length);
                    progress_msg.textContent = msg[rand];
                }

                if (percent == '60') {
                    let rand = getRandomInt(msg.length);
                    progress_msg.textContent = msg[rand];
                }

                if (percent == '80') {
                    let rand = getRandomInt(msg.length);
                    progress_msg.textContent = msg[rand];
                }

                if (current >= steps) {
                    clearInterval(timer);
                    getInjury();
                }
            }, interval);
        }

        startDiagnostic(diagTime);
    }

    

}
customElements.define("injury-check", InjuryCheck);