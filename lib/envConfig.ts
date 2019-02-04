import * as dotenv from "dotenv";

let token;
let board;
let dir;
dotenv.config();
switch (process.env.NODE_ENV) {
  case "test":
    token = process.env.DEV_TOKEN;
    board = process.env.DEV_BOARD;
    dir = process.env.TEST_DIR;
    break;
  case "dev":
    token = process.env.DEV_TOKEN;
    board = process.env.DEV_BOARD;
    dir = process.env.DEV_DIR;
    break;
  case "prod":
    token = process.env.DEV_TOKEN;
    board = process.env.DEV_BOARD;
    dir = process.env.PROD_DIR;
    break;
}

export const TOKEN = token;
export const BOARD = board;
export const DIR = dir;
