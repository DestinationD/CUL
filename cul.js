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

client.login(config.token);