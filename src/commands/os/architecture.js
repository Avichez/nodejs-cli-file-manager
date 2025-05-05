import os from "node:os";

export function getArchitecture() {
  console.log("CPU architecture:", os.arch());
}
