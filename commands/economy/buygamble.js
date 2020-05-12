const Discord = require('discord.js');

module.exports = { 
    config: {
        name: "buygambletickets",
        description: "Where to buy gamble ticket!",
        category: "economy",
        accessableby: "Members",
        aliases: ["buy", "purchase"]
    },
    run: async (bot, message, args) => {
        message.channel.send({embed: {
        color: 8117429,
        title: `Buy Gambling Tickets`,
        description: `Gambling Tickets cost $1 to purchase and you can buy them from https://www.paypal.me/pixeldude41\n\n**What rewards do they offer?**\nGambling Tickets include the possibility to win: Whitelist | Rainbow Role | Image Permissions | Your own custom role | Your own custom channel | Roll again | Premium Casino (Gives you access to the Premium casino for better rewards!) | Your Own Emoji Choice | You Didn't win anything.`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL
            
        }}});
        
    }};