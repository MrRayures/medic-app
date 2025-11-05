import "../components/gameFooter.js";
import "../components/injuryTreat.js";
import "../components/navbar.js";

export default () => /*html*/`
    <nav-bar data-page="ingame"></nav-bar>
    
    <div class="c-content c-content--treat">
        <injury-treat></injury-treat>
    </div>
    <game-footer></game-footer>
`;