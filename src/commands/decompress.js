import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream/promises";

export async function commandDecompress(args) {
  if (args.length !== 2) {
    throw new Error("decompress requires exactly two arguments (path_to_gzip path_to_file)");
  }

  const [pathGzip, pathFile] = args;
  const brotliDecompress = createBrotliDecompress();

  try {
    const readStream = createReadStream(pathGzip);
    const writeStream = createWriteStream(pathFile);

    await pipeline(readStream, brotliDecompress, writeStream);
  } catch (error) {
    throw new Error(error.message);
  }
}
