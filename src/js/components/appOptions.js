// New component
class appOptions extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = /*html*/`
            <ul class="c-buttonList">
                <!--
                <li class="c-buttonList__item">
                    <button type="button" class="c-button c-button--secondary c-button--icon-left c-icon-upload">
                        Exportez les données
                    </button>
                </li>

                <li class="c-buttonList__item">
                    <button type="button" class="c-button c-button--secondary c-button--icon-left c-icon-download">
                        Importer les données
                    </button>
                </li>
                -->

                <li class="c-buttonList__item">
                    <button id="showModal" type="button" class="c-button c-button--secondary c-button--icon-left c-icon-trash">
                        Supprimer les données
                    </button>
                </li>
                <li class="c-buttonList__item">
                    <button id="install_button" class="c-button c-button--secondary c-button--icon-left c-icon-chromium add-button">Installer l'application</button>
                </li>
            </ul>

            <dialog class="c-dialog" id="alertDialog">
                <h2 class="c-dialog__title">Supprimer les données ?</h2>
                <p>
                    Attention vous allez supprimer toutes les données, vous pouvez les sauvegarder en
                    utilisant "Exportez les données". Voulez-vous continuer ?
                </p>
                <div class="c-buttonGroup">
                    <button id="resetData" type="button" class="c-button c-button--primary">Supprimer les données</button>
                    <button id="closeModal" type="button" class="c-button c-button--secondary">Annuler</button>
                </div>
            </dialog>
        `;


        // Reset data
        let btnReset = this.querySelector("#resetData");
        btnReset.onclick = () => {
            localStorage.removeItem("medic_data");
            alertDialog.close();
            document.location.href="/";
        };

        // Modal
        let showModal = this.querySelector("#showModal");
        let closeModal = this.querySelector("#closeModal");
        const alertDialog = document.getElementById("alertDialog");

        showModal.onclick = () => {
            alertDialog.showModal();
        };

        closeModal.onclick = () => {
            alertDialog.close();
            
        };

        
        /*
        * Install PWA button
        */
        let deferredPrompt;
        const installBtn = document.getElementById("install_button");
        installBtn.style.display = "none";

        window.addEventListener("beforeinstallprompt", (e) => {

            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI to notify the user they can add to home screen
            installBtn.style.display = "block";

            installBtn.addEventListener("click", (e) => {
                // hide our user interface that shows our A2HS button
                installBtn.style.display = "none";
                // Show the prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === "accepted") {
                        console.log("User accepted the A2HS prompt");
                    } else {
                        console.log("User dismissed the A2HS prompt");
                    }
                    deferredPrompt = null;
                });
            });
        });
        
    }

}

customElements.define("app-options", appOptions);

