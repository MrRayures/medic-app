// New component
class InjuryLocalisation extends HTMLElement {
    constructor() {
        super();
        
        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        // Current player data
        const currentPlayer = currentGame[0].players[currentGame[0].players.length - 1];
        let playerData = currentGame[0].players.filter(p => p.id === currentPlayer.id);
        

        this.innerHTML = /*html*/`
            
            <div class="c-injuryArea">
                
                <ul class="c-injuryArea__grid">
                    <li class="c-injuryArea__gridItem head">
                        <button type="button" data-localisation="head" class="c-button c-button--primary outline">Tête</button>
                    </li>
                    <li class="c-injuryArea__gridItem left_arm">
                        <button type="button" data-localisation="left_arm" class="c-button c-button--primary outline">Bras gauche</button>
                    </li>
                    <li class="c-injuryArea__gridItem thorax">
                        <button type="button" data-localisation="thorax" class="c-button c-button--primary outline">Thorax</button>
                    </li>
                    <li class="c-injuryArea__gridItem right_arm">
                        <button type="button" data-localisation="right_arm" class="c-button c-button--primary outline">Bras droit</button>
                    </li>
                    <li class="c-injuryArea__gridItem left_leg">
                        <button type="button" data-localisation="left_leg" class="c-button c-button--primary outline">Jambe gauche</button>
                    </li>
                    <li class="c-injuryArea__gridItem pelvis">
                        <button type="button" data-localisation="pelvis" class="c-button c-button--primary outline">Pelvis</button>
                    </li>
                    <li class="c-injuryArea__gridItem right_leg">
                        <button type="button" data-localisation="right_leg" class="c-button c-button--primary outline">Jambe droite</button>
                    </li>
                
                </ul>
                
                <img
                    class="c-injuryArea__body vertical"
                    src="./src/assets/images/body-vertical.svg"
                    alt=""
                />
                <img
                    class="c-injuryArea__body horizontal"
                    src="./src/assets/images/body-horizontal.svg"
                    alt=""
                />
            </div>

            <dialog class="c-dialog" id="alertDialog">
                <button
                    type="button"
                    id="closeModal"
                    class="c-button c-button--ghost c-button--sm c-icon-cross c-dialog__close"
                >
                    <span class="c-button__content">Fermer la modal</span>
                </button>
                <h2 class="c-dialog__title">Protection ballistique</h2>
                <p>Est-ce que le joueur dispose d’une protection balistique au niveau de la blessure ?</p>
                <div class="c-buttonGroup">
                    <a data-link href="/injury-check" data-protection="true" type="submit" class="c-button c-button--secondary">Oui</a>
                    <a data-link href="/injury-check" data-protection="false" type="submit" class="c-button c-button--secondary">Non</a>
                </div>
            </dialog>
            
        `;

        // set localisation
        let localisationButton = this.querySelectorAll("[data-localisation]");
        localisationButton.forEach((el) => {
            el.onclick = () => {
                let playerLocalisation = el.getAttribute("data-localisation");
                playerData[0].localisation = playerLocalisation;
                localStorage.setItem("medic_data", JSON.stringify(appData));
            };
        });

        // Set protection
        let protectionButton = this.querySelectorAll("[data-protection]");
        protectionButton.forEach((el) => {
            el.onclick = () => {
                let playerProtection = el.getAttribute("data-protection") === "true";
                playerData[0].protection = playerProtection;
                localStorage.setItem("medic_data", JSON.stringify(appData));
            };
        });

        // modal
        let localisationButtons = document.querySelectorAll('.c-injuryArea__gridItem .c-button');
        let closeModal = document.querySelector('#closeModal');
        const alertDialog = document.getElementById('alertDialog');

        localisationButtons.forEach((button) => {
            button.addEventListener('click', () => {
                alertDialog.showModal();
            });
        });

        closeModal.onclick = () => {
            alertDialog.close();
        };
        

        
     
    }
}
customElements.define("injury-localisation", InjuryLocalisation);