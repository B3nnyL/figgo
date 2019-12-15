import { rgbaToString, rgbToHex } from "../helper";
export default class Color {
  private name: string;
  private rFloat: number;
  private gFloat: number;
  private bFloat: number;
  private aFloat: number;
  constructor(name: string, r: number, g: number, b: number, a: number) {
    this.name = name.replace(/\s+/g, "-").toUpperCase();
    this.rFloat = r;
    this.gFloat = g;
    this.bFloat = b;
    this.aFloat = a;
  }

  get formatedName() {
    return this.name;
  }
  get HEX(): string {
    if (this.rgbaIsValid()) {
      return rgbToHex(this.rFloat, this.gFloat, this.bFloat);
    }
  }

  get RGBA(): string {
    if (this.rgbaIsValid()) {
      return rgbaToString(this.rFloat, this.gFloat, this.bFloat, this.aFloat);
    }
  }

  get scss(): string {
    const color = this.aFloat < 1 ? this.RGBA : this.HEX;
    return `$${this.name}: ${color};`;
  }

  get js(): string {
    const color = this.aFloat < 1 ? this.RGBA : this.HEX;
    const name = this.name.replace(/-/g, "_");
    return `export const ${name} = '${color}';`;
  }

  get css(): string {
    const color = this.aFloat < 1 ? this.RGBA : this.HEX;
    const name = this.name.replace(/_/g, "-").toLowerCase();
    return `--${name}: ${color};`;
  }

  private rgbaIsValid(): boolean {
    if (!(this.rFloat || this.gFloat || this.bFloat || this.aFloat)) {
      return false;
    }
    return true;
  }
}
