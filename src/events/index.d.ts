export type DiscordUserEvent = {
  name: string;
  once: boolean;
  execute: (...args: any[]) => void;
};
