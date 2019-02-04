import * as fs from "fs";
import { join } from "path";

// save files
export function saveColor(outDir: string, colors: string[], type: string) {
  switch (type) {
    case "scss":
      const scssDist = join(outDir, "_colorToken.scss");
      fs.writeFileSync(scssDist, colors.join("\n"), "utf-8");
      console.log(`🎨 Color tokens are updated at ${scssDist}`);
      break;
    case "js":
      const jsDist = join(outDir, "colorToken.js");
      fs.writeFileSync(jsDist, colors.join("\n"), "utf-8");
      console.log(`🎨 Color tokens are updated at ${jsDist}`);
      break;
    default:
      console.log(`Format ${type} is not supported for color`);
      break;
  }
}

export function saveSpaces(outDir: string, spaces: string[], type: string) {
  switch (type) {
    case "scss":
      const scssDist = join(outDir, "_spaceToken.scss");
      fs.writeFileSync(scssDist, spaces.join("\n"), "utf-8");
      console.log(`🛰 Spacing tokens are updated at ${scssDist}`);
      break;
    case "js":
      const jsDist = join(outDir, "spaceToken.js");
      fs.writeFileSync(jsDist, spaces.join("\n"), "utf-8");
      console.log(`🛰 Spacing tokens are updated at ${jsDist}`);
      break;
    default:
      console.log(`Format ${type} is not supported for spacing`);
      break;
  }
}

export function saveTypos(outDir: string, typos: string[], type: string) {
  switch (type) {
    case "scss":
      const scssDist = join(outDir, "_typoToken.scss");
      fs.writeFileSync(scssDist, typos.join("\n"), "utf-8");
      console.log(`✍️ Typography tokens are updated at ${scssDist}`);
      break;
    case "js":
      const jsDist = join(outDir, "typoToken.js");
      fs.writeFileSync(jsDist, typos.join("\n"), "utf-8");
      console.log(`✍️ Typography tokens are updated at ${jsDist}`);
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
