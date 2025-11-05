import "../components/gameFooter.js";
import "../components/injury.js";
import "../components/navbar.js";

export default () => /*html*/`
    <nav-bar data-page="ingame"></nav-bar>
    
    <div class="c-content">
        <div class="c-grid c-grid--singleRow">
            <div class="c-grid__tile">
                <a href="/injury-treat" class="c-button c-button--primary outline">
                    Commencer le soin
                </a>
            </div>
            <div class="c-grid__tile">
                <player-injury></player-injury>
            </div>
        </div>
    </div>
    <game-footer></game-footer>
`;