import fs from "node:fs/promises";
import { getCurrentPath } from "../../utils/getCurrentPath.js";

export async function commandLs(args) {
  if (args.length !== 0) {
    throw new Error("ls command does not accept any arguments");
  }

  try {
    const entries = await fs.readdir(getCurrentPath(), { withFileTypes: true });
    const results = [];
    let padEndNum = 20;

    for (const entry of entries) {
      if (padEndNum < entry.name.length) {
        padEndNum = entry.name.length;
      }

      results.push({
        Name: entry.name,
        Type: entry.isDirectory() ? "directory" : "file",
      });
    }

    results.sort((a, b) => {
      if (a.Type === b.Type) {
        return a.Name.localeCompare(b.Name);
      }
      return a.Type === "directory" ? -1 : 1;
    });

    console.table(results);
  } catch (error) {
    throw new Error(`Failed to list directory contents: ${error.message}`);
  }
}
