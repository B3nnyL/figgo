import { TOKEN } from "../lib/envConfig";
import { getAccount, getBoard } from "../lib/service";

describe("service can ", () => {
  test("get user info", () => {
    getAccount(TOKEN).then(res => {
      const result = res.handle;
      expect(result).toBe("Shuying");
    });
  });

  test("get board", () => {
    getBoard(TOKEN, "gFmmbJ0648oZLD2Y0arRLuy2").then(res => {
      const result = res.name;
      expect(result).toBe("Lustigt");
    });
  });
});
