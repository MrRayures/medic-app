import "../components/navbar.js";
import "../components/gameFooter.js";

// Display infos
let appData = JSON.parse(localStorage.getItem("medic_data"));
let currentGameID = appData.defaultSettings.currentGame;
let currentGame = appData.games.filter(g => g.ID === currentGameID);

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">Localisation de la blessure</h1>

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

        <game-footer></game-footer>
    </div>
`;