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
	get SCSSFontFamily(): string {
		const handler = `${this.name}-FONT-FAMILY`;
		const fontFamily = this.fontFamilyAddon(this.fontFamily, "scss");
		return `$${handler}: ${fontFamily};`;
	}
	get SCSSFontWeight(): string {
		const handler = `${this.name}-FONT-WEIGHT`;
		return `$${handler}: ${this.fontWeight};`;
	}
	get SCSSFontSize(): string {
		const handler = `${this.name}-FONT-SIZE`;
		return `$${handler}: ${this.fontSize.toFixed(2)}px;`;
	}
	get SCSSLetterSpacing(): string {
		const handler = `${this.name}-LETTER-SPACING`;
		return `$${handler}: ${this.letterSpacing.toFixed(2)}px;`;
	}
	get SCSSLineHeight(): string {
		const handler = `${this.name}-LINE-HEIGHT`;
		return `$${handler}: ${this.lineHeight.toFixed(2)}px;`;
	}
	get JSONFontFamily(): string {
		const name = this.name.replace(/-/g, "_");
		const fontFamily = this.fontFamilyAddon(`'${this.fontFamily}'`, "js");
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
	get CSSVariableFontFamily(): string {
		const handler = `${this.name}-FONT-FAMILY`;
		const fontFamily = this.fontFamilyAddon(this.fontFamily, "css");
		return `--${handler}: ${fontFamily};`;
	}
	get CSSVariableFontWeight(): string {
		const handler = `${this.name}-FONT-WEIGHT`;
		return `--${handler}: ${this.fontWeight};`;
	}
	get CSSVariableFontSize(): string {
		const handler = `${this.name}-FONT-SIZE`;
		return `--${handler}: ${this.fontSize.toFixed(2)}px;`;
	}
	get CSSVariableLetterSpacing(): string {
		const handler = `${this.name}-LETTER-SPACING`;
		return `--${handler}: ${this.letterSpacing.toFixed(2)}px;`;
	}
	get CSSVariableLineHeight(): string {
		const handler = `${this.name}-LINE-HEIGHT`;
		return `--${handler}: ${this.lineHeight.toFixed(2)}px;`;
	}
	private fontFamilyAddon(fontFamily: string, format: string): string {
		return format === "js"
			? // tslint:disable-next-line:max-line-length
			  `${fontFamily},-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`
			: // tslint:disable-next-line:max-line-length
			  `'${fontFamily}',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`;
	}
}
