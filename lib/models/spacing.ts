export default class Spacing {
	private name: string;
	private value: number;
	constructor(name: string, value: number) {
		this.name = name;
		this.value = value;
	}

	get uppercaseName() {
		return this.name.replace(/\s+/g, "_").toUpperCase();
	}

	get lowercaseName() {
		return this.name.replace(/\s+/g, "-").toLowerCase();
	}

	get scss() {
		return `$${this.uppercaseName}: ${this.value.toFixed(2)}px;`;
	}

	get js() {
		const name = this.uppercaseName.replace(/-/g, "_");
		return `export const ${name} = '${this.value.toFixed(2)}px';`;
	}

	get css() {
		const name = this.lowercaseName.replace(/_/g, "-");
		return `--${name}: ${this.value.toFixed(2)}px;`;
	}
}
