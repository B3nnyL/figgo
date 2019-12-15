import * as dotenv from "dotenv";

let token;
let board;
let ownerName;
dotenv.config();
switch (process.env.NODE_ENV) {
  case "test":
    token = process.env.TEST_TOKEN;
    board = process.env.TEST_BOARD;
    ownerName = process.env.TEST_OWNER;
    break;
  case "dev":
    token = process.env.DEV_TOKEN;
    board = process.env.DEV_BOARD;
    ownerName = process.env.DEV_OWNER;
    break;
}

export const TOKEN = token;
export const BOARD = board;
export const OWNER_NAME = ownerName;
