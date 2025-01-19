import { Client, Events } from "discord.js";
import { DiscordUserEvent } from "./index.d";
import Logger from "../logger";

const log = Logger({ file: "events/client-ready.ts" });

const execute = async (client: Client) => {
  log.info({
    msg: `Ready! Logged in as [${client.user?.tag ?? "Unknown"}]`,
    user: client.user,
  });
};

export default {
  name: Events.ClientReady,
  once: true,
  execute,
} as DiscordUserEvent;
