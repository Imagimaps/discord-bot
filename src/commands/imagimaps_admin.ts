import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from ".";
import Logger from "../logger";

const log = Logger({ file: "commands/admin.ts" });

const slashCommand = new SlashCommandBuilder()
  .setName("imagimaps_admin")
  .setDescription("Admin commands for Imagimaps");

const execute = async (interaction: CommandInteraction) => {
  log.info({
    msg: "Executing admin command",
    interaction: interaction,
  });
  if (!interaction.isCommand()) return;

  interaction.reply("WIP");
};

export default {
  data: slashCommand,
  execute,
} as Command;
