const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
client.commands = new Enmap();

// Event Handler with filesystem.
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });


// Command Handler
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log('Attempting to load command ${commandName}');
        client.commands.set(commandName, props);
    });
});

client.on("ready", () => {
    client.user.setActivity(`on ${client.guilds.size} servers`);
    console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
  });

client.login(config.token);