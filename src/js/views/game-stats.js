import "../components/navbar.js";
import "../components/gameStats.js";
import "../components/gameStatsPlayer.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    <div class="c-content c-content--stats">
        <h1 class="c-title">Stats</h1>

        <div class="c-grid c-grid--stats u-mb-32">
            <div class="u-sticky-top">
                <game-stats></game-stats>

                <a href="/game" class="c-button c-button--primary c-button--icon-left c-icon-arrow-left u-mt-32">
                    <span class="c-button__content">Retour</span>
                </a>
                
            </div>
            <game-statsplayer></game-statsplayer>
        </div>
    </div>
`;