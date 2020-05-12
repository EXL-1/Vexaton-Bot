const Discord = require('discord.js');
module.exports = {
    config: {
        name: "poll",
        description: "Creates a Poll!",
        usage: "!poll <input>",
        category: "moderation",
        accessableby: "Staff",
        aliases: ["p"]
    },
    run: async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permission: ADMINISTRATOR');

    if (!args[0]) return message.channel.send('Proper Usage: <prefix>poll question');

    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter('React to vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll created by ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react('✅'); 
    await msg.react('❌');

    message.delete({timeout: 1000}); 

} }