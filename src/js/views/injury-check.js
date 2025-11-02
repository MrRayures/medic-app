import "../components/gameFooter.js";
import "../components/injuryCheck.js";
import "../components/navbar.js";

export default () => /*html*/`
    <nav-bar data-page="ingame"></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">Diagnostique en cours..</h1>
        
        <p class="u-mb-32">Si besoin, stabiliser le joueur à l'aide d'un garrot.</p>   

        <injury-check></injury-check>
        
        <game-footer></game-footer>
    </div>
`;