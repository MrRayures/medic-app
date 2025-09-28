// New component
class InjuryLocalisation extends HTMLElement {
    constructor() {
        super();
        
        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.ID === currentGameID);

        // Current player data
        const currentPlayer = currentGame[0].players[currentGame[0].players.length - 1];
        let playerData = currentGame[0].players.filter(p => p.ID === currentPlayer.ID);
        

        this.innerHTML = /*html*/`
            <form action="/injury-protection">   
                <div class="c-injuryArea">
                    
                    <ul class="c-injuryArea__grid">
                        <li class="c-injuryArea__gridItem head">
                            <button data-localisation="head" type="submit" class="c-button c-button--primary outline">Tête</button>
                        </li>
                        <li class="c-injuryArea__gridItem left_arm">
                            <button data-localisation="left_arm" type="submit" class="c-button c-button--primary outline">Bras gauche</button>
                        </li>
                        <li class="c-injuryArea__gridItem thorax">
                            <button data-localisation="thorax" type="submit" class="c-button c-button--primary outline">Thorax</button>
                        </li>
                        <li class="c-injuryArea__gridItem right_arm">
                            <button data-localisation="right_arm" type="submit" class="c-button c-button--primary outline">Bras droit</button>
                        </li>
                        <li class="c-injuryArea__gridItem left_leg">
                            <button data-localisation="left_leg" type="submit" class="c-button c-button--primary outline">Jambe gauche</button>
                        </li>
                        <li class="c-injuryArea__gridItem pelvis">
                            <button data-localisation="pelvis" type="submit" class="c-button c-button--primary outline">Pelvis</button>
                        </li>
                        <li class="c-injuryArea__gridItem right_leg">
                            <button data-localisation="right_leg" type="submit" class="c-button c-button--primary outline">Jambe droite</button>
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
            </form>
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