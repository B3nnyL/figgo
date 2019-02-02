export default class Board {
  public boardName: string;
  public id: string;
  public outputDir: string;
  public outputFormat: string;
  public token: string;
  constructor(boardName: string) {
    this.boardName = boardName;
  }

  setId(id) {
    this.id = id;
  }
  setOutputDir(outputDir: string) {
    this.outputDir = outputDir;
  }
  setOutputFormat(outputFormat: string) {
    this.outputFormat = outputFormat;
  }
  setToken(token: string) {
    this.token = token;
  }
}
