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
		this.name = name;
		this.fontFamily = fFamily;
		this.fontWeight = fWeight;
		this.fontSize = fSize;
		this.letterSpacing = lSpacing;
		this.lineHeight = lHeight;
	}

	get uppercaseName() {
		return this.name.replace(/\s+/g, "_").toUpperCase();
	}

	get lowercaseName() {
		return this.name.replace(/\s+/g, "-").toLowerCase();
	}

	get SCSSFontFamily(): string {
		const handler = `${this.uppercaseName}-FONT-FAMILY`;
		const fontFamily = this.fontFamilyAddon(this.fontFamily, "SCSS");
		return `$${handler}: ${fontFamily};`;
	}
	get SCSSFontWeight(): string {
		const handler = `${this.uppercaseName}-FONT-WEIGHT`;
		return `$${handler}: ${this.fontWeight};`;
	}
	get SCSSFontSize(): string {
		const handler = `${this.uppercaseName}-FONT-SIZE`;
		return `$${handler}: ${this.fontSize.toFixed(2)}px;`;
	}
	get SCSSLetterSpacing(): string {
		const handler = `${this.uppercaseName}-LETTER-SPACING`;
		return `$${handler}: ${this.letterSpacing.toFixed(2)}px;`;
	}
	get SCSSLineHeight(): string {
		const handler = `${this.uppercaseName}-LINE-HEIGHT`;
		return `$${handler}: ${this.lineHeight.toFixed(2)}px;`;
	}

	get CSSFontFamily(): string {
		const handler = `${this.uppercaseName}-font-family`;
		const fontFamily = this.fontFamilyAddon(this.fontFamily, "css");
		return `--${handler}: ${fontFamily};`;
	}
	get CSSFontWeight(): string {
		const handler = `${this.lowercaseName}-font-weight`;
		return `$${handler}: ${this.fontWeight};`;
	}
	get CSSFontSize(): string {
		const handler = `${this.lowercaseName}-font-size`;
		return `--${handler}: ${this.fontSize.toFixed(2)}px;`;
	}
	get CSSLetterSpacing(): string {
		const handler = `${this.lowercaseName}-letter-spacing`;
		return `--${handler}: ${this.letterSpacing.toFixed(2)}px;`;
	}
	get CSSLineHeight(): string {
		const handler = `${this.lowercaseName}-line-height`;
		return `--${handler}: ${this.lineHeight.toFixed(2)}px;`;
	}

	get JSFontFamily(): string {
		const name = this.uppercaseName.replace(/-/g, "_");
		const fontFamily = this.fontFamilyAddon(`'${this.fontFamily}'`, "js");
		const handler = `${name}_FONT_FAMILY`;
		return `export const ${handler} = "${fontFamily}";`;
	}

	get JSFontWeight(): string {
		const name = this.uppercaseName.replace(/-/g, "_");
		const handler = `${name}_FONT_WEIGHT`;
		return `export const ${handler} = '${this.fontWeight}';`;
	}

	get JSFontSize(): string {
		const name = this.uppercaseName.replace(/-/g, "_");
		const handler = `${name}_FONT_SIZE`;
		return `export const ${handler} = '${this.fontSize.toFixed(2)}px';`;
	}
	get JSLetterSpacing(): string {
		const name = this.uppercaseName.replace(/-/g, "_");
		const handler = `${name}_LETTER_SPACING`;
		return `export const ${handler} = '${this.letterSpacing.toFixed(2)}px';`;
	}

	get JSLineHeight(): string {
		const name = this.uppercaseName.replace(/-/g, "_");
		const handler = `${name}_LINE_HEIGHT`;
		return `export const ${handler} = '${this.lineHeight.toFixed(2)}px';`;
	}

	private fontFamilyAddon(fontFamily: string, format: string): string {
		return format === "js"
			? // tslint:disable-next-line:max-line-length
			  `${fontFamily},-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`
			: // tslint:disable-next-line:max-line-length
			  `'${fontFamily}',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`;
	}

	get css(): string {
		return `${this.CSSFontFamily}
    \n${this.CSSFontSize}
    \n${this.CSSFontWeight}
    \n${this.CSSLetterSpacing}
    \n${this.CSSLineHeight}`;
	}

	get scss(): string {
		return `${this.SCSSFontFamily}
      \n${this.SCSSFontSize}
      \n${this.SCSSFontWeight}
      \n${this.SCSSLetterSpacing}
      \n${this.SCSSLineHeight}`;
	}

	get js(): string {
		return `${this.JSFontFamily}
      \n${this.JSFontSize}
      \n${this.JSFontWeight}
      \n${this.JSLetterSpacing}
      \n${this.JSLineHeight}`;
	}
}
