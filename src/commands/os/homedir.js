import os from "os";

export function getHomedir() {
  console.log("Home directory:", JSON.stringify(os.homedir()));
}
