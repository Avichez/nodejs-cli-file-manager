import { mkdir } from "node:fs/promises";

export async function commandMkdir(args) {
  if (args.length === 0) {
    throw new Error("mkdir requires at least one argument (directory_name)");
  }

  const dirName = args.join(" ");
  try {
    await mkdir(dirName, { recursive: true });
  } catch (error) {
    throw new Error(`Failed to create directory: ${error.message}`);
  }
}
