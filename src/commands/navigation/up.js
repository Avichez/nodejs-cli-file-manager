import path from "node:path";
import { changeDirectory } from "../../handlers/changeDirectory.js";
import { getCurrentPath } from "../../utils/getCurrentPath.js";

export async function commandUp(args) {
  if (args.length !== 0) {
    throw new Error("up command does not accept any arguments");
  }

  const currentDir = getCurrentPath();
  const parentDir = path.resolve(currentDir, "..");

  if (parentDir !== currentDir) {
    changeDirectory(parentDir);
  }
}
