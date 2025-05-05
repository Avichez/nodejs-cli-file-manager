import os from "node:os";

class AppState {
  constructor() {
    this._username = os.userInfo().username;
  }

  get username() {
    return this._username;
  }

  setUsername(username) {
    if (username && username.trim() !== "") {
      this._username = username.trim();
    } else {
      console.error("Invalid username, using system name instead.");
    }
  }
}

export const state = new AppState();
