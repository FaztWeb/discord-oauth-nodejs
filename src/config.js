require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/discorddb",
  SECRET: process.env.SECRET || "some random secret",
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  DISCORD_CLIENT_REDIRECT: process.env.DISCORD_CLIENT_REDIRECT || '/auth/redirect',
};
