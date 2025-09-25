import "../components/navbar.js";
import "../components/gameFooter.js";

export default () => /*html*/`
    <nav-bar></nav-bar>
    
    <div class="c-content c-content--page">
        <h1 class="c-title">Le patient soufre d'une :</h1>

        <div class="c-injury">
            <span class="c-icon-close c-icon--left"></span>
            <p class="c-injury__title">Fracture</p>
        </div>

        <p class="c-subtitle">Procéder au(x) soin(s) suivant(s) :</p>

        <form class="c-injuryTreat" action="/injury-healead">
            <ul class="c-injuryTreat__list">
                <li class="c-injuryTreat__listItem">
                    <span class="c-injuryTreat__marker">1</span>
                    <h2 class="c-injuryTreat__title">
                        <span id="progress" class="c-injuryTreat__progress"></span>
                        <p>Immobilisation</p>
                        <span id="percent" class="c-injuryTreat__percent"></span>
                    </h2>
                    <div class="c-injuryTreat__content">
                        <p>Immobilliser le membre fracturé avec un bandage</p>
                        <button
                            type="button"
                            class="c-button c-button--primary c-injuryTreat__button"
                            disabled
                        >
                            Etape suivante
                        </button>
                    </div>
                </li>
                <li class="c-injuryTreat__listItem">
                    <span class="c-injuryTreat__marker">2</span>
                    <h2 class="c-injuryTreat__title">
                        <span class="c-injuryTreat__progress"></span>
                        <p>Analgésique</p>
                        <span class="c-injuryTreat__percent"></span>
                    </h2>
                    <div class="c-injuryTreat__content">
                        <p>Injecter l’analgèsique</p>
                        <button
                            type="button"
                            class="c-button c-button--primary c-injuryTreat__button"
                            disabled
                        >
                            Etape suivante
                        </button>
                    </div>
                </li>
                <li class="c-injuryTreat__listItem">
                    <span class="c-injuryTreat__marker">3</span>
                    <h2 class="c-injuryTreat__title">
                        <span class="c-injuryTreat__progress"></span>
                        <p>Atelle</p>
                        <span class="c-injuryTreat__percent"></span>
                    </h2>
                    <div class="c-injuryTreat__content">
                        <p>Poser une attelle</p>
                        <button
                            type="submit"
                            class="c-button c-button--primary c-injuryTreat__button"
                            disabled
                        >
                            Terminer
                        </button>
                    </div>
                </li>
            </ul>
        </form>

        <a href="/injury-healed" class="c-button c-button--primary">Suivant</a>

        <game-footer></game-footer>
    </div>
`;