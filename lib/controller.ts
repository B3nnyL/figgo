import Board from "./models/board";
import Storage from "./storage";
export default class Controller {
  private storage: Storage;
  constructor() {
    this.storage = new Storage();
  }
  public saveBoard(
    bn: string,
    id: string,
    outputDir: string,
    outputFormat: string,
    token: string
  ) {
    const newBoard = new Board(bn);
    this.storage.appendBoards(newBoard, bn);
    this.storage.setBoardId(id, bn);
    this.storage.setBoardOutputDir(outputDir, bn);
    this.storage.setBoardOutputFormat(outputFormat, bn);
    this.storage.setBoardToken(token, bn);
  }
  public getStorage(): Storage {
    return this.storage;
  }
}
