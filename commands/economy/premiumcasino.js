const Discord = require('discord.js');

module.exports = { 
    config: {
        name: "buypremiumcasino",
        description: "An exclusive area!",
        category: "economy",
        accessableby: "Members",
   
    },
    run: async (bot, message, args) => {
        message.channel.send({embed: {
        color: 8117429,
        title: `Premium Casino Rewards`,
        description: `Premium Casino costs $5 to purchase and you can buy them from https://www.paypal.me/pixeldude41\n\n**What rewards do they offer?**\nPremium Casino includes the Gurantee to win: Whitelist | Rainbow Role | Image Permissions | Your own custom role | Your own custom channel | Roll again | Premium Whitelist | Your Own Emoji Choice`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL
            
        }}});
        
    }};