import readline from "node:readline";
import { state } from "./state.js";
import { parseArgs } from "./utils/parseArgs.js";
import { displayGoodbyeMessage, displayPrompt, displayWelcomeMessage } from "./ui.js";
import { commandUp, commandCd, commandLs, commandCat, commandAdd } from "./commands/index.js";

const handleCommands = {
  up: commandUp,
  cd: commandCd,
  ls: commandLs,
  cat: commandCat,
  add: commandAdd,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

const processInput = async (input) => {
  const trimmedInput = input.trim();

  if (trimmedInput === ".exit") {
    rl.close();
    return;
  }

  const [command, ...args] = trimmedInput.split(" ");
  const commandHandler = handleCommands[command];

  if (commandHandler) {
    try {
      await commandHandler(args);
    } catch (error) {
      console.error(`Invalid input: ${error.message}`);
    }
  } else {
    console.error(`Command "${command}" not found.`);
  }

  displayPrompt();
};

const runFileManager = () => {
  const args = parseArgs();

  state.setUsername(args.username);

  displayWelcomeMessage();

  displayPrompt();

  rl.on("line", processInput);

  rl.on("close", () => {
    displayGoodbyeMessage();
    process.exit(0);
  });
};

runFileManager();
