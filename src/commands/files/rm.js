import fs from "node:fs/promises";
import path from "node:path";

export async function commandRm(args) {
  if (args.length !== 1) {
    throw new Error("rm requires exactly one argument (path_to_file)");
  }

  const [filePath] = args;
  const absolutePath = path.resolve(filePath);

  try {
    await fs.unlink(absolutePath);
  } catch (error) {
    throw new Error(`Error removing file: ${error.message}`);
  }
}
