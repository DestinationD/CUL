exports.run = (client, message, args) => {
    let messageF = args.join(" ");
    message.delete();
    message.channel.send(messageF);
};

