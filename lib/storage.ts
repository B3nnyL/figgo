import * as fs from "fs";
import * as os from "os";
import { join } from "path";
import Board from "../lib/models/board";
import { errorLog, successLog, urlFactory, warningLog } from "./helper";

export default class Storage {
  private boards: Board[] = [];
  private storageDir: string;

  constructor() {
    this.storageDir = join(os.homedir(), ".figgo");
  }

  public setBoards() {
    if (this.isStorageDirExisted()) {
      const file = join(this.storageDir, "config.json");
      if (this.isConfigFileExisted()) {
        const content = fs.readFileSync(file, "utf8");
        const formatted = JSON.parse(content);
        if (formatted.boards) {
          this.boards = formatted.boards;
        } else {
          this.boards = [];
          fs.writeFileSync(file, JSON.stringify({ boards: [] }));
        }
      } else {
        fs.writeFileSync(file, JSON.stringify({ boards: [] }));
      }
    }
  }

  public appendBoards(newBoard: Board, bn: string) {
    if (!this.isBoardExisted(bn)) {
      this.boards.push(newBoard);
      const file = join(this.storageDir, "config.json");
      fs.writeFileSync(file, JSON.stringify({ boards: this.boards }));
      console.log(
        successLog(`Board ${bn} (${urlFactory(newBoard.id)}) is added to Figgo`)
      );
    } else {
      console.log(warningLog(`Board ${bn} is already existed`));
    }
  }

  public getBoard(bn: string): Board {
    return this.boards.filter(board => board.boardName === bn)[0];
  }
  public getBoards(): Board[] {
    return this.boards;
  }

  public setBoardOutputDir(dir: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      const target = this.getBoard(bn);
      target.outputDir = dir;
      this.saveFile(target, bn);
    } else {
      console.log(errorLog(`board ${bn} isn't existed`));
    }
  }

  public setBoardOutputFormat(format: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      const target = this.getBoard(bn);
      target.outputFormat = format;
      this.saveFile(target, bn);
    } else {
      console.log(errorLog(`board ${bn} isn't existed`));
    }
  }

  public setBoardToken(token: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      const target = this.getBoard(bn);
      target.token = token;
      this.saveFile(target, bn);
    } else {
      console.log(errorLog(`board ${bn} isn't existed`));
    }
  }

  public setBoardId(id: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      const target = this.getBoard(bn);
      target.id = id;
      this.saveFile(target, bn);
    } else {
      console.log(errorLog(`board ${bn} isn't existed`));
    }
  }

  public removeBoard(bn: string) {
    if (this.isBoardExisted(bn)) {
      const file = join(this.storageDir, "config.json");
      const content = fs.readFileSync(file, "utf8");
      const formatted = JSON.parse(content);
      const filtered = formatted.boards.filter(board => board.boardName !== bn);
      this.boards = filtered;
      fs.writeFileSync(file, JSON.stringify({ boards: filtered }));
      console.log(successLog(`Successfully removed board ${bn}`));
    } else {
      console.log(errorLog(`board ${bn} isn't existed`));
    }
  }

  public isBoardExisted(bn: string): boolean {
    return this.boards.some(board => board.boardName === bn) ? true : false;
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
    const link = join(this.storageDir, "config.json");
    fs.unlinkSync(link);
    return this.isConfigFileExisted();
  }

  public isConfigFileExisted(): boolean {
    if (this.isStorageDirExisted()) {
      const file = join(this.storageDir, "config.json");
      const isExist = fs.existsSync(file);
      return isExist;
    }
    return false;
  }

  private saveFile(target: Board, bn: string) {
    const file = join(this.storageDir, "config.json");
    const content = fs.readFileSync(file, "utf8");
    const formatted = JSON.parse(content);
    const filtered = formatted.boards.filter(board => board.boardName !== bn);
    filtered.push(target);
    this.boards = filtered;
    fs.writeFileSync(file, JSON.stringify({ boards: filtered }));
  }
}
