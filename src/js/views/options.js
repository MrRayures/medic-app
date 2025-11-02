import "../components/appOptions.js";
import "../components/navbar.js";

export default () => /*html*/`
    <nav-bar data-back="/" data-page="home"></nav-bar>

    <div class="c-content c-content--page">
        <h1 class="c-title">Options</h1>

        <app-options></app-options>

        <div class="c-block u-mt-32">
            <p class="u-mb-16">Pour une expérience optimale installer l'application sur Chrome.</p>
            <p>
                Les données sont stockées sur votre appareil dans le
                <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage" title="lien externe">
                    localStorage
                </a>
            </p>
        </div>

        <div class="c-buttonGroup u-mt-32">
            <a data-link href="/" class="c-button c-button--primary c-button--icon-left c-icon-arrow-left">Retour à l'accueil</a>
        </div>
    </div>
`;