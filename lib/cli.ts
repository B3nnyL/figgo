import meow from "meow";
const { prompt } = require("enquirer");
import { saveColor } from "./controller";
import { hints } from "./hint";
import { getColors } from "./service";
import Storage from "./storage";
import Board from "./models/board";

const cli = meow(hints, {
  flags: {
    help: {
      alias: "h",
      type: "boolean"
    },
    version: {
      alias: "v",
      type: "boolean"
    },
    list: {
      alias: "l",
      type: "boolean"
    },
    sync: {
      alias: "s",
      type: "boolean"
    },
    remove: {
      alias: "r",
      type: "string"
    },
    init: {
      alias: "i",
      type: "boolean"
    }
  }
});

const { input, flags } = cli;
console.log(input, flags);

const storage = new Storage();

if (flags.list) {
  console.log("listing...");
}

if (flags.sync) {
  if (input.length < 1) {
    console.log("sync...", flags.sync);
    storage.setBoards();
    const boards = storage.getBoards();
    boards.forEach(board => {
      const { token, id, outputDir, outputFormat } = board;
      const color = getColors(token, id);
      color
        .then(res => saveColor(outputDir, res))
        .catch(e =>
          console.log("Can't get color assets, please check help", e)
        );
    });
  }
}

if (flags.remove) {
  console.log("remove...", flags.remove);
  storage.setBoards();
  storage.removeBoard(flags.remove);
}

if (flags.init) {
  console.log("init", flags.init);
  storage.setBoards();
  if (input.length < 1) {
    InitQustionaire().then(res => {
      const { boardName, id, outputDir, outputFormat, token } = res;
      const newBoard = new Board(boardName);
      storage.appendBoards(newBoard, boardName);
      storage.setBoardId(id, boardName);
      storage.setBoardOutputDir(outputDir, boardName);
      storage.setBoardOutputFormat(outputFormat, boardName);
      storage.setBoardToken(token, boardName);
      if (storage.isBoardExisted(boardName)) {
        console.log("board is added");
      }
    });
  } else {
    const [bn, id, oDir, oFormat] = input;
    const newBoard = new Board(bn);
    storage.appendBoards(newBoard, bn);
    storage.setBoardId(id, bn);
    storage.setBoardOutputDir(oDir, bn);
    storage.setBoardOutputFormat(oFormat, bn);
  }
}
async function InitQustionaire(): Promise<Board> {
  const qustions = [
    {
      type: "input",
      name: "boardName",
      message: "Board name ?"
    },
    {
      type: "input",
      name: "id",
      message: "Board id ?"
    },
    {
      type: "input",
      name: "token",
      message: "Board token ?"
    },
    {
      type: "input",
      name: "outputDir",
      message: "Output Directory ?"
    },
    {
      type: "input",
      name: "outputFormat",
      message: "Output Format ?"
    }
  ];
  const response = await prompt(qustions);
  return response;
}

//API CALL EXAMPLE
// const color = getColors(TOKEN, "gFmmbJ0648oZLD2Y0arRLuy2");
// color
//   .then(res => saveColor("./", res))
//   .catch(e => console.log("Can't get color assets, please check help"));

// const space = getSpaces(TOKEN, "gFmmbJ0648oZLD2Y0arRLuy2");
// space
//   .then(res => saveSpaces("./", res))
//   .catch(e => console.log("Can't get space assets, please check help"));

// const typo = getTypographics(TOKEN, "gFmmbJ0648oZLD2Y0arRLuy2");
// typo
//   .then(res => saveTypos("./", res))
//   .catch(e => console.log("Can't get typography assets, please check help"));

// // Promise.all([color, space, typo]).then(res => console.log("res", res));
