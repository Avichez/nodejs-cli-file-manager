import fs from "node:fs";
import path from "node:path";
import stream from "node:stream/promises";

export async function commandCp(args) {
  if (args.length !== 2) {
    throw new Error("cp requires exactly two arguments (source_file destination_file)");
  }

  const [sourcePath, destinationDirectory] = args;

  const sourceFileName = sourcePath.split(path.sep).pop();
  const lastDotIndex = sourceFileName.lastIndexOf(".");
  const nameWithoutExt =
    lastDotIndex === -1 ? sourceFileName : sourceFileName.slice(0, lastDotIndex);
  const extension = lastDotIndex === -1 ? "" : sourceFileName.slice(lastDotIndex);
  const destinationPath = path.resolve(destinationDirectory, `${nameWithoutExt}-copy${extension}`);

  try {
    await fs.promises.mkdir(destinationDirectory, { recursive: true });

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);

    await stream.pipeline(readStream, writeStream);
  } catch (error) {
    throw new Error(`Error copying file: ${error.message}`);
  }
}
