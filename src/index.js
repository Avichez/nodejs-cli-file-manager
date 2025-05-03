import readline from "node:readline";
import { state } from "./state.js";
import { parseArgs } from "./utils/parseArgs.js";
import { displayGoodbyeMessage, displayPrompt, displayWelcomeMessage } from "./ui.js";

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
