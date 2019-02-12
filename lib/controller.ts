import { errorLog, successLog, urlFactory, warningLog } from "./helper";
import Board from "./models/board";
import Storage from "./storage";

export default class Controller {
  private storage: Storage;
  private boards: Board[];
  constructor() {
    this.storage = new Storage();
    this.boards = this.storage.readBoardsFromFile();
  }

  public appendBoard(newBoard: Board, bn: string): boolean {
    if (!this.isBoardExisted(bn)) {
      this.boards.push(newBoard);
      console.log(this.storage.writeFile(this.boards));
      console.log(
        successLog(`Board ${bn} (${urlFactory(newBoard.id)}) is added to Figgo`)
      );
      return true;
    } else {
      console.log(warningLog(`Board ${bn} is already existed`));
      return false;
    }
  }

  public setBoardOutputDir(dir: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      const target = this.getBoard(bn);
      target.outputDir = dir;
      this.saveExistingBoard(target, bn);
    } else {
      console.log(errorLog(`board ${bn} isn't existed`));
    }
  }

  public setBoardOutputFormat(format: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      const target = this.getBoard(bn);
      target.outputFormat = format;
      this.saveExistingBoard(target, bn);
    } else {
      console.log(errorLog(`board ${bn} isn't existed`));
    }
  }

  public setBoardToken(token: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      const target = this.getBoard(bn);
      target.token = token;
      this.saveExistingBoard(target, bn);
    } else {
      console.log(errorLog(`board ${bn} isn't existed`));
    }
  }

  public setBoardId(id: string, bn: string) {
    if (this.isBoardExisted(bn)) {
      const target = this.getBoard(bn);
      target.id = id;
      this.saveExistingBoard(target, bn);
    } else {
      console.log(errorLog(`board ${bn} isn't existed`));
    }
  }

  public saveNewBoard(
    bn: string,
    id: string,
    outputDir: string,
    outputFormat: string,
    token: string
  ) {
    const newBoard = new Board(bn);
    this.appendBoard(newBoard, bn);
    this.setBoardId(id, bn);
    this.setBoardOutputDir(outputDir, bn);
    this.setBoardOutputFormat(outputFormat, bn);
    this.setBoardToken(token, bn);
  }

  public saveExistingBoard(target: Board, bn: string): void {
    const filtered = this.boards.filter(board => board.boardName !== bn);
    filtered.push(target);
    console.log(this.storage.writeFile(filtered));
  }

  public removeBoard(bn: string) {
    if (this.isBoardExisted(bn)) {
      const afterRemove = this.boards.filter(board => board.boardName === bn);
      this.storage.writeFile(afterRemove);
    } else {
      console.log(errorLog(`board ${bn} isn't existed`));
    }
  }

  public getStorage(): Storage {
    return this.storage;
  }

  public getBoards(): Board[] {
    return this.boards;
  }

  public isBoardExisted(bn: string): boolean {
    return this.boards.some(board => board.boardName === bn) ? true : false;
  }

  public getBoard(bn: string): Board {
    return this.boards.filter(board => board.boardName === bn)[0];
  }
}
