import fs from "node:fs/promises";
import { getCurrentPath } from "../../utils/getCurrentPath.js";

function nameWithPadEnd(name, padEndNum, placeholder = " ") {
  return name.padEnd(padEndNum, placeholder);
}

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
        name: entry.name,
        type: entry.isDirectory() ? "directory" : "file",
      });
    }

    results.sort((a, b) => {
      if (a.type === b.type) {
        return a.name.localeCompare(b.name);
      }
      return a.type === "directory" ? -1 : 1;
    });

    console.log(`\nIndex | ${nameWithPadEnd("Name", padEndNum)} | Type`);
    console.log(`------|-${nameWithPadEnd("-", padEndNum, "-")}-|----------`);
    results.forEach((item, index) => {
      const paddedName = nameWithPadEnd(item.name, padEndNum);
      const paddedIndex = String(index).padEnd(5);
      console.log(`${paddedIndex} | ${paddedName} | ${item.type}`);
    });
  } catch (error) {
    throw new Error(`Failed to list directory contents: ${error.message}`);
  }
}
