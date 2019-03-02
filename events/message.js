// The MESSAGE event runs anytime a message is received
// Note that due to the binding of client to every event, every event
// goes `client, other, args` when this function is run.
module.exports = async (client, message) => {
    if (message.author.bot) return;
  
    // Grab the settings for this server from Enmap. If there is no guild, get default conf (DMs)
    // const settings = message.settings = client.getSettings(message.guild.id);
  
    // Checks if the bot was mentioned, with no message after it, returns the prefix.
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
      return message.reply(`My prefix on this server is \`${settings.prefix}\``);
    }

    if (message.content.indexOf(settings.prefix) !== 0) return;
  
    // argument splitter
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Check whether the command, or alias, exist in the collections defined in app.js.
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    // using this const varName = thing OR otherthign; is a pretty efficient and clean way to grab one of 2 values!
    if (!cmd) return;
  
    message.flags = [];
    while (args[0] && args[0][0] === "-") {
      message.flags.push(args.shift().slice(1));
    }
    // If the command exists, **AND** the user has permission, run it.
    client.logger.cmd(`[CMD] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
    cmd.run(client, message, args, level);
  };