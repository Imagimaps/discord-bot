import { Client, GatewayIntentBits } from "discord.js";
import Logger from "./logger";
import Config from "./config";
import { deployCommands } from "./deploy-commands";
import InitialiseEvents from "./events";

const log = Logger({ file: "index.ts" });

log.info("Imagimaps Discord Bot is starting...");

const discordClientIntents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
];

log.info({
  msg: `Initialising Discord Client`,
  intents: discordClientIntents,
});
const client = new Client({
  intents: discordClientIntents,
});
client.login(Config().discord.token);
log.info("Discord Client initialised");

InitialiseEvents(client);

log.info("Registering Commands");
deployCommands({ clientId: Config().discord.clientId });
