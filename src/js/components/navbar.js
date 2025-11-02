// New component
class Navbar extends HTMLElement {
    constructor() {
        super();

        // Game infos
        let appData = JSON.parse(localStorage.getItem("medic_data"));
        let currentGameID = appData.defaultSettings.currentGame;
        let currentGame = appData.games.filter(g => g.id === currentGameID);

        this.header = document.createElement('header');
        this.header.classList.add('c-header');
        this.header.setAttribute("role", "banner");


        this.headerContent = document.createElement('div');
        this.headerContent.classList.add('c-header__content');
        this.header.appendChild(this.headerContent);

        
        //Home
        if (this.hasAttribute("data-page") && this.getAttribute("data-page") === 'home') {
            if (this.hasAttribute("data-back")) {
                this.backUrl = this.getAttribute("data-back");
                this.header.innerHTML = `
                    <div class="c-header__content">
                        <a data-link href="/" class="c-header__logo">
                            <img src="./src/assets/images/logo.svg" alt="Logo" width="45" height="45" />
                        </a>
                        <a data-link href="${this.backUrl}" class="c-button c-button--sm c-button--ghost c-icon-arrow-left">
                            <span class="c-button__content">Retour</span>
                        </a>
                        <nav class="c-header__nav" role="navigation" aria-label="main navigation">
                            <h2 class="c-header__title">#Medic app</h2>
                        
                        </nav>
                    </div>
                `;
            } else {
                this.header.innerHTML = `
                    <div class="c-header__content">
                        <a data-link href="/" class="c-header__logo">
                            <img src="./src/assets/images/logo.svg" alt="Logo" width="45" height="45" />
                        </a>
                        <nav class="c-header__nav" role="navigation" aria-label="main navigation">
                            <h2 class="c-header__title">#Medic app</h2>
                        </nav>
                    </div>
                `;

            }
            
        }

        

        // Game home
        if (this.hasAttribute("data-page") && this.getAttribute("data-page") === 'game') {
            if (this.hasAttribute("data-back")) {
                this.backUrl = this.getAttribute("data-back");
                this.header.innerHTML = `
                    <div class="c-header__content">
                        <a data-link href="/" class="c-header__logo">
                            <img src="./src/assets/images/logo.svg" alt="Logo" width="45" height="45" />
                        </a>
                        <a data-link href="${this.backUrl}" class="c-button c-button--sm c-button--ghost c-icon-arrow-left">
                            <span class="c-button__content">Retour</span>
                        </a>
                        <nav class="c-header__nav" role="navigation" aria-label="main navigation">
                            <a data-link href="/game-options" class="c-button --sm c-button--ghost c-icon-settings">
                                <span class="c-button__content">Paramètres</span>
                            </a>

                            <a data-link href="/game-stats" class="c-button c-button--sm c-button--ghost c-icon-chart-pie">
                                <span class="c-button__content">Stats</span>
                            </a>

                            <button
                                id="openMenu"
                                type="button"
                                class="c-button c-button--ghost c-icon-menu"
                            >
                                <span class="c-button__content">Ouvrir le menu</span>
                            </button>
                        </nav>
                    </div>
                `;
            } else {
                this.header.innerHTML = `
                    <div class="c-header__content">
                        <a date-link href="/" class="c-header__logo">
                            <img src="./src/assets/images/logo.svg" alt="Logo" width="45" height="45" />
                        </a>
                        <nav class="c-header__nav" role="navigation" aria-label="main navigation">
                            <a data-link href="/game-options" class="c-button --sm c-button--ghost c-icon-settings">
                                <span class="c-button__content">Paramètres</span>
                            </a>

                            <a data-link href="/game-stats" class="c-button c-button--sm c-button--ghost c-icon-chart-pie">
                                <span class="c-button__content">Stats</span>
                            </a>

                            <button
                                id="openMenu"
                                type="button"
                                class="c-button c-button--ghost c-icon-menu"
                            >
                                <span class="c-button__content">Ouvrir le menu</span>
                            </button>
                        </nav>
                    </div>
                `;

            }
        }


        // In game
        if (this.hasAttribute("data-page") && this.getAttribute("data-page") === 'ingame') {
            this.header.innerHTML = `
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
            `;
        }

        this.appendChild(this.header);

        
        this.menu = document.createElement('div');
        this.menu.setAttribute("id", "menu");
        this.menu.classList.add('c-menu');
        if (this.hasAttribute("data-page") && this.getAttribute("data-page") === 'ingame') {
            this.menu.innerHTML = `
                <div class="c-menu__content">
                    <ul class="c-menu__list">
                        <li><a data-link href="/game" class="c-button c-button--secondary">Annuler le soin</a></li>
                        <li><a data-link href="/" class="c-button c-button--secondary">Quitter la partie</a></li>
                        <li><button id="closeMenu" type="button" class="c-button c-button--secondary">Fermer le menu</button></li>
                    </ul>
                </div>
            `;
        } else {
            this.menu.innerHTML = `
                <div class="c-menu__content">
                    <ul class="c-menu__list">
                        <li><a data-link href="/" class="c-button c-button--secondary">Quitter la partie</a></li>
                        <li><button id="closeMenu" type="button" class="c-button c-button--secondary">Fermer le menu</button></li>
                    </ul>
                </div>
            `;
        } 
       
        
      
        this.appendChild(this.menu);

    
        let openMenu = this.querySelector("#openMenu");
        let closeMenu = this.querySelector("#closeMenu");
        const menu = document.getElementById('menu');

        if(openMenu) {
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


}

customElements.define("nav-bar", Navbar);