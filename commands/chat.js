module.exports = (client, message, args) => {
    let messageF = args.slice(0).join(" ");
    message.delete();
    message.channel.send(messageF);
};

