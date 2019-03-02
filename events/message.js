const config = require('../config.json');
module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    
    // let cmd;
    // let client = message.client;

    // let command = message.content.split(' ')[0].slice(config.prefix.length);
    // let args = message.content.split(' ').slice(1);  
     
    // // Checks if the bot was mentioned, with no message after it, returns the prefix.
    // const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    // if (message.content.match(prefixMention)) {
    //   return message.reply(`My prefix on this server is \`${config.prefix}\``);
    // }
    // // Ignore bots, non-prefixed messages.

  
    // if (client.command.has(command)){
    //     cmd = client.command.get(command);
    // };

    // if (!cmd) return;
    // if (cmd){
    //     cmd.run(client, message, args);
    // };
    // message.flags = [];
    // while (args[0] && args[0][0] === "-") {
    //   message.flags.push(args.shift().slice(1));
    // }
    // If the command exists, **AND** the user has permission, run it.
    // client.logger.cmd(`[CMD] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);

    if (message.content === 'ping') {
        message.reply('Pong!');
      }

    // Grab the settings for this server from Enmap. If there is no guild, get default conf (DMs)
    // const settings = message.settings = client.getSettings(message.guild.id);

    // Check whether the command, or alias, exist in the collections defined in app.js.
    // const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    // using this const varName = thing OR otherthing; is a pretty efficient and clean way to grab one of 2 values!
  };

  