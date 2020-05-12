arraySort = require('array-sort'),
    table = require('table'),
    Discord = require('discord.js');
    module.exports = {
        config: {
            name: "topinvites",
            description: "Shows the leaderboard of the most invites",
            usage: "!topinvites",
            category: "moderation",
            accessableby: "Members",
            aliases: ["topinvites"]
        },
        run: async (bot, message, args) => {
            let invites = await message.guild.fetchInvites().catch(error => {
                return message.channel.send(`Sorry, I don't have the proper permissions to view invites!`);
            })
            invites = invites.array();
            arraySort(invites, 'uses', { reverse: true });
            let possibleInvites = [['User', 'Uses']];
            invites.forEach(function (invite) {
                possibleInvites.push([invite.inviter.username, invite.uses]);
            })
            const embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('Leaderboard', `${table.table(possibleInvites)}`)
                .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL)
            message.channel.send(embed)
        }}