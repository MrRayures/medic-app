import "../components/counter.js";
import "../components/injury.js";

export default () => /*html*/`
    <div class="c-content c-content--hp">
        <a href="#" class="c-logo {{ logo.class }}">
            <img src="./src/assets/images/logo.svg" alt="Logo" width="200" height="200" />
        </a>

        <ul class="c-buttonList">
            <li class="c-buttonList__item">
                <a class="c-button c-button--primary" href="/continue-game">
                    Continuer la partie
                </a>
            </li>
            <li class="c-buttonList__item">
                <a class="c-button c-button--secondary" href="/new-game">
                    Nouvelle partie
                </a>
            </li>
            <li class="c-buttonList__item">
                <a class="c-button c-button--secondary" href="/load-game">
                    Charger une partie
                </a>
            </li>
            <li class="c-buttonList__item">
                <a class="c-button c-button--secondary" href="/options">Options</a>
            </li>
        </ul>

        
    </div>
    <h1>Home</h1>
    <p>Simple click counter</p>
    <click-counter></click-counter>
    <hr /> 
    <injury-test></injury-test>
`;