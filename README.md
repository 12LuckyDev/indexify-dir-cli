# indexify-dir-cli

Easy make index file with exports

Arguments:
fileExtension Extension of index file
path (Optional) Path to index file root directory (default: null)

Options:
-v --version Output the version number
-n --no-add-extension If set exports will be written without extension
-f --flat Only include files direcly from target directory (default: false)
-a --all-extensions Include all files, no matter what extension they have (default: false)
-d --double-quotation If set to true paths fill be written with double quotation. By default cli will use single quotation (default: false)
-e --extensions <string...> File extensions that will be included in exports. By default files with the same extension as fileExtension argument will be  
 included
-s --sort Sort exports based on their subpaths (default: false)
-b --breaks Add line breaks between lines to separate exports from subpaths. Only if --sort is set to true (default: false)
-i --ignore-indexes Skip index.{extension} files (default: false)
-V --verbose Make cli more talkative :) (default: false)
-h, --help display help for command
