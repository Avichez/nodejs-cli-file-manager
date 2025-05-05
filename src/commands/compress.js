import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliCompress } from "node:zlib";
import { pipeline } from "node:stream/promises";

export async function commandCompress(args) {
  if (args.length !== 2) {
    throw new Error("compress requires exactly two arguments (path_to_file path_to_gzip)");
  }

  const [pathFile, pathGzip] = args;
  const brotliCompress = createBrotliCompress();

  try {
    const readStream = createReadStream(pathFile);
    const writeStream = createWriteStream(pathGzip);

    await pipeline(readStream, brotliCompress, writeStream);
  } catch (error) {
    throw new Error(`Error compressing file: ${error.message}`);
  }
}
