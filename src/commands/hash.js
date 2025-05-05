import crypto from "node:crypto";
import fs from "node:fs";
import stream from "node:stream/promises";

export async function commandHash(args) {
  if (args.length !== 1) {
    throw new Error("hash requires exactly one argument (path_to_file)");
  }

  const [pathName] = args;
  const readStream = fs.createReadStream(pathName);
  const hash = crypto.createHash("sha256");

  try {
    await stream.pipeline(readStream, hash);

    console.log(hash.digest("hex"));
  } catch (error) {
    throw new Error(error.message);
  }
}
