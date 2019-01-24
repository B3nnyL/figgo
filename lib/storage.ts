import * as fs from "fs";
import * as os from "os";
import { join } from "path";

export default class Storage {
  private storageDir: string;
  constructor() {
    this.storageDir = join(os.homedir(), ".fig-ma");
  }
  public isStorageDirExisted(): boolean {
    if (!fs.existsSync(this.storageDir)) {
      fs.mkdirSync(this.storageDir);
      return false;
    } else {
      return true;
    }
  }
  public removeFile(): boolean {
    const link = join(this.storageDir, "me.json");
    fs.unlinkSync(link);
    return true;
  }
  public isTokenFileExisted(): boolean {
    if (this.isStorageDirExisted()) {
      const file = join(this.storageDir, "me.json");
      const isExist = fs.existsSync(file) ? true : false;
      return isExist;
    }
  }
  get token(): string {
    if (this.isTokenFileExisted()) {
      const file = join(this.storageDir, "me.json");
      const content = fs.readFileSync(file, "utf8");
      const formatted = JSON.parse(content);
      if (formatted.token) {
        return formatted.token;
      }
    }
  }
  set token(tk: string) {
    const pair = { token: tk };
    const file = join(this.storageDir, "me.json");
    if (this.isTokenFileExisted()) {
      const content = fs.readFileSync(file, "utf8");
      let formatted = JSON.parse(content);
      try {
        if (formatted.token) {
          formatted.token = tk;
        } else {
          formatted = { ...formatted, ...pair };
        }
        fs.writeFileSync(file, JSON.stringify(formatted));
      } catch (e) {
        console.error(e);
      }
    } else {
      fs.writeFileSync(file, JSON.stringify(pair));
    }
  }
  get outputDir(): string {
    if (this.isTokenFileExisted()) {
      const file = join(this.storageDir, "me.json");
      const content = fs.readFileSync(file, "utf8");
      const formatted = JSON.parse(content);
      if (formatted.output) {
        return formatted.output;
      }
    }
  }
  set outputDir(dir: string) {
    const pair = { output: dir };
    const file = join(this.storageDir, "me.json");
    if (this.isTokenFileExisted()) {
      const content = fs.readFileSync(file, "utf8");
      let formatted = JSON.parse(content);
      try {
        if (formatted.output) {
          formatted.board = dir;
        } else {
          formatted = { ...formatted, ...pair };
        }
        fs.writeFileSync(file, JSON.stringify(formatted));
      } catch (e) {
        console.error(e);
      }
    } else {
      fs.writeFileSync(file, JSON.stringify(pair));
    }
  }
  get boardName(): string {
    if (this.isTokenFileExisted()) {
      const file = join(this.storageDir, "me.json");
      const content = fs.readFileSync(file, "utf8");
      const formatted = JSON.parse(content);
      if (formatted.board) {
        return formatted.board;
      }
    }
  }
  set boardName(bn: string) {
    const pair = { board: bn };
    const file = join(this.storageDir, "me.json");
    if (this.isTokenFileExisted()) {
      const content = fs.readFileSync(file, "utf8");
      let formatted = JSON.parse(content);
      try {
        if (formatted.board) {
          formatted.board = bn;
        } else {
          formatted = { ...formatted, ...pair };
        }
        fs.writeFileSync(file, JSON.stringify(formatted));
      } catch (e) {
        console.error(e);
      }
    } else {
      fs.writeFileSync(file, JSON.stringify(pair));
    }
  }
}
