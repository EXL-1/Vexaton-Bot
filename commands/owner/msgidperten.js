const Discord = require("discord.js");
module.exports = { 
    config: {
        name: "mail",
        category: "owner",
        usage: "!mail <user> <message>",
        accessableby: "Staff",
    },
    run: async (bot, message, args) => {
        process.setMaxListeners(0);
        function sendError(message, description) {
            message.channel.send({embed: {
                color: '15158332',
                description: ':x: ' + description
            }});
        }
    
            let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if (!dUser) return sendError(message, `Mention a person !`)
            if(!message.member.hasPermission("KICK_MEMBERS")) return sendError(message, `You do not have permissions!`)
            let dMessage = args.join(" ").slice(22);
            if(dMessage.length < 1) return sendError(message, `You need to create a message!`)
    
            var embedB = new Discord.RichEmbed()
            .setTitle(":e_mail: **Message Sent!**")
            .setThumbnail(message.mentions.users.first().displayAvatarURL)
            .setDescription(`═════════════════`)
            .addField(`From : ${message.author.username}\nTo : ${message.mentions.users.first().username}`, `═════════════════`)
            .addField(`${dMessage}`, `═════════════════\nSent! :`)
            .setTimestamp()
    
            message.author.send(embedB)
            
            var embedA = new Discord.RichEmbed()
            .setTitle(":e_mail: **Message Received**")
            .setThumbnail(message.author.displayAvatarURL)
            .setDescription(`═════════════════`)
            .addField(`From : ${message.author.username}\nTo : ${message.mentions.users.first().username}`, `═════════════════`)
            .addField(`${dMessage}`, `═════════════════\nReceived! :`)
            .setTimestamp()
    
            dUser.send(embedA)
    
            message.delete().catch(O_o=>{});
    }}