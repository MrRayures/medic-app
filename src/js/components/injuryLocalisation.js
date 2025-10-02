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
                        <a data-link href="/injury-protection" data-localisation="head" class="c-button c-button--primary outline">Tête</a>
                    </li>
                    <li class="c-injuryArea__gridItem left_arm">
                        <a data-link href="/injury-protection" data-localisation="left_arm" class="c-button c-button--primary outline">Bras gauche</a>
                    </li>
                    <li class="c-injuryArea__gridItem thorax">
                        <a data-link href="/injury-protection" data-localisation="thorax" class="c-button c-button--primary outline">Thorax</a>
                    </li>
                    <li class="c-injuryArea__gridItem right_arm">
                        <a data-link href="/injury-protection" data-localisation="right_arm" class="c-button c-button--primary outline">Bras droit</a>
                    </li>
                    <li class="c-injuryArea__gridItem left_leg">
                        <a data-link href="/injury-protection" data-localisation="left_leg" class="c-button c-button--primary outline">Jambe gauche</a>
                    </li>
                    <li class="c-injuryArea__gridItem pelvis">
                        <a data-link href="/injury-protection" data-localisation="pelvis" class="c-button c-button--primary outline">Pelvis</a>
                    </li>
                    <li class="c-injuryArea__gridItem right_leg">
                        <a data-link href="/injury-protection" data-localisation="right_leg" class="c-button c-button--primary outline">Jambe droite</a>
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
        

        
     
    }
}
customElements.define("injury-localisation", InjuryLocalisation);