import { Client } from "discord.js";
import Logger from "../logger";
import clientReady from "./client-ready";
import interactionCreate from "./interaction-create";

const log = Logger({ file: "events/index.ts" });

const InitialiseEvents = (client: Client) => {
  const events = [clientReady, interactionCreate];

  for (const event of events) {
    log.info({
      msg: "Registering Discord event",
      event: event,
    });
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
};

export default InitialiseEvents;
