import { state } from "../../state.js";
import os from "node:os";

export function getUsername() {
  const username = os.userInfo().username;
  console.log("System username:", username);
  console.log("Session username:", state.username);
}
