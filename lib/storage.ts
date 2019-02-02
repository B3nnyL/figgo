import * as fs from "fs";
import * as os from "os";
import { join } from "path";
import Board from "../lib/models/board";

export default class Storage {
  private boards: Array<Board> = [];
  private storageDir: string;

  constructor() {
    this.storageDir = join(os.homedir(), ".figgo");
  }

  setBoards() {
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

  appendBoards(newBoard: Board, bn: string) {
    if (!this.isBoardExisted(bn)) {
      this.boards.push(newBoard);
      const file = join(this.storageDir, "config.json");
      fs.writeFileSync(file, JSON.stringify({ boards: this.boards }));
    } else {
      console.log(`board ${bn} is existed`);
    }
  }

  getBoard(bn: string): Board {
    return this.boards.filter(board => board.boardName === bn)[0];
  }

  private saveFile(target: Board, bn: string) {
    const file = join(this.storageDir, "config.json");
    const content = fs.readFileSync(file, "utf8");
    let formatted = JSON.parse(content);
    let filtered = formatted.boards.filter(board => board.boardName != bn);
    filtered.push(target);
    this.boards = filtered;
    fs.writeFileSync(file, JSON.stringify({ boards: filtered }));
  }

  setBoardOutputDir(dir: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      let target = this.getBoard(bn);
      target.outputDir = dir;
      this.saveFile(target, bn);
    } else {
      console.log(`board ${bn} isn't existed`);
    }
  }

  setBoardOutputFormat(format: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      let target = this.getBoard(bn);
      target.outputFormat = format;
      this.saveFile(target, bn);
    } else {
      console.log(`board ${bn} isn't existed`);
    }
  }

  setBoardToken(token: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      let target = this.getBoard(bn);
      target.token = token;
      this.saveFile(target, bn);
    } else {
      console.log(`board ${bn} isn't existed`);
    }
  }

  setBoardId(id: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      let target = this.getBoard(bn);
      target.id = id;
      this.saveFile(target, bn);
    } else {
      console.log(`board ${bn} isn't existed`);
    }
  }

  removeBoard(bn: string) {
    if (this.isBoardExisted(bn)) {
      const file = join(this.storageDir, "config.json");
      const content = fs.readFileSync(file, "utf8");
      let formatted = JSON.parse(content);
      let filtered = formatted.boards.filter(board => board.boardName != bn);
      this.boards = filtered;
      fs.writeFileSync(file, JSON.stringify({ boards: filtered }));
    } else {
      console.log(`board ${bn} isn't existed`);
    }
  }

  isBoardExisted(bn: string): boolean {
    return this.boards.some(board => board.boardName === bn) ? true : false;
  }

  isStorageDirExisted(): boolean {
    if (!fs.existsSync(this.storageDir)) {
      fs.mkdirSync(this.storageDir);
      return false;
    } else {
      return true;
    }
  }

  removeConfigFile(): boolean {
    const link = join(this.storageDir, "config.json");
    fs.unlinkSync(link);
    return this.isConfigFileExisted();
  }

  isConfigFileExisted(): boolean {
    if (this.isStorageDirExisted()) {
      const file = join(this.storageDir, "config.json");
      const isExist = fs.existsSync(file);
      console.log(isExist);
      return isExist;
    }
    return false;
  }
}
