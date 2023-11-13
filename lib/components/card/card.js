class MyCard extends HTMLElement {
	constructor() {
		super();
		const template = document.createElement('template');
		const title = this.getAttribute('title');
		const body = this.getAttribute('body');
		template.innerHTML = `
			${this._getStyle()}
			<div class="card">
				<div class="card-header">
					<h1 class="card-title">${title}</h1>
				</div>
				<div class="card-body">
					<p>${body}</p>
					<img src="https://picsum.photos/200/300"/>
				</div>
			</div>
		`;
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	_getStyle() {
		return `<style>
		.card {
			background-color:var(--background-color-primary);
			padding: 1rem;
			border-radius: 18px;
			box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
		}
		
			.card {
			
				height: auto;
				
			}
			.card-header {
				background-color: var(--background-color-secondary);
				border-bottom: 1px solid #ddd;
				padding: 10px;
			}
			.card-title {
				margin: 0;
			}
			.card-body {
				padding: 10px;
			}

		</style>`;
	}
}

customElements.define('my-card', MyCard);
