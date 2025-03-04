import { IndexifyOptions } from "../models";

export const applyOptionsToPath = (
  filePath: string,
  extenstionsWhiteList: string[] | null,
  { addExtension, ignoreIndexes }: IndexifyOptions,
): { formatedPath: string; applyToList: boolean } => {
  const dotIndex = filePath.lastIndexOf(".");
  const hasExtension = dotIndex > 0;
  const extension = hasExtension ? filePath.slice(dotIndex + 1) : null;

  if (extension === null) {
    return { formatedPath: "", applyToList: false };
  }

  const ignoreIndexesRule =
    !ignoreIndexes || !filePath.endsWith(`index.${extension}`);

  const finalPath = addExtension ? filePath : filePath.slice(0, dotIndex);

  if (extenstionsWhiteList === null) {
    return { formatedPath: finalPath, applyToList: ignoreIndexesRule };
  }

  return {
    formatedPath: finalPath,
    applyToList: ignoreIndexesRule && extenstionsWhiteList.includes(extension),
  };
};
