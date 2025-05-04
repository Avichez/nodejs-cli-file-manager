import fs from "node:fs/promises";

export async function commandAdd(fileName) {
  if (fileName.length !== 1) {
    throw new Error("add requires exactly one argument (file_name)");
  }

  try {
    await fs.appendFile(fileName[0], "", { encoding: "utf-8" });
  } catch (error) {
    throw new Error(`Failed to create file: "${fileName[0]}"`);
  }
}
