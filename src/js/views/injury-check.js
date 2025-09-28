import "../components/navbar.js";
import "../components/gameFooter.js";
import "../components/injuryCheck.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">Diagnotique en cours..</h1>
        
        <p class="u-mb-32">Stabiliser le joueur à l'aide d'un garrot</p>   

        <injury-check></injury-check>
        
        <a href="/injury-treat" class="c-button c-button--primary">Suivant</a>

        <game-footer></game-footer>
    </div>
`;