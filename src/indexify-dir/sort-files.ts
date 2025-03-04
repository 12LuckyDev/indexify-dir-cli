export const sortFiles = (
  paths: string[],
  addBreaks: boolean,
): (string | null)[] => {
  const pathsMap = new Map<string, string[][]>();

  paths.forEach((path) => {
    const splitedPath = path.split("/");
    // if length === 2 then path don't have any subfolders
    // else path has first folder at index 1 (index 0 is always empty string)
    const firstDir = splitedPath.length > 2 ? (splitedPath[1] ?? "") : "";
    const current = pathsMap.get(firstDir);
    if (current) {
      current.push(splitedPath);
    } else {
      pathsMap.set(firstDir, [splitedPath]);
    }
  });

  const sortedPaths: (string | null)[] = [];

  const mainDirs = [...pathsMap.keys()].sort();
  if (mainDirs[0] === "") {
    mainDirs.shift();
    mainDirs.push("");
  }

  mainDirs.forEach((dir) => {
    const dirSubs = pathsMap.get(dir);
    if (!dirSubs) {
      return;
    }

    sortedPaths.push(
      ...dirSubs
        .toSorted((a, b) => b.length - a.length)
        .map((splited) => splited.join("/")),
    );
    if (addBreaks) {
      sortedPaths.push(null);
    }
  });

  return sortedPaths;
};
