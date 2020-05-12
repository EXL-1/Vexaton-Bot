const moment = require ("moment");
module.exports = { 
    config: {
        name: "purge",
        description: "Purges a certain amount of messages!",
        usage: "<number>",
        category: "moderation",
        accessableby: "Staff"
    },
    run: async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permissions to access purge!")
    if(!args[0])return message.channel.send("You have to specify a number of messages to delete!");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Purged ${args[0]} messages!`).then(msg => msg.delete(2000));
    });

  }
}