import fs from 'fs';

export const checkPath = (path: string) => {
  try {
    fs.accessSync(path);
    return true;
  } catch (ex) {
    console.error(ex);
    return false;
  }
};
