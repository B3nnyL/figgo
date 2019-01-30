export default class Spacing {
  private name: string;
  private value: number;
  constructor(name: string, value: number) {
    this.name = name.replace(/\s+/g, "-").toUpperCase();
    this.value = value;
  }
  get cssValue() {
    return `$${this.name}:${this.value.toFixed(2)}px`;
  }
}
