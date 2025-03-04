import fs from "fs";
import path from "path";

export function* readFiles(dir: string, flat: boolean): Generator<string> {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory() && !flat) {
      yield* readFiles(path.join(dir, file.name), false);
    } else {
      yield path.join(dir, file.name);
    }
  }
}
