import { Collection } from "discord.js";
import imagimaps_admin from "./imagimaps_admin";

export type Command = {
  data: any;
  execute: (interaction: any) => Promise<void>;
};

const commands = {
  imagimaps_admin,
};

const commandsCollection = new Collection<string, Command>();
for (const commandName of Object.keys(commands)) {
  commandsCollection.set(
    commandName,
    commands[commandName as keyof typeof commands]
  );
}

export default commandsCollection;
export { commands };
