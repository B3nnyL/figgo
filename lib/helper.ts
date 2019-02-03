import * as fs from "fs";
import { join } from "path";

// save files
export function saveColor(outDir: string, colors: string[], type: string) {
  switch (type) {
    case "scss":
      const scssContent = join(outDir, "_colorToken.scss");
      fs.writeFileSync(scssContent, colors.join("\n"), "utf-8");
      break;
    case "js":
      const jsContent = join(outDir, "colorToken.js");
      fs.writeFileSync(jsContent, colors.join("\n"), "utf-8");
      break;
    default:
      console.log(`Format ${type} is not supported for color`);
      break;
  }
}

export function saveSpaces(outDir: string, spaces: string[], type: string) {
  switch (type) {
    case "scss":
      const scssContent = join(outDir, "_spaceToken.scss");
      fs.writeFileSync(scssContent, spaces.join("\n"), "utf-8");
      break;
    case "js":
      const jsContent = join(outDir, "spaceToken.js");
      fs.writeFileSync(jsContent, spaces.join("\n"), "utf-8");
      break;
    default:
      console.log(`Format ${type} is not supported for spacing`);
      break;
  }
}

export function saveTypos(outDir: string, typos: string[], type: string) {
  switch (type) {
    case "scss":
      const scssContent = join(outDir, "_typoToken.scss");
      fs.writeFileSync(scssContent, typos.join("\n"), "utf-8");
      break;
    case "js":
      const jsContent = join(outDir, "typoToken.js");
      fs.writeFileSync(jsContent, typos.join("\n"), "utf-8");
      break;
    default:
      console.log(`Format ${type} is not supported for typography`);
      break;
  }
}

// covert float number to integer
export function floatToInt(float: number): number {
  return Math.ceil(float * 255);
}

// convert interger to hex
export function intToHex(int: number): string {
  let hex = Number(int).toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
}

// convert rgb color into a hex string
export function rgbToHex(r: number, g: number, b: number): string {
  const rHex = intToHex(floatToInt(r));
  const gHex = intToHex(floatToInt(g));
  const bHex = intToHex(floatToInt(b));
  return `#${rHex}${gHex}${bHex}`;
}

// convert rgba into a string
export function rgbaToString(
  r: number,
  g: number,
  b: number,
  a: number
): string {
  const rInt = floatToInt(r);
  const gInt = floatToInt(g);
  const bInt = floatToInt(b);
  return `rgba(${rInt},${gInt},${bInt},${a.toFixed(2)})`;
}
