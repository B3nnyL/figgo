import { TOKEN, BOARD } from "../lib/envConfig";
import { getAccount, getBoard, getColors } from "../lib/service";

describe("service can ", () => {
  test("get user info", () => {
    getAccount(TOKEN).then(res => {
      const result = res.handle;
      expect(result).toBe("Shuying");
    });
  });

  test("get board", () => {
    getBoard(TOKEN, BOARD).then(res => {
      const result = res.name;
      console.log(result);
      expect(result).toBe("Figgo");
    });
  });

  test("get colors", () => {
    getColors(TOKEN, BOARD).then(res => {
      expect(res).toBe("23");
    });
  });
});
