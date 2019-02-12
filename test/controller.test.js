import Board from "../lib/models/board";
import Controller from "../lib/controller";

const TOKEN = "23333";
const board = "my-board";

describe("controller can ", () => {
  const myController = new Controller();
  const newBoard = new Board(board);
  test("detect if dir is existed", () => {
    expect(myController.appendBoard(newBoard, board)).toBeTruthy();
  });

  test("detect can add board", () => {
    expect(myController.isBoardExisted(board)).toBeTruthy();
  });

  test("can add token to file", () => {
    myController.setBoardToken(TOKEN, board);
    expect(myController.getBoard(board).token).toBe(TOKEN);
  });

  test("can add id to file", () => {
    myController.setBoardId("id-2", board);
    expect(myController.getBoard(board).id).toBe("id-2");
  });

  test("can add outputDir", () => {
    myController.setBoardOutputDir("~/token", board);
    expect(myController.getBoard(board).outputDir).toBe("~/token");
  });

  test("can add outputFormat", () => {
    myController.setBoardOutputFormat("json", board);
    expect(myController.getBoard(board).outputFormat).toBe("json");
  });

  test("remove board", () => {
    myController.removeBoard(board);
    expect(myController.isBoardExisted(board)).toBeFalsy();
  });
});
