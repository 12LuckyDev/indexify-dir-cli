import { IndexifyOptions } from "../models";
import { checkPath, getWorkingPath } from "../utils";
import pc from "picocolors";
import fs from "fs";
import path from "path";
import { buildTextContent } from "./build-file-content";
import { collectFiles } from "./collect-files";

export const indexifyAction = (
  fileExtension: string,
  workingPath: string | null,
  options: IndexifyOptions,
): void => {
  const finalPath = getWorkingPath(workingPath);
  const fileName = `${options.fileName}.${fileExtension}`;

  if (!checkPath(finalPath)) {
    console.error(pc.red("Directory no exist!"));
    process.exit(1);
  }

  const { allExtensions, verbose } = options;

  const extenstionsWhiteList = allExtensions
    ? null
    : (options.extensions ?? [fileExtension]);

  if (verbose && extenstionsWhiteList !== null) {
    console.info(
      pc.cyan(
        `Files with ${extenstionsWhiteList.join(" ")} extensions will be included in ${fileName} file.`,
      ),
    );
  }

  const files = collectFiles(finalPath, extenstionsWhiteList, options);

  const indexFileContent = buildTextContent(files, options);

  if (verbose) {
    console.log(`\n${pc.cyan("File content:")}\n\n${indexFileContent}`);
  }

  fs.writeFileSync(path.join(finalPath, fileName), indexFileContent);

  console.log(pc.greenBright("Successfully created index file!"));
};
