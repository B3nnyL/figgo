import rimraf from "rimraf";
import Storage from "../lib/storage";

const TOKEN = "23333";
const board = "my-board";
const outputDir = "./fakepath/me";

beforeAll(() => {
  rimraf("~/.fig-ma/", () => {
    console.log("clean up");
  });
});

describe("storage can ", () => {
  const myStorage = new Storage();
  test("detect if designated dir is existed", () => {
    expect(myStorage.isStorageDirExisted()).toBeFalsy();
  });

  test("detect if dir is existed", () => {
    expect(myStorage.isStorageDirExisted()).toBeTruthy();
  });

  test("detect if file existed", () => {
    expect(myStorage.isTokenFileExisted()).toBeFalsy();
  });

  test("can add token to file", () => {
    myStorage.token = TOKEN;
    console.log(myStorage.isTokenFileExisted());
    expect(myStorage.token).toBe(TOKEN);
  });

  test("can add board", () => {
    myStorage.boardName = board;
    expect(myStorage.boardName).toBe(board);
  });

  test("can add outputDir", () => {
    myStorage.outputDir = outputDir;
    expect(myStorage.outputDir).toBe(outputDir);
  });

  test("can remove file", () => {
    const result = myStorage.removeFile();
    expect(result).toBeTruthy();
  });
});
