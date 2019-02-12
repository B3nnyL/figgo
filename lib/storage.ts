import * as fs from "fs";
import * as os from "os";
import { join } from "path";
import Board from "../lib/models/board";
import { errorLog, successLog, urlFactory, warningLog } from "./helper";

export default class Storage {
  private storageDir: string;
  private localDir: string;
  private globalFile: string;
  private localFile: string;

  constructor() {
    this.storageDir = join(os.homedir(), ".figgo");
    this.localDir = __dirname;
    this.globalFile = join(this.storageDir, "config.json");
    this.localFile = join(this.localDir, "figgo.json");
  }

  public readBoardsFromFile(): Board[] {
    const file = this.isLocalConfigFileExisted()
      ? this.localFile
      : this.globalFile;
    if (file === this.globalFile) {
      return this.setBoardFromGlobalConfig(file);
    } else {
      return this.setBoardFromLocalConfig(file);
    }
  }

  public writeFile(content: Board[]): string {
    try {
      fs.writeFileSync(this.globalFile, JSON.stringify({ boards: content }));
      return successLog(`successfully updated`);
    } catch (e) {
      return warningLog("fail");
    }
  }

  public isStorageDirExisted(): boolean {
    if (!fs.existsSync(this.storageDir)) {
      fs.mkdirSync(this.storageDir);
      return false;
    } else {
      return true;
    }
  }

  public removeConfigFile(): boolean {
    const link = this.globalFile;
    fs.unlinkSync(link);
    return this.isConfigFileExisted();
  }

  public isConfigFileExisted(): boolean {
    if (this.isStorageDirExisted()) {
      const file = this.globalFile;
      const isExist = fs.existsSync(file);
      return isExist;
    }
    return false;
  }

  public isLocalConfigFileExisted(): boolean {
    const file = this.localFile;
    const isExist = fs.existsSync(file);
    console.log(`🤓 Reading figgo setup from ${file}`);
    return isExist;
  }

  private setBoardFromGlobalConfig(file: string): Board[] {
    if (this.isStorageDirExisted()) {
      if (this.isConfigFileExisted()) {
        const content = fs.readFileSync(file, "utf8");
        const formatted = JSON.parse(content);
        if (formatted.boards) {
          return formatted.boards;
        } else {
          fs.writeFileSync(file, JSON.stringify({ boards: [] }));
          return [];
        }
      } else {
        fs.writeFileSync(file, JSON.stringify({ boards: [] }));
        return [];
      }
    }
  }

  private setBoardFromLocalConfig(file: string): Board[] {
    const content = fs.readFileSync(file, "utf8");
    const formatted = JSON.parse(content);
    try {
      if (formatted.boards) {
        return formatted.boards;
      }
    } catch (e) {
      console.log(warningLog(`check log config`));
    }
  }
}
