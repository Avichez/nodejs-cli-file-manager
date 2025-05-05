import fs from "node:fs/promises";
import path from "node:path";
import { changeDirectory } from "../../handlers/changeDirectory.js";

export async function commandCd(targetPath) {
  if (targetPath.length !== 1) {
    throw new Error("cd requires exactly one argument (path_to_directory)");
  }

  const absolutePath = path.resolve(targetPath[0]);
  try {
    const stats = await fs.stat(absolutePath);
    if (!stats.isDirectory()) {
      throw new Error(`"${targetPath}" is not a directory`);
    }

    changeDirectory(absolutePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(`Path does not exist: "${targetPath}"`);
    }

    throw error;
  }
}
