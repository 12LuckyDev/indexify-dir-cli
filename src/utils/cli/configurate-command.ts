import { Command } from "commander";
import { getConfig } from "./get-config";
import figlet from "figlet";
import pc from "picocolors";

export const configurateCommand = (command: Command): void => {
  const config = getConfig();
  if (!config) {
    return;
  }

  const { name, version, description } = config;

  if (name) {
    command.name(name);
  }
  if (version) {
    command.version(version, "-v --version", "Output the version number");
  }
  if (description) {
    const descriptionText = name
      ? `${pc.cyan(figlet.textSync(name, { horizontalLayout: "full" }))}\n\n${pc.gray(description)}`
      : description;

    command.description(descriptionText);
  }
};
