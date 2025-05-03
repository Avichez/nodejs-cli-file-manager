import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

rl.prompt();

rl.on("line", (line) => {
  const trimmedLine = line.trim();

  switch (trimmedLine) {
    case "hello":
      console.log("Hello, World!");
      break;
    case ".exit":
      rl.close();
      break;
    default:
      console.log(`Unknown command: ${trimmedLine}`);
  }
}).on("close", () => {
  console.log("Exiting the program. Goodbye!");
  process.exit(0);
});
