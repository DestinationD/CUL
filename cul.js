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
      client.on(eventName, (...args) => eventHandler(client, ...args));
    });
});

// Include command folder.

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const props = require(`./commands/${file}`); 
      const commandName = file.split(".")[0];
      console.log(`Loading command: ${commandName}`); 
      client.commands.set(commandName, props);
    });
  });

client.login(config.token);

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));