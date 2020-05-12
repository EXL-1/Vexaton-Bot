const { ownerid, prefix } = require("../../botconfig.json");
const { inspect } = require("util")
module.exports = { 
    config: {
        name: "leave",
        description: "Makes the bot leave a guild",
        category: "owner",
        accessableby: "Bot Owner",
        type: "owner",
        usage: `${prefix}eval <input>`
    },
    run: async (bot, message, args) => {
if (args.length  < 1) return message.reply("You must supply a Guild ID");
 if (message.author.id !== ownerid) return message.reply("No permission to use this command");
bot.guilds.get(args.join(" ")).leave()
.then(g => console.log(`Left the guild ${g}`)) .catch(console.error);
    }};