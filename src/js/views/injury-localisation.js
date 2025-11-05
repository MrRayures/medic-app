import "../components/gameFooter.js";
import "../components/injuryLocalisation.js";
import "../components/navbar.js";

export default () => /*html*/`
    <nav-bar data-page="ingame"></nav-bar>
    
    <div class="c-content">
        <injury-localisation></injury-localisation>
        <game-footer></game-footer>
    </div>
`;