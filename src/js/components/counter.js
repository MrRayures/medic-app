// New component
class Counter extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = /*html*/`
            <button id="clicks" type="button">Clicks : ${count}</button>
            <button id="reset" type="button">Reset count</button>
        `;

        let btnClicks = this.querySelector("#clicks");
        let btnReset = this.querySelector("#reset");

        // State
        btnClicks.onclick = () => {
            btnClicks.innerHTML = "Clicks : " + ++count;
            localStorage.setItem("click", count);
        };

        // Reset
        btnReset.onclick = () => {
            console.log('Reset');
            localStorage.removeItem("click");
            count = 0;
            btnClicks.innerHTML = "Clicks : " + count;
            return count = 0;
        };
    }
}

if (localStorage.getItem("click") === null) {
    var count = 0;
} else {
    var count = localStorage.getItem("click");
}

customElements.define("click-counter", Counter);