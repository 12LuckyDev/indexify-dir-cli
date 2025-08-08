import { applyOptionsToPath } from './apply-options-to-path';
import { IndexifyOptions } from '../models';
import { readFiles } from './read-files';
import { sortFiles } from './sort-files';

export const collectFiles = (finalPath: string, extenstionsWhiteList: string[] | null, options: IndexifyOptions) => {
  const { sort, flat, breaks } = options;
  const files: string[] = [];

  [...readFiles(finalPath, flat)].forEach((file) => {
    const relativePath = file.replace(finalPath, '').replaceAll('\\', '/');
    const { formatedPath, applyToList } = applyOptionsToPath(relativePath, extenstionsWhiteList, options);

    if (applyToList) {
      files.push(formatedPath);
    }
  });

  return sort ? sortFiles(files, breaks) : files;
};
