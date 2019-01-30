import Color from "../lib/models/color";
const fakeColor = {
  name: "fake-color",
  r: 0.8549019607843137,
  g: 0.6470588235294118,
  b: 0,
  a: 1
};

describe("color class ", () => {
  const color = new Color(
    fakeColor.name,
    fakeColor.r,
    fakeColor.g,
    fakeColor.b,
    fakeColor.a
  );
  test("should set name with format", () => {
    expect(color.formatedName).toBe("FAKE-COLOR");
  });
  test("should get HEX ", () => {
    expect(color.HEX).toBe("#daa500");
  });

  test("should get rgba in string", () => {
    expect(color.RGBA).toBe("rgba(218,165,0,1.00)");
  });

  test("should return css string", () => {
    expect(color.CssColor).toBe("$FAKE-COLOR: #daa500;");
  });
});
