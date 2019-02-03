import * as dotenv from "dotenv";

let token;
let board;
dotenv.config();
switch (process.env.NODE_ENV) {
  case "test":
    token = process.env.DEV_TOKEN;
    board = process.env.DEV_BOARD;
    break;
  case "dev":
    token = process.env.DEV_TOKEN;
    board = process.env.DEV_BOARD;
    break;
  default:
    token = process.env.DEV_TOKEN;
    board = process.env.DEV_BOARD;
}

export const TOKEN = token;
export const BOARD = board;
