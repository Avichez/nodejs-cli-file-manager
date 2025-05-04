import { mkdir } from "node:fs/promises";

export async function commandMkdir(args) {
  if (args.length !== 1) {
    throw new Error("mkdir requires exactly one argument (directory_name)");
  }

  const dirName = args[0];
  try {
    await mkdir(dirName, { recursive: true });
  } catch (error) {
    throw new Error(`Failed to create directory: ${error.message}`);
  }
}
