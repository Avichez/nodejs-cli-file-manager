import os from "node:os";

export function getEOL() {
  console.log(`Default End Of Line: ${JSON.stringify(os.EOL)}`);
}
