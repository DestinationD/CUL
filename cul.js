const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
client.commands = new Enmap(); // Is this still necessary?

// Event Handler with filesystem.
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const eventHandler = require(`./events/${file}`);
      const eventName = file.split(".")[0];
      client.on(eventName, arg => eventHandler(client, arg));
    });
});

// Include command folder.

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(". js")) return;
      let props = require(`./commands/${file}`); // const and let has no effect.
      let commandName = file.split(".")[0];
      console.log(`Attempting to load command ${commandName}`); // this is not being logged.
      client.commands.set(commandName, props);
    });
  });

client.login(config.token);