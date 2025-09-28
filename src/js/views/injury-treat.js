import "../components/navbar.js";
import "../components/gameFooter.js";
import "../components/injuryTreat.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">Soigne le joueur</h1>

        <injury-treat></injury-treat>

        <game-footer></game-footer>
    </div>
`;