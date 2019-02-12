export default class Typography {
  private name: string;
  private fontFamily: string;
  private fontWeight: number;
  private fontSize: number;
  private letterSpacing: number;
  private lineHeight: number;
  constructor(
    name: string,
    fFamily: string,
    fWeight: number,
    fSize: number,
    lSpacing: number,
    lHeight: number
  ) {
    this.name = name.replace(/\s+/g, "-").toUpperCase();
    this.fontFamily = fFamily;
    this.fontWeight = fWeight;
    this.fontSize = fSize;
    this.letterSpacing = lSpacing;
    this.lineHeight = lHeight;
  }
  get formatedName(): string {
    return this.name;
  }
  get CSSFontFamily(): string {
    const handler = `${this.name}-FONT-FAMILY`;
    const fontFamily = this.fontFamilyAddon(this.fontFamily);
    return `$${handler}: ${fontFamily};`;
  }
  get CSSFontWeight(): string {
    const handler = `${this.name}-FONT-WEIGHT`;
    return `$${handler}: ${this.fontWeight};`;
  }
  get CSSFontSize(): string {
    const handler = `${this.name}-FONT-SIZE`;
    return `$${handler}: ${this.fontSize.toFixed(2)}px;`;
  }
  get CSSLetterSpacing(): string {
    const handler = `${this.name}-LETTER-SPACING`;
    return `$${handler}: ${this.letterSpacing.toFixed(2)}px;`;
  }
  get CSSLineHeight(): string {
    const handler = `${this.name}-LINE-HEIGHT`;
    return `$${handler}: ${this.lineHeight.toFixed(2)}px;`;
  }
  get JSONFontFamily(): string {
    const name = this.name.replace(/-/g, "_");
    const fontFamily = this.fontFamilyAddon(`'${this.fontFamily}'`);
    const handler = `${name}_FONT_FAMILY`;
    return `export const ${handler} = "${fontFamily}";`;
  }
  get JSONFontWeight(): string {
    const name = this.name.replace(/-/g, "_");
    const handler = `${name}_FONT_WEIGHT`;
    return `export const ${handler} = '${this.fontWeight}';`;
  }
  get JSONFontSize(): string {
    const name = this.name.replace(/-/g, "_");
    const handler = `${name}_FONT_SIZE`;
    return `export const ${handler} = '${this.fontSize.toFixed(2)}px';`;
  }
  get JSONLetterSpacing(): string {
    const name = this.name.replace(/-/g, "_");
    const handler = `${name}_LETTER_SPACING`;
    return `export const ${handler} = '${this.letterSpacing.toFixed(2)}px';`;
  }
  get JSONLineHeight(): string {
    const name = this.name.replace(/-/g, "_");
    const handler = `${name}_LINE_HEIGHT`;
    return `export const ${handler} = '${this.lineHeight.toFixed(2)}px';`;
  }
  private fontFamilyAddon(fontFamily: string): string {
    return `${fontFamily},-apple-system,BlinkMacSystemFont,Segoe UI,\
    Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`;
  }
}
