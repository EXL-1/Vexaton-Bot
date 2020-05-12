const Discord = require('discord.js');

module.exports = { 
    config: {
        name: "giftgamble",
        description: "Gives a user a gamble ticket!",
        usage: "<userID>",
        category: "economy",
        accessableby: "Owners"
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
    let johnMember = message.guild.members.get(`${args[0]}`);
    let mcRole = message.guild.roles.find('name', "Gambling");
    if(!mcRole) return;
    if(!johnMember) return;
    if(johnMember.roles.has(mcRole.id)) return;
    johnMember.addRole(mcRole.id);
    
    message.channel.send({embed: {
        color: 8117429,
        description: `Successfully gifted a gambling ticket to the User ID of **<@${mcRole.id}>**!.`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL
            
        }}});
        let sChannel = message.guild.channels.find(c => c.name === "buyer-logs")
        
        sChannel.send({embed: {
            color: 8117429,
            description: `Gifted a Gambling ticket to the User ID of **<@${mcRole.id}>**`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL
            }}});
    }};