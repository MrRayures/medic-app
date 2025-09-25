// New component
class Navbar extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = /*html*/`
            <header id="header" class="c-header" role="banner">
                <div class="c-header__content">
                    <a date-link href="/" class="c-header__logo">
                        <img src="./src/assets/images/logo.svg" alt="Logo" width="45" height="45" />
                    </a>
                    <nav class="c-header__nav" role="navigation" aria-label="main navigation">
                        <button
                            id="openMenu"
                            type="button"
                            class="c-button c-button--ghost c-icon-menu"
                        >
                            <span class="c-button__content">Ouvrir le menu</span>
                        </button>
                    </nav>
                </div>
            </header>

            <div id="menu" class="c-menu">
                <div class="c-menu__content">
                    <ul class="c-menu__list">
                        <li>
                            <a href="/game" class="c-button c-button--secondary">
                                Retour à l'accueil
                            </a>
                        </li>
                        <!--
                        <li>
                            <a href="/" class="c-button c-button--secondary">
                                Paramètres de la partie
                            </a>
                        </li>
                        -->
                        <li>
                            <a href="/" class="c-button c-button--secondary">
                                Quitter la partie
                            </a>
                        </li>
                        <li>
                            <button id="closeMenu" type="button" class="c-button c-button--secondary">
                                Fermer le menu
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        `;


        let openMenu = this.querySelector("#openMenu");
        let closeMenu = this.querySelector("#closeMenu");
        const menu = document.getElementById('menu');
        //

        openMenu.onclick = () => { 
            menu.classList.toggle('active');
            openMenu.classList.toggle("c-icon-menu-open");
        };

        closeMenu.onclick = () => {
            menu.classList.toggle('active');
            openMenu.classList.toggle("c-icon-menu-open");
        };

    }


}

customElements.define("nav-bar", Navbar);