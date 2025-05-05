import fs from "node:fs/promises";

export async function commandRn(args) {
  if (args.length !== 2) {
    throw new Error("rn requires exactly two arguments (old_file_name new_file_name)");
  }

  const [oldFileName, newFileName] = args;

  try {
    await fs.rename(oldFileName, newFileName);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(`File does not exist: "${oldFileName}"`);
    }

    throw new Error(`Error renaming file: ${error.message}`);
  }
}
