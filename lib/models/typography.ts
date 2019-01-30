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
    return `$${handler}: ${this.fontFamily};`;
  }
  get CSSFontWeight(): string {
    const handler = `${this.name}-FONT-WEIGHT`;
    return `$${handler}: ${this.fontWeight};`;
  }
  get CSSFontSize(): string {
    const handler = `${this.name}-FONT-SIZE`;
    return `$${handler}: ${this.fontSize}px;`;
  }
  get CSSLetterSpacing(): string {
    const handler = `${this.name}-LETTER-SPACING`;
    return `$${handler}: ${this.letterSpacing}px;`;
  }
  get CSSLineHeight(): string {
    const handler = `${this.name}-LINE-HEIGHT`;
    return `$${handler}: ${this.lineHeight}px;`;
  }
}
