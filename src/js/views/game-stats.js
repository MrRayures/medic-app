import "../components/gameStats.js";
import "../components/gameStatsPlayer.js";
import "../components/navbar.js";

export default () => /*html*/`
    <nav-bar data-back="/game" data-page="game"></nav-bar>

    <div class="c-content c-content--page">
        <h1 class="c-title">Stats</h1>
        <game-stats></game-stats>
        <p class="c-subtitle">Joueurs soignés :</p>
        <game-statsplayer></game-statsplayer>
    </div>
`;