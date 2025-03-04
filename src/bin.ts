#!/usr/bin/env node

import { Command, Option } from "commander";
import { configurateCommand } from "./utils";
import { indexifyAction } from "./indexify-dir/indexify-action";

const program: Command = new Command();
configurateCommand(program);

program
  .argument("<fileExtension>", "Extension of index file")
  .argument("[path]", "(Optional) Path to index file root directory", null)
  .option(
    "-n --no-add-extension",
    "If set exports will be written without extension",
  )
  .addOption(
    new Option("-f --flat", "Only include files direcly from target directory")
      .default(false)
      .conflicts(["sort", "breaks"]),
  )
  .addOption(
    new Option(
      "-a --all-extensions",
      "Include all files, no matter what extension they have",
    )
      .default(false)
      .conflicts("extensions"),
  )
  .option(
    "-d --double-quotation",
    "If set to true paths fill be written with double quotation. By default cli will use single quotation",
    false,
  )
  .option(
    "-e --extensions <string...>",
    "File extensions that will be included in exports. By default files with the same extension as fileExtension argument will be included",
  )
  .option("-s --sort", "Sort exports based on their subpaths", false)
  .option(
    "-b --breaks",
    "Add line breaks between lines to separate exports from subpaths. Only if --sort is set to true",
    false,
  )
  .option("-i --ignore-indexes", "Skip index.{extension} files", false)
  .option("-V --verbose", "Make cli more talkative :)", false)
  .action(indexifyAction);

program.parse(process.argv);
