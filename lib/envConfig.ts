import * as dotenv from "dotenv";

let token;
dotenv.config();
switch (process.env.NODE_ENV) {
  case "test":
    token = process.env.DEV_TOKEN;
    break;
  case "dev":
    token = process.env.DEV_TOKEN;
    break;
  default:
    token = process.env.DEV_TOKEN;
}

export const TOKEN = token;
