import { IndexifyOptions } from "../models";

export const buildTextContent = (
  files: (string | null)[],
  { doubleQuotation }: IndexifyOptions,
): string => {
  const quotes = doubleQuotation ? `"` : `'`;
  let indexContent = "";

  console.log(files);
  files.forEach(
    (file: string | null) =>
      (indexContent +=
        file === null ? "\n" : `export * from ${quotes}.${file}${quotes}\n`),
  );

  return indexContent;
};
