import { Events, Interaction, MessageFlags } from "discord.js";
import { DiscordUserEvent } from "./index.d";
import logger from "../logger";
import commandsCollection from "../commands";

const log = logger({ file: "events/interaction-create.ts" });

const execute = async (interaction: Interaction) => {
  log.info((interaction as any).commandName);

  if (!interaction.isChatInputCommand()) return;

  const command = commandsCollection.get(interaction.commandName);

  if (!command) {
    log.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    log.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        flags: MessageFlags.Ephemeral,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        flags: MessageFlags.Ephemeral,
      });
    }
  }
};

export default {
  name: Events.InteractionCreate,
  once: false,
  execute,
} as DiscordUserEvent;
