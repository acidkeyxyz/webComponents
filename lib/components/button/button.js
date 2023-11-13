class MyButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		const title = this.getAttribute('title');
		const color = this.getAttribute('color');
		this.shadowRoot.innerHTML = `
			${this._getStyle(color)}
			<button>${title}</button>`;
	}
	_getStyle(color) {
		return `
		<style>
				button {
					background-color: ${color};
					border-radius: 980px;
					border: none;
					color: white;
					padding: 15px 32px;
					text-align: center;
					text-decoration: none;
					display: inline-block;
					font-size: 16px;
				}
			</style>`;
	}
}

customElements.define('my-button', MyButton);
