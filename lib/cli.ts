#!/usr/bin/env node
import { prompt } from "enquirer";
import * as meow from "meow";
import Controller from "./controller";
import { saveColor, saveSpaces, saveTypos } from "./helper";
import { hints } from "./hint";
import { getColors, getSpaces, getTypographics } from "./service";

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
const controller = new Controller();

if (flags.list) {
  console.log("Listing...");
  const boards = controller.getBoards();
  if (boards.length < 1) {
    console.log("No boards is stored with Figgo");
  } else {
    boards.map((board, i) =>
      console.log(`
    Board ${i + 1} Name: ${board.boardName} \n
    Token Directory: ${board.outputDir}\n
    Token Format: ${board.outputFormat}\n`)
    );
  }
}

if (flags.sync) {
  console.log("Sync...");
  if (input.length < 1) {
    const boards = controller.getBoards();
    boards.forEach(board => {
      const { token, id, outputDir, outputFormat } = board;
      const colors = getColors(token, id, outputFormat);
      const spaces = getSpaces(token, id, outputFormat);
      const typos = getTypographics(token, id, outputFormat);
      colors
        .then(res => saveColor(outputDir, res, outputFormat))
        .catch(e => console.log(e));
      spaces
        .then(res => saveSpaces(outputDir, res, outputFormat))
        .catch(e => console.log(e));
      typos
        .then(res => saveTypos(outputDir, res, outputFormat))
        .catch(e => console.log(e));
    });
  } else {
    const boards = input.map(bn => controller.getBoard(bn));
    boards.forEach(board => {
      const { token, id, outputDir, outputFormat } = board;
      const colors = getColors(token, id, outputFormat);
      const spaces = getSpaces(token, id, outputFormat);
      const typos = getTypographics(token, id, outputFormat);
      colors
        .then(res => saveColor(outputDir, res, outputFormat))
        .catch(e => console.log(e));
      spaces
        .then(res => saveSpaces(outputDir, res, outputFormat))
        .catch(e => console.log(e));
      typos
        .then(res => saveTypos(outputDir, res, outputFormat))
        .catch(e => console.log(e));
    });
  }
}

if (flags.remove) {
  console.log(`Removing...`);
  controller.removeBoard(flags.remove);
}

if (flags.init) {
  console.log("init...");
  if (input.length < 1) {
    InitQustionaire()
      .then(res => {
        const { boardName, id, outputDir, outputFormat, token } = res;
        controller.saveNewBoard(boardName, id, outputDir, outputFormat, token);
      })
      .catch(error => {
        console.log("An error occured, please try again");
      });
  } else {
    const [boardName, id, outputDir, outputFormat, token] = input;
    controller.saveNewBoard(boardName, id, outputDir, outputFormat, token);
  }
}

async function InitQustionaire(): Promise<any> {
  const qustions = [
    {
      message: "Please name your Figma file.",
      name: "boardName",
      type: "input"
    },
    {
      message: "Please provide your Figma file ID.",
      name: "id",
      type: "input"
    },
    {
      message: "Please provide your Figma personal access token.",
      name: "token",
      type: "input"
    },
    {
      message: "Please provide your token directory.",
      name: "outputDir",
      type: "input"
    },
    {
      choices: ["scss", "js"],
      message: "Please choose your token format.",
      name: "outputFormat",
      type: "select"
    }
  ];
  const response = await prompt(qustions);
  return response;
}
