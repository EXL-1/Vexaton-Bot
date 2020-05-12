const rbx = require("noblox.js")
const { Client, Collection } = require("discord.js");
const {  prefix, ownerid } = require("./botconfig.json");
const AntiSpam = require("discord-anti-spam");
const chalk = require("chalk")

const bot = new Client();
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_E03A8F85C43AFF7E846FB0D0455FDF0267A1DBC9BFEAB58A4A914B622E9DA81F3CF7A476550DE0E9FD77A89EC888D0B67E2F2A85271D03FA761BDC62424ED2D7C28CC86EC1BD278AAD8AFE7D9EA4F688018D025E2C20E4E3FD7A52277CA151D1F0B14B5E546A0B85827DA2292857B5A5A42AED789B68F9D8C6962BF429EDBBE8334540B9B222829AC885072CFDB003906DD6C72FFB28ABF9ED31BCE00341A5752F5E573C50CC5F4C95A8060469C491E52AC632C968396DAEDBFC83574ABD2BD639269B5F10D6E36E70B37DA50C47E15D89EE3D2054B1CAA8890FDBF1BA7FC699F7E8D809398A9D4841984A5216493A194A1C87945797E916E7A68913CCF62F88A3ACF5D9AEEB9146E87E93EEDC39DA04255B0C1A40E9F178EBB8D16444A7AD8740853B07";
var groupId = 5979789;
var maximumRank = 255;
const logchannelid = "699704259561652335"
rbx.cookieLogin(cookie).catch(() => {console.log("Sorry, it failed.");});
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "whitelist") {
        if(!message.member.roles.some(r=>["Ranking Permissions"].includes(r.name)) )
            return message.channel.send({embed: {
                color: 15406156,
                description: "You need the `Ranking Permissions` role to run this command.",
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }});
            var username = args[0]
            if (username){
                rbx.getIdFromUsername(username)
                .then(function(id){
                    rbx.getRankInGroup(groupId, id)
                    .then(function(rank){
                        if(maximumRank <= rank){
                            message.channel.send({embed: {
                                color: 15406156,
                                description: "This rank cannot be promoted by this bot.",
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.displayAvatarURL
                                }
                            }});
                        } else {
                            rbx.promote(groupId, id)
                            .then(function(newRole){
                                message.channel.send({embed: {
                                    color: 8117429,
                                    description: `You have successfully promoted ${username}!`,
                                    author: {
                                        name: message.author.tag,
                                        icon_url: message.author.displayAvatarURL
                                    }
                                }});
                                if(logchannelid === 'false') return;
                                var logchannel = message.guild.channels.get(logchannelid);
                                logchannel.send({embed: {
                                    color: 11253955,
                                    description: `<@${message.author.id}> has promoted ${username}.`,
                                    author: {
                                        name: message.author.tag,
                                        icon_url: message.author.displayAvatarURL
                                    },
                                    footer: {
                                        text: 'Action Logs'
                                    },
                                    timestamp: new Date(),
                                    thumbnail: {
                                        url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${username}`
                                    }
                                }});
                            }).catch(function(err){
                                console.log(chalk.red('Issue with promote: ' + err));
                                message.channel.send({embed: {
                                    color: 15406156, 
                                    description: "Oops! Something went wrong. The issue has been logged to the bot console.",
                                    author: {
                                        name: message.author.tag,
                                        icon_url: message.author.displayAvatarURL
                                    }
                                }});
                            })
                        }
                    }).catch(function(err){
                        message.channel.send({embed: {
                            color: 15406156,
                            description: "Oops! Something went wrong. The issue has been logged to the bot console.",
                            author: {
                                name: message.author.tag,
                                icon_url: message.author.displayAvatarURL
                            }
                        }});
                    });
                }).catch(function(err){
                    message.channel.send({embed: {
                        color: 15406156,
                        description: `Oops! ${username} does not exist in the Roblox user database. Perhaps you misspelled?`,
                        author: {
                            name: message.author.tag,
                            icon_url: message.author.displayAvatarURL
                        }
                    }});
                });
            } else {
                message.channel.send({embed: {
                    color: 15406156,
                    description: "Please specify a target username.",
                    author: {
                        name: message.author.tag,
                        icon_url: message.author.displayAvatarURL
                    }
                }});
            }
            return;
    }

    if(command === "blacklist") {
        if(!message.member.roles.some(r=>["Ranking Permissions"].includes(r.name)) )
            return message.channel.send({embed: {
                color: 15406156,
                description: "You need the `Ranking Permissions` role to run this command.",
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }});
            var username = args[0]
            if (username){
                rbx.getIdFromUsername(username)
                .then(function(id){
                    rbx.getRankInGroup(groupId, id)
                    .then(function(rank){
                        if(maximumRank <= rank){
                            message.channel.send({embed: {
                                color: 15406156,
                                description: "This rank cannot be ranked by this bot.",
                                author: {
                                    name: message.author.tag,
                                    icon_url: message.author.displayAvatarURL
                                }
                            }});
                        } else {
                            rbx.demote(groupId, id)
                            .then(function(newRole){
                                message.channel.send({embed: {
                                    color: 8117429,
                                    description: `You have successfully demoted ${username}!`,
                                    author: {
                                        name: message.author.tag,
                                        icon_url: message.author.displayAvatarURL
                                    }
                                }});
                                if(logchannelid === 'false') return;
                                var logchannel = message.guild.channels.get(logchannelid);
                                logchannel.send({embed: {
                                    color: 11253955,
                                    description: `<@${message.author.id}> has demoted ${username}.`,
                                    author: {
                                        name: message.author.tag,
                                        icon_url: message.author.displayAvatarURL
                                    },
                                    footer: {
                                        text: 'Action Logs'
                                    },
                                    timestamp: new Date(),
                                    thumbnail: {
                                        url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${username}`
                                    }
                                }});
                            }).catch(function(err){
                                console.log(chalk.red('Issue with demote: ' + err));
                                message.channel.send({embed: {
                                    color: 15406156, 
                                    description: "Oops! Something went wrong. The issue has been logged to the bot console.",
                                    author: {
                                        name: message.author.tag,
                                        icon_url: message.author.displayAvatarURL
                                    }
                                }});
                            })
                        }
                    }).catch(function(err){
                        message.channel.send({embed: {
                            color: 15406156,
                            description: "Oops! Something went wrong. The issue has been logged to the bot console.",
                            author: {
                                name: message.author.tag,
                                icon_url: message.author.displayAvatarURL
                            }
                        }});
                    });
                }).catch(function(err){
                    message.channel.send({embed: {
                        color: 15406156,
                        description: `Oops! ${username} does not exist in the Roblox user database. Perhaps you misspelled?`,
                        author: {
                            name: message.author.tag,
                            icon_url: message.author.displayAvatarURL
                        }
                    }});
                });
            } else {
                message.channel.send({embed: {
                    color: 15406156,
                    description: "Please specify a target username.",
                    author: {
                        name: message.author.tag,
                        icon_url: message.author.displayAvatarURL
                    }
                }});
            }
            return;
    }
});
const sprefix = "!"
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(sprefix) !== 0) return;
    const args = message.content.slice(sprefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
// process.setMaxListeners(0); If you want to use unlimited times and bypass Discord.js TOS
if(command === "msgall1") {
if(!message.member.roles.some(r=>["Ranking Permissions"].includes(r.name)))
            return message.channel.send({embed: {
                color: 15406156,
                description: "You need the `Ranking Permissions` role to run this command.",
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }});
        let arguments = args.slice(1).join(' ');
        message.guild.members.forEach(u => u.send(arguments).catch(err => {}));
        message.channel.send(`Messages sent.`);
}});
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: ["EXL1"], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
  });
  bot.on('message', (message) => antiSpam.message(message)); 
const usersMap = new Map();
const LIMIT = 5;
const TIME = 10000;
const DIFF = 2000;

bot.on('message', message => {
  if(message.author.bot) return;
  if(usersMap.has(message.author.id)) {
    const userData = usersMap.get(message.author.id);
    const { lastMessage, timer } = userData;
    const difference = message.createdTimestamp - lastMessage.createdTimestamp;
    let msgCount = userData.msgCount;
    console.log(difference);
    if(difference > DIFF) {
      clearTimeout(timer);
      console.log('Cleared timeout');
      userData.msgCount = 1;
      userData.lastMessage = message;
      userData.timer = setTimeout(() => {
        usersMap.delete(message.author.id);
        console.log('Removed from RESET.');
      }, TIME);
      usersMap.set(message.author.id, userData);
    }
    else {
      ++msgCount;
      if(parseInt(msgCount) === LIMIT) {
        const role = message.guild.roles.cache.get('699717201904664676');
        message.member.roles.add(role);
        message.channel.send('You have been muted.');
        setTimeout(() => {
          message.member.roles.remove(role);
          message.channel.send('You have been unmuted');
        }, TIME);
      } else {
        userData.msgCount = msgCount;
        usersMap.set(message.author.id, userData);
      }
    }
  }
  else {
    let fn = setTimeout(() => {
      usersMap.delete(message.author.id);
      console.log('Removed from map.');
    }, TIME);
    usersMap.set(message.author.id, {
      msgCount: 1,
      lastMessage: message,
      timer: fn
    });
  }
});
    

    function login() {
        return roblox.cookieLogin(cookie);
    }
    bot.on('messageDelete', message => {
        console.log(`a message saying "${message.cleanContent}" was deleted from channel: ${message.channel.name} at ${new Date()}`);
        let embed2 = new Discord.RichEmbed()
        .setTitle(`The User **${message.author.username}** Deleted a message: **${message.cleanContent}**'`)
        .addField(`User:`, `\`${message.author.username}\``)
        .addField(`ID:`, `\`${message.author.id}\``)
        .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
        .addField(`Created At:`, `\`${message.author.createdAt}\``)
        .addField(`GuildID:`, `\`${message.guild.id}\``)
        .addField(`Guild Name:`, `\`${message.guild.name}\``)
        .addField(`Channel:`, `\`${message.channel.name} (${message.channel.id})\``)
        .addField(`Full content:`, `\`${message.content}\``)
        .setThumbnail(message.author.avatarURL)
        let sChannel = message.guild.channels.find(c => c.name === "logs")
            
            sChannel.send(embed2)
      });
      bot.on('messageUpdate', (oldMessage, newMessage) => {
        if(oldMessage.author.bot) return;
        if(!oldMessage.channel.type === 'dm') return;
        if(!oldMessage.guild.member(bot.user).hasPermission('EMBED_LINKS')) return;
        if(!oldMessage.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return;
        var logChannel = oldMessage.guild.channels.find(c => c.name === 'logs');
        if(!logChannel) return;
     
        if(oldMessage.content.startsWith('https://')) return;
     
        let messageUpdate = new Discord.RichEmbed()
        .setTitle('**[MESSAGE EDIT]**')
        .setThumbnail(oldMessage.author.avatarURL)
        .setColor('BLUE')
        .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
        .setTimestamp()
        .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
     
        logChannel.send(messageUpdate);
    });
    bot.on('roleCreate', role => {
     
      if(!role.guild.member(bot.user).hasPermission('EMBED_LINKS')) return;
      if(!role.guild.member(bot.user).hasPermission('VIEW_AUDIT_LOG')) return;
    
      var logChannel = role.guild.channels.find(c => c.name === 'logs');
      if(!logChannel) return;
    
      role.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
    
          let roleCreate = new Discord.RichEmbed()
          .setTitle('**[ROLE CREATE]**')
          .setThumbnail(userAvatar)
          .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setColor('GREEN')
          .setTimestamp()
          .setFooter(role.guild.name, role.guild.iconURL)
    
          logChannel.send(roleCreate);
      })
    });
    bot.on('roleDelete', role => {
    
      if(!role.guild.member(bot.user).hasPermission('EMBED_LINKS')) return;
      if(!role.guild.member(bot.user).hasPermission('VIEW_AUDIT_LOG')) return;
    
      var logChannel = role.guild.channels.find(c => c.name === 'logs');
      if(!logChannel) return;
    
      role.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
    
          let roleDelete = new Discord.RichEmbed()
          .setTitle('**[ROLE DELETE]**')
          .setThumbnail(userAvatar)
          .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setColor('RED')
          .setTimestamp()
          .setFooter(role.guild.name, role.guild.iconURL)
    
          logChannel.send(roleDelete);
      })
    });
    bot.on('roleUpdate', (oldRole, newRole) => {
    
      if(!oldRole.guild.member(bot.user).hasPermission('EMBED_LINKS')) return;
      if(!oldRole.guild.member(bot.user).hasPermission('VIEW_AUDIT_LOG')) return;
    
      var logChannel = oldRole.guild.channels.find(c => c.name === 'logs');
      var logsChannel = oldRole.guild.channels.find(c => c.name === 'new-colorlogschannel');
      if(!logChannel) return;
    
      oldRole.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
    
          if(oldRole.name !== newRole.name) {
              let roleUpdateName = new Discord.RichEmbed()
              .setTitle('**[ROLE NAME UPDATE]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
    
              logChannel.send(roleUpdateName);
          }
          
          if(oldRole.permissions !== newRole.permissions) {
              let roleUpdate = new Discord.RichEmbed()
              .setTitle('**[UPDATE ROLE PERMISSIONS]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
             
              logChannel.send(roleUpdate)
          }
      })
    });
    
    
    // Channels Log
    bot.on('channelCreate', channel => {
    
      if(!channel.guild) return;
      if(!channel.guild.member(bot.user).hasPermission('EMBED_LINKS')) return;
      if(!channel.guild.member(bot.user).hasPermission('VIEW_AUDIT_LOG')) return;
    
      var logChannel = channel.guild.channels.find(c => c.name === 'logs');
      if(!logChannel) return;
    
      if(channel.type === 'text') {
          var roomType = 'Text';
      }else
      if(channel.type === 'voice') {
          var roomType = 'Voice';
      }else
      if(channel.type === 'category') {
          var roomType = 'Category';
      }
    
      channel.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
    
          let channelCreate = new Discord.RichEmbed()
          .setTitle('**[CHANNEL CREATE]**')
          .setThumbnail(userAvatar)
          .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setColor('GREEN')
          .setTimestamp()
          .setFooter(channel.guild.name, channel.guild.iconURL)
    
          logChannel.send(channelCreate);
      })
    });
    bot.on('channelDelete', channel => {
      if(!channel.guild) return;
      if(!channel.guild.member(bot.user).hasPermission('EMBED_LINKS')) return;
      if(!channel.guild.member(bot.user).hasPermission('VIEW_AUDIT_LOG')) return;
    
      var logChannel = channel.guild.channels.find(c => c.name === 'logs');
      if(!logChannel) return;
    
      if(channel.type === 'text') {
          var roomType = 'Text';
      }else
      if(channel.type === 'voice') {
          var roomType = 'Voice';
      }else
      if(channel.type === 'category') {
          var roomType = 'Category';
      }
    
      channel.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
    
          let channelDelete = new Discord.RichEmbed()
          .setTitle('**[CHANNEL DELETE]**')
          .setThumbnail(userAvatar)
          .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setColor('RED')
          .setTimestamp()
          .setFooter(channel.guild.name, channel.guild.iconURL)
    
          logChannel.send(channelDelete);
      })
    });
    bot.on('channelUpdate', (oldChannel, newChannel) => {
      if(!oldChannel.guild) return;
    
      var logChannel = oldChannel.guild.channels.find(c => c.name === 'logs');
      if(!logChannel) return;
    
      if(oldChannel.type === 'text') {
          var channelType = 'Text';
      }else
      if(oldChannel.type === 'voice') {
          var channelType = 'Voice';
      }else
      if(oldChannel.type === 'category') {
          var channelType = 'Category';
      }
    
      oldChannel.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
    
          if(oldChannel.name !== newChannel.name) {
              let newName = new Discord.RichEmbed()
              .setTitle('**[CHANNEL EDIT]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
    
              logChannel.send(newName);
          }
          if(oldChannel.topic !== newChannel.topic) {
              let newTopic = new Discord.RichEmbed()
              .setTitle('**[CHANNEL EDIT]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
    
              logChannel.send(newTopic);
          }
      })
    });
    
    
    // Guild Logs
    bot.on('guildBanAdd', (guild, user) => {
    
      if(!guild.member(bot.user).hasPermission('EMBED_LINKS')) return;
      if(!guild.member(bot.user).hasPermission('VIEW_AUDIT_LOG')) return;
    
      var logChannel = guild.channels.find(c => c.name === 'logs');
      if(!logChannel) return;
    
      guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
    
          if(userID === bot.user.id) return;
    
          let banInfo = new Discord.RichEmbed()
          .setTitle('**[BANNED]**')
          .setThumbnail(userAvatar)
          .setColor('DARK_RED')
          .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setTimestamp()
          .setFooter(guild.name, guild.iconURL)
    
          logChannel.send(banInfo);
      })
    });
    bot.on('guildBanRemove', (guild, user) => {
      if(!guild.member(bot.user).hasPermission('EMBED_LINKS')) return;
      if(!guild.member(bot.user).hasPermission('VIEW_AUDIT_LOG')) return;
    
      var logChannel = guild.channels.find(c => c.name === 'logs');
      if(!logChannel) return;
    
      guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
    
          let unBanInfo = new Discord.RichEmbed()
          .setTitle('**[UNBANNED]**')
          .setThumbnail(userAvatar)
          .setColor('GREEN')
          .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setTimestamp()
          .setFooter(guild.name, guild.iconURL)
    
          logChannel.send(unBanInfo);
      })
    });
    
    bot.on('guildMemberUpdate', (oldMember, newMember) => {
      var logChannel = oldMember.guild.channels.find(c => c.name === 'logs');
      if(!logChannel) return;
    
      oldMember.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
          var userTag = logs.entries.first().executor.tag;
    
          if(oldMember.nickname !== newMember.nickname) {
              if(oldMember.nickname === null) {
                  var oldNM = '\`\`اسمه الاصلي\`\`';
              }else {
                  var oldNM = oldMember.nickname;
              }
              if(newMember.nickname === null) {
                  var newNM = '\`\`اسمه الاصلي\`\`';
              }else {
                  var newNM = newMember.nickname;
              }
    
              let updateNickname = new Discord.RichEmbed()
              .setTitle('**[UPDATE MEMBER NICKNAME]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
    
              logChannel.send(updateNickname);
          }
          if(oldMember.roles.size < newMember.roles.size) {
              let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
    
              let roleAdded = new Discord.RichEmbed()
              .setTitle('**[ADDED ROLE TO MEMBER]**')
              .setThumbnail(oldMember.guild.iconURL)
              .setColor('GREEN')
              .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
    
              logChannel.send(roleAdded);
          }
          if(oldMember.roles.size > newMember.roles.size) {
              let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
    
              let roleRemoved = new Discord.RichEmbed()
              .setTitle('**[REMOVED ROLE FROM MEMBER]**')
              .setThumbnail(oldMember.guild.iconURL)
              .setColor('RED')
              .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
    
              logChannel.send(roleRemoved);
          }
      })
      if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
          let newOwner = new Discord.RichEmbed()
          .setTitle('**[UPDATE GUILD OWNER]**')
          .setThumbnail(oldMember.guild.iconURL)
          .setColor('GREEN')
          .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
          .setTimestamp()
          .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
    
          logChannel.send(newOwner);
      }
    });
    bot.on('guildMemberAdd', member => {
    var logChannel = member.guild.channels.find(c => c.name === 'logs');
    if(!logChannel) return;
    
    let newMember = new Discord.RichEmbed()
    .setTitle('**[NEW MEMBER ADDED]**')
    .setThumbnail(member.user.avatarURL)
    .setColor('GREEN')
    .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL)
    
    logChannel.send(newMember);
    });
    function Days(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
    }
    bot.on('guildMemberRemove', member => {
    var logChannel = member.guild.channels.find(c => c.name === 'logs');
    if(!logChannel) return;
    
    let leaveMember = new Discord.RichEmbed()
    .setTitle('**[LEAVE MEMBER]**')
    .setThumbnail(member.user.avatarURL)
    .setColor('GREEN')
    .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL)
    
    logChannel.send(leaveMember);
    });
    
    
    // Voice Logs
    bot.on('voiceStateUpdate', (voiceOld, voiceNew) => {
    
      if(!voiceOld.guild.member(bot.user).hasPermission('EMBED_LINKS')) return;
      if(!voiceOld.guild.member(bot.user).hasPermission('VIEW_AUDIT_LOG')) return;
    
      var logChannel = voiceOld.guild.channels.find(c => c.name === 'logs');
      if(!logChannel) return;
    
      voiceOld.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userTag = logs.entries.first().executor.tag;
          var userAvatar = logs.entries.first().executor.avatarURL;
    
    // Server Muted Voice
          if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
              let serverMutev = new Discord.RichEmbed()
              .setTitle('**[VOICE MUTE]**')
              .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
              .setColor('RED')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
    
              logChannel.send(serverMutev);
          }
    // Server UnMuted Voice
          if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
              let serverUnmutev = new Discord.RichEmbed()
              .setTitle('**[VOICE UNMUTE]**')
              .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
              .setColor('GREEN')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
    
              logChannel.send(serverUnmutev);
          }
    // Server Deafen Voice
          if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
              let serverDeafv = new Discord.RichEmbed()
              .setTitle('**[VOICE DEAFEN]**')
              .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
              .setColor('RED')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
    
              logChannel.send(serverDeafv);
          }
    // Server UnDeafen Voice
          if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
              let serverUndeafv = new Discord.RichEmbed()
              .setTitle('**[VOICE UNDEAFEN]**')
              .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
              .setColor('GREEN')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
    
              logChannel.send(serverUndeafv);
          }
      })
    // Join Voice Channel
      if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
          let voiceJoin = new Discord.RichEmbed()
          .setTitle('**[JOIN VOICE ROOM]**')
          .setColor('GREEN')
          .setThumbnail(voiceOld.user.avatarURL)
          .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
          .setTimestamp()
          .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
    
          logChannel.send(voiceJoin);
      }
    // Leave Voice Channel
      if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
          let voiceLeave = new Discord.RichEmbed()
          .setTitle('**[LEAVE VOICE ROOM]**')
          .setColor('GREEN')
          .setThumbnail(voiceOld.user.avatarURL)
          .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
          .setTimestamp()
          .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
    
          logChannel.send(voiceLeave);
      }
    // Changed Voice Channel
      if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
          let voiceLeave = new Discord.RichEmbed()
          .setTitle('**[CHANGED VOICE ROOM]**')
          .setColor('GREEN')
          .setThumbnail(voiceOld.user.avatarURL)
          .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
          .setTimestamp()
          .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
    
          logChannel.send(voiceLeave);
      }
    });
    
    
       

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));
	
bot.login("NTU0NzQ0NTI3OTAzMjYwNjgy.XpCb1g.fxCiv0cp6U0-SQ3x_DNJLcjK8MA");

