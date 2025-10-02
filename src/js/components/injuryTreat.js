// New component
class InjuryTreat extends HTMLElement {
    constructor() {
        super();
        
        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        // Current player data
        const currentPlayer = currentGame[0].players[currentGame[0].players.length - 1];
        let playerData = currentGame[0].players.filter(p => p.id === currentPlayer.id);

        let playerInjury = playerData[0].injury;
        let playerInjuryName = appData.injury.filter(i => i.id === playerData[0].injury);

        // Set injury
        this.injuryDiv = document.createElement('div');
        this.injuryDiv.classList.add('c-injury', 'u-mb-32');
        this.injuryDiv.innerHTML = `
            <div class="c-blockIcon u-mb-32">
                <div class="c-blockIcon__icon">
                    <span class="c-icon-${playerInjuryName[0].id} c-icon--left"></span>
                </div>
                <div class="c-blockIcon__content">
                    <p class="u-font-12">Le patient soufre d'une :</p>
                    <p class="u-font-48 u-font-700 u-text-uppercase u-line-height-xs">${playerInjuryName[0].name}</p>
                </div>
            </div>
        `;
        this.appendChild(this.injuryDiv);


        // Injury treat
        this.injuryTreat = document.createElement('div');
        this.injuryTreat.classList.add('c-injuryTreat');

        this.stepList = document.createElement('ul');
        this.stepList.classList.add('c-injuryTreat__list');

        this.injuryTreat.appendChild(this.stepList);
        this.appendChild(this.injuryTreat);

        let injuryList = appData.injury.filter(i => i.id === playerInjury);
        injuryList[0].steps.forEach((step, index) => {

            let count = index + 1;

            this.listItem = document.createElement('li');
            this.listItem.classList.add('c-injuryTreat__listItem');

            let button;
            if (index === injuryList[0].steps.length - 1){ 
                button = `<button type="button" class="c-button c-button--primary c-injuryTreat__button" disabled>Terminer</button>`;
            } else {
                button = `<button type="button" class="c-button c-button--primary c-injuryTreat__button" disabled>Etape suivante</button>`;
            }

            this.listItem.innerHTML = `
                <h2 class="c-injuryTreat__title">
                    <span id="progress" class="c-injuryTreat__progress"></span>
                    <span class="c-icon-${step.id} c-icon--left"></span>
                    <p>${step.title}</p>
                    <span id="percent" class="c-injuryTreat__percent"></span>
                </h2>
                <div class="c-injuryTreat__content">
                    ${button}
                </div>
            `;
            this.stepList.appendChild(this.listItem);
        });

        let gameHealTime = currentGame[0].settings.healTime;
        let gameTotalTreatTime = (gameHealTime / 3) * 2;
        let gameTreatSteps = injuryList[0].steps.length;
        let gameTreatStepHealTime = parseInt(gameTotalTreatTime / gameTreatSteps);


        /*
         * Treat injury
         */
        const treatSteps = document.querySelectorAll('.c-injuryTreat__listItem');

        // Active first step
        treatSteps[0].classList.add('active');
        startProgress(treatSteps[0], gameTreatStepHealTime);

        // Next step button
        const buttons = document.querySelectorAll('.c-injuryTreat__button');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const parentStep = button.closest('.c-injuryTreat__listItem');

                if (parentStep && parentStep.classList.contains('active')) {
                    const nextStep = parentStep.nextElementSibling;

                    if (nextStep && nextStep.classList.contains('c-injuryTreat__listItem')) {
                        parentStep.classList.remove('active');
                        parentStep.classList.add('done');
                        nextStep.classList.add('active');
                        startProgress(nextStep, gameTreatStepHealTime);
                    } else {
                        playerData[0].treated = true;
                        localStorage.setItem("medic_data", JSON.stringify(appData));
                        document.location.href="/player-healed";
                    }
                }
            });
        });

        // Progress function
        function startProgress(item, duration) {
            const progress = item.querySelector('.c-injuryTreat__progress');
            const progress_percent = item.querySelector('.c-injuryTreat__percent');
            const button = item.querySelector('.c-injuryTreat__button');

            const interval = 100; // ms
            const steps = (duration * 1000) / interval;
            let current = 0;

            const timer = setInterval(() => {
                current++;
                const percent = (current / steps) * 100;
                progress.style.width = percent + '%';
                progress_percent.textContent = Math.floor(percent) + '%';

                if (current >= steps) {
                    clearInterval(timer);
                    button.disabled = false;
                }
            }, interval);
        }
        
    }

    

}
customElements.define("injury-treat", InjuryTreat);