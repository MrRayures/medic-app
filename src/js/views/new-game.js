import "../components/gameAdd.js";
import "../components/navbar.js";

export default () => /*html*/`
    <nav-bar data-back="/" data-page="home"></nav-bar>

    <div class="c-content c-content--page">
        <h1 class="c-title">Nouvelle partie</h1>
        <game-add></game-add>
    </div>
`;