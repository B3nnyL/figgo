import { TOKEN } from "../lib/envConfig";
import { getAccount, getBoard, getColors } from "../lib/service";

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
      console.log(result);
      expect(result).toBe("Lustigt");
    });
  });

  test("get colors", () => {
    getColors(TOKEN, "gFmmbJ0648oZLD2Y0arRLuy2").then(res => {
      const result = res;
      expect(res).toBe("23");
    });
  });
});
