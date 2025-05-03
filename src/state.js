import os from "node:os";

class AppState {
  constructor() {
    this._username = os.userInfo().username;
    this._currentDirectory = os.homedir();
  }

  get username() {
    return this._username;
  }

  get currentDirectory() {
    return this._currentDirectory;
  }

  setUsername(username) {
    if (username && username.trim() !== "") {
      this._username = username.trim();
    } else {
      console.error("Invalid username. It cannot be empty.");
    }
  }

  set currentDirectory(newPath) {
    const resolvedPath = path.resolve(this._currentDirectory, newPath);

    this._currentDirectory = resolvedPath;
  }
}

export const state = new AppState();
