module.exports = {
    config: {
        name: "whitelist",
        description: "Whitelists a user",
        usage: "<Robloxusername> <rank>",
        category: "roblox",
        accessableby: "Staff",
        aliases: ["r",]
    },
    run: async (bot, message, args) => {
message.channel.send("fetching resources...")
    }};