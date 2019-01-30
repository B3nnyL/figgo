import {
  floatToInt,
  intToHex,
  rgbToHex,
  rgbaToString,
  rgbToHsl
} from "../lib/helper";
const fakeR = 0.8549019607843137;
const fakeG = 0.6470588235294118;
const fakeB = 0;
const fakeA = 1;

describe("helper can", () => {
  test("convert float to integer", () => {
    expect(floatToInt(fakeR)).toBe(218);
  });
  test("convert int to hex", () => {
    expect(intToHex(218)).toBe("da");
  });
  test("convert rgb to hex", () => {
    expect(rgbToHex(fakeR, fakeG, fakeB)).toBe("#daa500");
  });
  test("convert rgba float to rgba string", () => {
    expect(rgbaToString(fakeR, fakeG, fakeB, fakeA)).toBe("rgba(218,165,0,1)");
  });
});
