import fs from "fs";

export const checkPath = (path: string) => {
  try {
    fs.accessSync(path);
    return true;
  } catch (_ex) {
    return false;
  }
};
