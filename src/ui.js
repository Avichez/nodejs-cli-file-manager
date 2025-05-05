import { state } from "./state.js";
import { getCurrentPath } from "./utils/getCurrentPath.js";

const displayWelcomeMessage = () => {
  console.log(`Welcome to the File Manager, ${state.username}!`);
};

const displayGoodbyeMessage = () => {
  console.log(`\nThank you for using File Manager, ${state.username}, goodbye!`);
};

const displayPrompt = () => {
  console.log(`\nYou are currently in ${getCurrentPath()}`);
  process.stdout.write("> ");
};

export { displayWelcomeMessage, displayGoodbyeMessage, displayPrompt };
