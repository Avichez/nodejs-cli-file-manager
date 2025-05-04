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
      console.error("Invalid username. It cannot be empty.");
    }
  }
}

export const state = new AppState();
