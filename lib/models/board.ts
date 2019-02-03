export default class Board {
  public boardName: string;
  public id: string;
  public outputDir: string;
  public outputFormat: string;
  public token: string;
  constructor(boardName: string) {
    this.boardName = boardName;
  }

  public setId(id) {
    this.id = id;
  }
  public setOutputDir(outputDir: string) {
    this.outputDir = outputDir;
  }
  public setOutputFormat(outputFormat: string) {
    this.outputFormat = outputFormat;
  }
  public setToken(token: string) {
    this.token = token;
  }
}
