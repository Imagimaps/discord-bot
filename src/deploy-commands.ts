import pino from "pino";
import { REST, Routes } from "discord.js";

import { commands } from "./commands";
import Config from "./config";
import Logger from "./logger";

const log = Logger({ file: "deploy-commands.ts" });

const commandsData = Object.values(commands).map((command) => command.data);
const discordToken = Config().discord.token;
if (!discordToken) {
  throw new Error("DISCORD_TOKEN is not defined");
}
const rest = new REST().setToken(discordToken);

type DeployCommandsProps = {
  clientId: string;
};

export async function deployCommands({ clientId }: DeployCommandsProps) {
  try {
    log.info("Started refreshing application (/) commands.");
    log.info({
      msg: "Commands data:",
      commands: commandsData.map((command) => {
        return { name: command.name, description: command.description };
      }),
    });

    await rest.put(Routes.applicationCommands(clientId), {
      body: commandsData,
    });

    log.info("Successfully reloaded application (/) commands.");
  } catch (error) {
    log.error(error);
  }
}
