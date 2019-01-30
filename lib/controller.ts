import * as fs from "fs";

export function saveColor(colors: string[]) {
  fs.writeFileSync("./myColorToken.scss", colors.join("\n"), "utf-8");
}

export function saveSpaces(spaces: string[]) {
  fs.writeFileSync("./mySpacesToken.scss", spaces.join("\n"), "utf-8");
}

export function saveTypos(typos: string[]) {
  fs.writeFileSync("./myTypographyToken.scss", typos.join("\n"), "utf-8");
}
