import Spacing from "../lib/models/spacing";
const fakeSpacing = {
  name: "fake-spacing",
  value: 2
};
describe("Spacing", () => {
  const fake = new Spacing(fakeSpacing.name, fakeSpacing.value);
  test("should accept name and value and return css string", () => {
    expect(fake.cssValue).toBe("$FAKE-SPACING: 2.00px;");
  });
});
