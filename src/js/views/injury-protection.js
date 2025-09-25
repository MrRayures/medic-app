import "../components/navbar.js";
import "../components/gameFooter.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">Protection ballistique</h1>

        <p class="u-mb-32">
            Est-ce que le joueur dispose d’une protection balistique au niveau de la blessure ?
        </p>
        <ul class="c-buttonList">
            <li class="c-buttonList__item">
                <a href="/injury-check" class="c-button c-button--primary">Oui</a>
            </li>
            <li class="c-buttonList__item">
                <a href="/injury-check" class="c-button c-button--secondary">Non</a>
            </li>
        </ul>

        <game-footer></game-footer>
    </div>
`;