import Typography from "../lib/models/typography";
const typography = {
	fontFamily: "Helvetica Neue",
	fontSize: 36,
	fontWeight: 700,
	letterSpacing: 0.5,
	lineHeight: 54,
	name: "fake-typo"
};

describe("typography", () => {
	const fakeTypo = new Typography(
		typography.name,
		typography.fontFamily,
		typography.fontWeight,
		typography.fontSize,
		typography.letterSpacing,
		typography.lineHeight
	);
	test("should return formated name", () => {
		expect(fakeTypo.formatedName).toBe("FAKE-TYPO");
	});

	test("should return SCSS formated font family", () => {
		expect(fakeTypo.SCSSFontFamily.trim()).toBe(
			"$FAKE-TYPO-FONT-FAMILY: 'Helvetica Neue',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;".trim()
		);
	});

	test("should return SCSS formated font weight", () => {
		expect(fakeTypo.SCSSFontWeight).toBe("$FAKE-TYPO-FONT-WEIGHT: 700;");
	});

	test("should return SCSS formated font size", () => {
		expect(fakeTypo.SCSSFontSize).toBe("$FAKE-TYPO-FONT-SIZE: 36.00px;");
	});

	test("should return SCSS formated font letter spacing", () => {
		expect(fakeTypo.SCSSLetterSpacing).toBe(
			"$FAKE-TYPO-LETTER-SPACING: 0.50px;"
		);
	});

	test("should return SCSS formated font line height", () => {
		expect(fakeTypo.SCSSLineHeight).toBe("$FAKE-TYPO-LINE-HEIGHT: 54.00px;");
	});

	test("should return CSS formated font family", () => {
		expect(fakeTypo.CSSVariableFontFamily.trim()).toBe(
			"--FAKE-TYPO-FONT-FAMILY: 'Helvetica Neue',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;".trim()
		);
	});

	test("should return CSS formated font weight", () => {
		expect(fakeTypo.CSSVariableFontWeight).toBe(
			"--FAKE-TYPO-FONT-WEIGHT: 700;"
		);
	});

	test("should return CSS formated font size", () => {
		expect(fakeTypo.CSSVariableFontSize).toBe(
			"--FAKE-TYPO-FONT-SIZE: 36.00px;"
		);
	});

	test("should return CSS formated font letter spacing", () => {
		expect(fakeTypo.CSSVariableLetterSpacing).toBe(
			"--FAKE-TYPO-LETTER-SPACING: 0.50px;"
		);
	});

	test("should return CSS formated font line height", () => {
		expect(fakeTypo.CSSVariableLineHeight).toBe(
			"--FAKE-TYPO-LINE-HEIGHT: 54.00px;"
		);
	});
});
