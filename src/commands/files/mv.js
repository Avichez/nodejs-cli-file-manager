import fs from "node:fs";
import path from "node:path";
import stream from "node:stream/promises";

export async function commandMv(args) {
  if (args.length !== 2) {
    throw new Error("mv requires exactly two arguments (path_to_file path_to_new_directory)");
  }

  const [sourcePath, destinationDirectory] = args;

  const sourceFileName = sourcePath.split(path.sep).pop();
  const destinationPath = path.resolve(destinationDirectory, sourceFileName);

  try {
    await fs.promises.mkdir(destinationDirectory, { recursive: true });

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);
    await stream.pipeline(readStream, writeStream);

    await fs.promises.unlink(sourcePath);
  } catch (error) {
    throw new Error(`Error moving file: ${error.message}`);
  }
}
