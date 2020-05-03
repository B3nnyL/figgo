
let token;
let board;
let ownerName;

if (process.env.NODE_ENV == "test") {
		token = process.env.TEST_TOKEN;
		board = process.env.TEST_BOARD;
		ownerName = process.env.TEST_OWNER;
} else {
		token = process.env.DEV_TOKEN;
		board = process.env.DEV_BOARD;
		ownerName = process.env.DEV_OWNER;
}

export const TOKEN = token;
export const BOARD = board;
export const OWNER_NAME = ownerName;
