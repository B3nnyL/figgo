import Storage from "../lib/storage";

describe("storage can ", () => {
  const myStorage = new Storage();
  test("detect if dir is existed", () => {
    expect(myStorage.isStorageDirExisted()).toBeTruthy();
  });

  test("detect global config", () => {
    expect(myStorage.isConfigFileExisted()).toBeTruthy();
  });

  test("detect local config", () => {
    expect(myStorage.isLocalConfigFileExisted()).toBeFalsy();
  });
});
