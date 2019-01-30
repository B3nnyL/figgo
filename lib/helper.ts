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