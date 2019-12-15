import fetch from "node-fetch";
import { errorLog } from "./helper";
import INAccount from "./interfaces/account.interface";
import IBoard from "./interfaces/board.interface";
import Color from "./models/color";
import Space from "./models/spacing";
import Typography from "./models/typography";

export async function getAccount(token: string): Promise<INAccount> {
  const url = `https://api.figma.com/v1/me`;
  try {
    const result = await fetch(url, {
      headers: { "X-FIGMA-TOKEN": token },
      method: "get"
    });
    return result.json();
  } catch (err) {
    console.error(err);
  }
}

export async function getBoard(token: string, board: string): Promise<IBoard> {
  const url = `https://api.figma.com/v1/files/${board}`;
  try {
    const result = await fetch(url, {
      headers: { "X-FIGMA-TOKEN": token },
      method: "get"
    });
    return result.json();
  } catch (err) {
    console.log(err);
  }
}

export async function auth(token: string, board: string): Promise<any> {
  const url = `https://api.figma.com/v1/files/${board}`;
  let response;
  try {
    response = await fetch(url, {
      headers: { "X-FIGMA-TOKEN": token },
      method: "get"
    });
    if (response.status === 200) {
      return await response.json();
    } else {
      switch (response.status) {
        case 403:
          throw new Error(`${response.status} - Figgo cannot authenicate you`);
        case 404:
          throw new Error(
            `${response.status} - Figgo cannot find board (id:${board})`
          );
        default:
          break;
      }
      return;
    }
  } catch (e) {
    console.log(errorLog(e));
  }
}

export async function getColors(
  token: string,
  board: string,
  type: string
): Promise<string[]> {
  const data = await auth(token, board);
  if (data) {
    const frames = data.document.children[0].children;
    const array = [];
    const colorFrame = frames.filter(frame => frame.name === "Palette");
    if (!colorFrame.length) return colorFrame;
    const colorBlocks = colorFrame[0].children.filter(
      block => block.type === "RECTANGLE"
    );
    for (const i in colorBlocks) {
      if (colorBlocks[i].fills[0].type === "SOLID") {
        const name = colorBlocks[i].name;
        const rgba = colorBlocks[i].fills[0].color;
        const newColor = new Color(name, rgba.r, rgba.g, rgba.b, rgba.a);
        array.push(newColor[type]);
      }
    }
    return array;
  }
}

export async function getSpaces(
  token: string,
  board: string,
  type: string
): Promise<string[]> {
  const data = await auth(token, board);
  if (data) {
    const frames = data.document.children[0].children;
    const array = [];
    const spaceFrame = frames.filter(frame => frame.name === "Space");
    if (!spaceFrame.length) return spaceFrame;
    const spaceBlocks = spaceFrame[0].children.filter(
      blocks => blocks.type === "RECTANGLE"
    );
    for (const i in spaceBlocks) {
      if (spaceBlocks) {
        const name = spaceBlocks[i].name;
        const value = spaceBlocks[i].absoluteBoundingBox.width;
        const newSpace = new Space(name, value);
        array.push(newSpace[type]);
      }
    }
    return array;
  }
}

export async function getTypographics(
  token: string,
  board: string,
  type: string
): Promise<string[]> {
  const data = await auth(token, board);
  if (data) {
    const frames = data.document.children[0].children;
    const array = [];
    const typoFrame = frames.filter(frame => frame.name === "Typography");
    if (!typoFrame.length) return typoFrame;
    const typoBlocks = typoFrame[0].children.filter(
      blocks => blocks.type === "TEXT"
    );
    for (const i in typoBlocks) {
      if (typoBlocks[i]) {
        const name = typoBlocks[i].name;
        const style = typoBlocks[i].style;
        const {
          fontFamily,
          fontWeight,
          fontSize,
          letterSpacing,
          lineHeightPx
        } = style;
        const newTypo = new Typography(
          name,
          fontFamily,
          fontWeight,
          fontSize,
          letterSpacing,
          lineHeightPx
        );
        array.push(newTypo[type]);
      }
    }
    return array;
  }
}
