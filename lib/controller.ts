import * as fs from "fs";
import { join } from "path";

export function saveColor(outDir: string, colors: string[]) {
  const dist = join(outDir, "_colorToken.scss");
  fs.writeFileSync(dist, colors.join("\n"), "utf-8");
}

export function saveSpaces(outDir: string, spaces: string[]) {
  const dist = join(outDir, "_spaceToken.scss");
  fs.writeFileSync(dist, spaces.join("\n"), "utf-8");
}

export function saveTypos(outDir: string, typos: string[]) {
  const dist = join(outDir, "_typographicToken.scss");
  fs.writeFileSync(dist, typos.join("\n"), "utf-8");
}
