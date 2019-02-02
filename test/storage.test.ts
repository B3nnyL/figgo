import rimraf from "rimraf";
import Storage from "../lib/storage";
import Board from "../lib/models/board";

const TOKEN = "23333";
const board = "my-board";
const outputDir = "./fakepath/me";

beforeAll(() => {
  rimraf("~/.figgo", () => {
    console.log("clean up");
  });
});

describe("storage can ", () => {
  const myStorage = new Storage();
  myStorage.setBoards();
  const board = new Board("fake-board");
  test("detect if dir is existed", () => {
    expect(myStorage.isStorageDirExisted()).toBeTruthy();
  });

  test("detect if file existed", () => {
    expect(myStorage.isConfigFileExisted()).toBeTruthy();
  });

  test("detect can add board", () => {
    myStorage.appendBoards(board, "fake-board");
    expect(myStorage.isBoardExisted("fake-board")).toBeTruthy();
  });

  test("can add token to file", () => {
    myStorage.setBoardToken(TOKEN, "fake-board");
    expect(myStorage.getBoard("fake-board").token).toBe(TOKEN);
  });

  test("can add id to file", () => {
    myStorage.setBoardId("id-2", "fake-board");
    expect(myStorage.getBoard("fake-board").id).toBe("id-2");
  });

  test("can add outputDir", () => {
    myStorage.setBoardOutputDir("~/token", "fake-board");
    expect(myStorage.getBoard("fake-board").outputDir).toBe("~/token");
  });

  test("can add outputFormat", () => {
    myStorage.setBoardOutputFormat("json", "fake-board");
    expect(myStorage.getBoard("fake-board").outputFormat).toBe("json");
  });

  test("remove board", () => {
    myStorage.removeBoard("fake-board");
    expect(myStorage.isBoardExisted("fake-board")).toBeFalsy();
  });

  test("can remove file", () => {
    const result = myStorage.removeConfigFile();
    expect(result).toBeFalsy();
  });
});
