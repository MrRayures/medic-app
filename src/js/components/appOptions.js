// New component
class appOptions extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = /*html*/`
            <ul class="c-buttonList">
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

                <li class="c-buttonList__item">
                    <button id="showModal" type="button" class="c-button c-button--secondary c-button--icon-left c-icon-delete">
                        Supprimer les données
                    </button>
                </li>
            </ul>

            <dialog class="c-dialog" id="alertDialog">
                <p>Attention vous allez supprimer toutes les données, vous pouvez les sauvegarder en utilisant "Exportez les données".
                Voulez-vous continuer ?</p>
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
        
    }

}



customElements.define("app-options", appOptions);