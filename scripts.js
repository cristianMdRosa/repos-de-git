document.addEventListener("DOMContentLoaded", () => {
    const infoBtn = document.getElementById("infoBtn");
    const extraInfo = document.getElementById("extraInfo");

    infoBtn.addEventListener("click", () => {
        extraInfo.classList.toggle("hidden");
    });
});

// Custom Element para modularizar la página
class CustomCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const card = document.createElement("div");
        card.innerHTML = `
            <style>
                div {
                    background: white;
                    padding: 15px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    margin-top: 20px;
                }
            </style>
            <h3>${this.getAttribute("title")}</h3>
            <slot></slot>
        `;

        this.shadowRoot.appendChild(card);
    }
}

customElements.define("custom-card", CustomCard);
