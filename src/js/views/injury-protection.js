import "../components/navbar.js";
import "../components/gameFooter.js";
import "../components/injuryProtection.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">Protection ballistique</h1>
        <p class="u-mb-32">Est-ce que le joueur dispose d’une protection balistique au niveau de la blessure ?</p>    
        
        <injury-protection></injury-protection>
        
        <game-footer></game-footer>
    </div>
`;