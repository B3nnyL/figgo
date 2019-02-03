export default class Spacing {
  private name: string;
  private value: number;
  constructor(name: string, value: number) {
    this.name = name.replace(/\s+/g, "_").toUpperCase();
    this.value = value;
  }
  get cssValue() {
    return `$${this.name}: ${this.value.toFixed(2)}px;`;
  }

  get JSONValue() {
    const name = this.name.replace(/-/g, "_");
    return `export const ${name} = '${this.value.toFixed(2)}px';`;
  }
}
