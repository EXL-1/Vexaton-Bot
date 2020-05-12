

const { ownerid, prefix } = require("../../botconfig.json");
const { inspect } = require("util")
const Discord = require("discord.js");
module.exports = { 
    config: {
        name: "guilds",
        description: "Shows all the guilds!",
        usage: "$guilds",
        category: "owner",
        accessableby: "Owner"
    },
run: (bot, message, args) => {
    if (message.author.id !== ownerid) return message.reply("No permission to use this command");
    const guildArray = bot.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })

    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)

}};
