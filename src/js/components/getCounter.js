// New component
class GetCounter extends HTMLElement {
    constructor() {
        super();

        if (localStorage.getItem("click") === null) {
            var count = 0;
        } else {
            var count = localStorage.getItem("click");
        }

        this.innerHTML = /*html*/`
            Clicks : ${count}
        `;

        
    }
}
customElements.define("get-counter", GetCounter);