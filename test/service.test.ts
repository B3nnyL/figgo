import { BOARD, TOKEN } from "../lib/envConfig";
import {
	auth,
	getAccount,
	getBoard,
	getColors,
	getSpaces,
	getTypographics
} from "../lib/service";

describe("service can ", () => {
	test("get user info", () => {
		getAccount(TOKEN).then(res => {
			const result = res.handle;
			expect(result).toBe("Shuying");
		});
	});

	test("get auth", async () => {
		const res = await auth(TOKEN, BOARD);
		expect(res.name).toBe("Figgo");
	});

	test("get board", async () => {
		const res = await getBoard(TOKEN, BOARD);
		expect(res.name).toBe("Figgo");
	});

	test("get colors", async () => {
		const res = await getColors(TOKEN, BOARD, "scss");
		expect(res.length).toBe(17);
	});

	test("get spaces", async () => {
		const res = await getSpaces(TOKEN, BOARD, "scss");
		expect(res.length).toBe(4);
	});

	test("get typo", async () => {
		const res = await getTypographics(TOKEN, BOARD, "scss");
		console.log(res);
	});
});
