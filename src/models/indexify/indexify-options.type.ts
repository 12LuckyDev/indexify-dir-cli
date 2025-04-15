export type IndexifyOptions =
  | {
      addExtension: boolean;
      allExtensions: true;
      sort: boolean;
      breaks: boolean;
      flat: boolean;
      doubleQuotation: boolean;
      ignoreIndexes: boolean;
      verbose: boolean;
      fileName: string;
    }
  | {
      addExtension: boolean;
      allExtensions: false;
      sort: boolean;
      breaks: boolean;
      flat: boolean;
      doubleQuotation: boolean;
      ignoreIndexes: boolean;
      verbose: boolean;
      extensions: string[];
      fileName: string;
    };
