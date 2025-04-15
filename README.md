# indexify-dir-cli

## Create index file with exports of files from directory

Arguments:<br />
fileExtension Extension of index file<br />
path (Optional) Path to index file root directory (default: null)<br />

Options:<br />
-v --version Output the version number<br />
--fn --file-name <string> Output file name (default: "index")<br />
-n --no-add-extension If set exports will be written without extension<br />
-f --flat Only include files direcly from target directory (default: false)<br />
-a --all-extensions Include all files, no matter what extension they have (default: false)<br />
-d --double-quotation If set to true paths fill be written with double quotation. By default cli will use single quotation (default: false)<br />
-e --extensions <string...> File extensions that will be included in exports. By default files with the same extension as fileExtension argument will be included<br />
-s --sort Sort exports based on their subpaths (default: false)<br />
-b --breaks Add line breaks between lines to separate exports from subpaths. Only if --sort is set to true (default: false)<br />
-i --ignore-indexes Skip index.{extension} files (default: false)<br />
-V --verbose Make cli more talkative :) (default: false)<br />
-h, --help display help for command<br />
