import "../components/navbar.js";
import "../components/gameFooter.js";
import "../components/injuryTreat.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    <div class="c-content c-content--treat">
        <injury-treat></injury-treat>
    </div>
    <game-footer></game-footer>
`;