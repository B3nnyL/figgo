import Controller from "./controller";
import { getColors } from "./service";
import { hints } from "./hint";
import { prompt } from "enquirer";
import meow from "meow";
import { saveColor } from "./helper";

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
const controller = new Controller();

if (flags.list) {
  console.log("listing...");
}

if (flags.sync) {
  if (input.length < 1) {
    console.log("sync...", flags.sync);
    controller.getStorage().setBoards();
    const boards = controller.getStorage().getBoards();
    boards.forEach(board => {
      const { token, id, outputDir, outputFormat } = board;
      const color = getColors(token, id, outputFormat);
      color
        .then(res => saveColor(outputDir, res, outputFormat))
        .catch(e =>
          console.log("Can't get color assets, please check help", e)
        );
    });
  }
}

if (flags.remove) {
  console.log("remove...", flags.remove);
  controller.getStorage().setBoards();
  controller.getStorage().removeBoard(flags.remove);
}

if (flags.init) {
  console.log("init", flags.init);
  controller.getStorage().setBoards();
  if (input.length < 1) {
    InitQustionaire().then(res => {
      const { boardName, id, outputDir, outputFormat, token } = res;
      controller.saveBoard(boardName, id, outputDir, outputFormat, token);
    });
  } else {
    const [boardName, id, outputDir, outputFormat, token] = input;
    controller.saveBoard(boardName, id, outputDir, outputFormat, token);
  }
}

async function InitQustionaire(): Promise<any> {
  const qustions = [
    {
      message: "Board name ?",
      name: "boardName",
      type: "input"
    },
    {
      message: "Board id ?",
      name: "id",
      type: "input"
    },
    {
      message: "Board token ?",
      name: "token",
      type: "input"
    },
    {
      message: "Output Directory ?",
      name: "outputDir",
      type: "input"
    },
    {
      message: "Output Format ?",
      name: "outputFormat",
      type: "input"
    }
  ];
  const response = await prompt(qustions);
  return response;
}

// API CALL EXAMPLE
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
