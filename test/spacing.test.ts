import Spacing from "../lib/models/spacing";
const fakeSpacing = {
	name: "fake_spacing",
	value: 2
};
describe("Spacing", () => {
	const fake = new Spacing(fakeSpacing.name, fakeSpacing.value);

	test("should accept name and value and return scss string", () => {
		expect(fake.scss).toBe("$FAKE_SPACING: 2.00px;");
	});

	test("should accept name and value and return scss string", () => {
		expect(fake.css).toBe("--fake-spacing: 2.00px;");
	});
});
