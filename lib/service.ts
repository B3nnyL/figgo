import fetch from "node-fetch";
import INAccount from "./interfaces/account.interface";
import IBoard from "./interfaces/board.interface";

export async function getAccount(token: string): Promise<INAccount> {
  const url = `https://api.figma.com/v1/me`;
  try {
    const result = await fetch(url, {
      headers: { "X-FIGMA-TOKEN": token },
      // tslint:disable-next-line:trailing-comma
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
