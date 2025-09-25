import "../components/navbar.js";
import "../components/gameFooter.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">Diagnotique en cours..</h1>

        <a href="/injury-treat" class="c-button c-button--primary">Suivant</a>

        <game-footer></game-footer>
    </div>
`;