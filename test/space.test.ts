import Spacing from "../lib/models/spacing";
const fakeSpacing = {
	name: "fake_spacing",
	value: 2
};
describe("Spacing", () => {
	const fake = new Spacing(fakeSpacing.name, fakeSpacing.value);
	test("should accept name and value and return css string", () => {
		expect(fake.SCSSValue).toBe("$FAKE_SPACING: 2.00px;");
	});
	test("should accept name and value and return css string", () => {
		expect(fake.CSSVariableValue).toBe("--FAKE_SPACING: 2.00px;");
	});
});
