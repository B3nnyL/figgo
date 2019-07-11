import chalk from "chalk";
import * as fs from "fs";
import { join } from "path";
// save files
export function saveColor(outDir: string, colors: string[], type: string) {
	if (colors !== undefined) {
		switch (type) {
			case "scss":
				const scssDist = join(outDir, "_colorToken.scss");
				fs.writeFileSync(scssDist, colors.join("\n"), "utf-8");
				console.log(successLog(`🎨 Color tokens are updated at ${scssDist}`));
				break;
			case "js":
				const jsDist = join(outDir, "colorToken.js");
				fs.writeFileSync(jsDist, colors.join("\n"), "utf-8");
				console.log(successLog(`🎨 Color tokens are updated at ${jsDist}`));
				break;
			case "css":
				const cssDist = join(outDir, "colorToken.css");
				fs.writeFileSync(jsDist, colors.join("\n"), "utf-8");
				console.log(successLog(`🎨 Color tokens are updated at ${cssDist}`));
				break;
			default:
				console.log(errorLog(`Format ${type} is not supported for color`));
				break;
		}
	} else {
		console.log(errorLog("No color token is updated"));
	}
}

export function saveSpaces(outDir: string, spaces: string[], type: string) {
	if (spaces !== undefined) {
		switch (type) {
			case "scss":
				const scssDist = join(outDir, "_spaceToken.scss");
				fs.writeFileSync(scssDist, spaces.join("\n"), "utf-8");
				console.log(successLog(`🛰 Spacing tokens are updated at ${scssDist}`));
				break;
			case "js":
				const jsDist = join(outDir, "spaceToken.js");
				fs.writeFileSync(jsDist, spaces.join("\n"), "utf-8");
				console.log(successLog(`🛰 Spacing tokens are updated at ${jsDist}`));
				break;
			case "css":
				const cssDist = join(outDir, "spaceToken.css");
				fs.writeFileSync(jsDist, spaces.join("\n"), "utf-8");
				console.log(successLog(`🛰 Spacing tokens are updated at ${cssDist}`));
				break;
			default:
				console.log(successLog(`Format ${type} is not supported for spacing`));
				break;
		}
	} else {
		console.log(errorLog("No spacing token is updated"));
	}
}

export function saveTypos(outDir: string, typos: string[], type: string) {
	if (typos !== undefined) {
		switch (type) {
			case "scss":
				const scssDist = join(outDir, "_typoToken.scss");
				fs.writeFileSync(scssDist, typos.join("\n"), "utf-8");
				console.log(
					successLog(`✍️ Typography tokens are updated at ${scssDist}`)
				);
				break;
			case "js":
				const jsDist = join(outDir, "typoToken.js");
				fs.writeFileSync(jsDist, typos.join("\n"), "utf-8");
				console.log(
					successLog(`✍️ Typography tokens are updated at ${jsDist}`)
				);
				break;
			case "css":
				const cssDist = join(outDir, "typoToken.css");
				fs.writeFileSync(jsDist, typos.join("\n"), "utf-8");
				console.log(
					successLog(`✍️ Typography tokens are updated at ${cssDist}`)
				);
				break;
			default:
				console.log(
					successLog(`Format ${type} is not supported for typography`)
				);
				break;
		}
	} else {
		console.log(errorLog("No typography token is updated"));
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

export function errorLog(log: string): string {
	const label = chalk.red("Error");
	return `${label}  ${log}`;
}

export function successLog(log: string): string {
	const label = chalk.cyan("Success");
	return `${label}  ${log}`;
}

export function warningLog(log: string): string {
	const label = chalk.yellow("Warning");
	return `${label}  ${log}`;
}

export function urlFactory(id: string): string {
	const url = `https://www.figma.com/file/${id}`;
	return url;
}
