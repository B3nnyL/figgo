import Controller from "../lib/controller";
import { BOARD, TOKEN } from "../lib/envConfig";
import Board from "../lib/models/board";
const board = "my-board";

describe("controller can ", () => {
	const myController = new Controller();
	const newBoard = new Board(board);
	test("can append board ", () => {
		expect(myController.appendBoard(newBoard, board)).toBeTruthy();
	});

	test("detect if board is existed", () => {
		expect(myController.isBoardExisted(board)).toBeTruthy();
	});

	test("can add token to file", () => {
		myController.setBoardToken(TOKEN, board);
		expect(myController.getBoard(board).token).toBe(TOKEN);
	});

	test("can add id to file", () => {
		myController.setBoardId(BOARD, board);
		expect(myController.getBoard(board).id).toBe(BOARD);
	});

	test("can add outputDir", () => {
		myController.setBoardOutputDir("./", board);
		expect(myController.getBoard(board).outputDir).toBe("./");
	});

	test("can add outputFormat", () => {
		myController.setBoardOutputFormat("json", board);
		expect(myController.getBoard(board).outputFormat).toBe("json");
	});

	test("remove board", () => {
		myController.removeBoard(board);
		expect(myController.isBoardExisted(board)).toBeTruthy();
	});
});
