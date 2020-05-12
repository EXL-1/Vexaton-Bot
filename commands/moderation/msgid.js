const Discord = require('discord.js');
module.exports = {
    config: {
        name: "msgall",
        description: "Sends a DM to all users",
        usage: "<msg>",
        category: "moderation",
        accessableby: "Staff",
        aliases: ["p"]
    },
    run: async (bot, message, args) => {
        if(!message.member.roles.some(r=>["Ranking Permissions"].includes(r.name)) )
            return message.channel.send({embed: {
                color: 15406156,
                description: "You need the `Ranking Permissions` role to run this command.",
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }});
        let arguments = args.slice(1).join(' ');
        message.guild.members.forEach(u => u.send(arguments).catch(err => {}));
        message.channel.send(`Messages sent.`);

    }};