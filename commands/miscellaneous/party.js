const Discord = require("discord.js");
const ly = require("solenolyrics");
module.exports = { 
    config: {
        name: "party",
        description: "Watch and see what it does!",
        usage: "<song>",
        category: "miscellaneous",
        accessableby: "Members",
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

        
        var txt = args.join(" ");
        if (!txt) return message.channel.send(":x: Please provide a search term.");
        const embed = new Discord.RichEmbed();
        message.channel
          .send(
            embed
              .setTitle(`Searching Lyrics...`)
              .setDescription(`🔎 Searched for \`${txt}\``)
              .setColor(message.guild.me.displayHexColor)
          )
          .then(m => {
            m.delete(5000);
          });
        var lyrics = await ly.requestLyricsFor(`${txt}`);
        var icon = await ly.requestIconFor(`${txt}`);
        var title = await ly.requestTitleFor(`${txt}`);
        var author = await ly.requestAuthorFor(`${txt}`);
      
        if (lyrics.error)
          return message.channel.send(
            embed
              .setDescriptioin(":x: No lyrics found for `" + txt + "`.")
              .setColor("#ed0202")
          );
      
        if (lyrics.length > 2048 && lyrics.length < 4096) {
          const em = new Discord.RichEmbed()
            .setAuthor(`${title} - ${author}`, message.guild.iconURL)
            .setColor("RANDOM")
            .setThumbnail(icon)
            .setDescription(lyrics.substring(0, 2048))
            .setURL("https://genius.com");
          message.channel.send(em);
          const em2 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(lyrics.substring(2048, 4096))
            .setURL("https://genius.com/")
            .setFooter(
              "Requested by: " + message.author.tag,
              message.author.displayAvatarURL
            );
          return message.channel.send(em2);
        } else if (lyrics.length < 2048) {
          const em = new Discord.RichEmbed()
            .setAuthor(`${title} - ${author}`, message.guild.iconURL)
            .setColor("RANDOM")
            .setThumbnail(icon)
            .setDescription(lyrics)
            .setFooter(
              "Requested by: " + message.author.tag,
              message.author.displayAvatarURL
            );
          return message.channel.send(em);
        }
      }};