import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Articles')
    }

    async getHtml() {
        return `
            <div class="c-content">
                <h1>Articles</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in ducimus quam deleniti quibusdam voluptatem repellendus ipsa, expedita neque voluptas. Dolore, non blanditiis! Deserunt voluptatum amet dicta, earum vitae facilis.</p>
            </div>  
        `;
    }
}

