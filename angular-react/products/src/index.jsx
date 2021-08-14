import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Webcomponents extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        ReactDOM.render(<App />, this);
    }
}

customElements.define('web-components-products', Webcomponents);
