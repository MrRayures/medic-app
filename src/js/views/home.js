import "../components/appMenu.js";
import "../components/navbar.js";

export default () => /*html*/` 
    <div class="c-content c-content--hp">
        <a href="#" class="c-logo {{ logo.class }}">
            <img src="./src/assets/images/logo.svg" alt="Logo" width="200" height="200" />
        </a>

        <app-menu></app-menu>


    </div>
`;


