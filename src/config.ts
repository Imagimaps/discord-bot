import "dotenv/config";

type AppConfig = {
  nodeEnv: string;
  logLevel: string;
  discord: {
    clientId: string;
    publicKey: string;
    token: string;
  };
};

const Config = (): AppConfig => {
  return {
    nodeEnv: process.env.NODE_ENV || "development",
    logLevel: process.env.LOG_LEVEL || "info",
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID || "",
      publicKey: process.env.DISCORD_PUBLIC_KEY || "",
      token: process.env.DISCORD_TOKEN || "",
    },
  };
};

export default Config;
