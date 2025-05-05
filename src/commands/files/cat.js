import fs from "node:fs";

export async function commandCat(args) {
  if (args.length !== 1) {
    throw new Error("cat requires exactly one argument (path_to_file)");
  }

  const filePath = args[0];

  try {
    const data = fs.createReadStream(filePath, "utf-8");

    return new Promise((resolve, reject) => {
      data.pipe(process.stdout);

      data.on("end", () => resolve());
      data.on("error", (err) => reject(err));
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(`File does not exist: "${filePath}"`);
    }
    throw error;
  }
}
