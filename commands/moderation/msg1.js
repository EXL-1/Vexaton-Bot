const Discord = require('discord.js');
module.exports = {
    config: {
        name: "msgid1",
        description: "Sends a DM to users via id",
        usage: "<1st user> <msg>",
        category: "moderation",
        accessableby: "Staff",
        aliases: ["p"]
    },
    run: async (bot, message, args) => {
        process.setMaxListeners(0);
        const firstuser = args[0]
        const msgcontent = args[1]
        const user = bot.users.cache.get(`<@${firstuser}>`);
        user.send(`${msgcontent}`);
    }};