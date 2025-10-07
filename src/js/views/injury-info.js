import "../components/navbar.js";
import "../components/gameFooter.js";
import "../components/injury.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--injury">
        <player-injury></player-injury>

        <a href="/injury-treat" class="c-button c-button--primary outline">
            Commencer le soin
        </a>
    </div>
    <game-footer></game-footer>
`;