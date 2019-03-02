module.exports = (client, message, args) => {
    // Ignore message w/o prefix, bots, and non-owner
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    let messageF = args.slice(0).join(" ");
    message.delete();
    message.channel.send(messageF);
};