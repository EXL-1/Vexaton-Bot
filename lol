bot.on('message', function (message) {
        const sChannel = message.guild.channels.find(c => c.name === "logs")
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('lol')) {
            if(Channel != "talk-to-the-bot") {
                sChannel.send('|');
            } else {
            message.channel.send("Responding").then(m => {
              let ping = m.createdTimestamp - message.createdTimestamp
              let choices = ["I'm Out of Breath", "HAHHAHA", "Thats really Funny"]
              let response = choices[Math.floor(Math.random() * choices.length)]
      
              m.edit(`${response}`)
            
            })
        }
        }
    });
    bot.on('message', function (message) {
        const sChannel = message.guild.channels.find(c => c.name === "logs")
        if (message.author.bot) return;
            var Channel = message.channel.name
        if (message.content.includes ('hello')) {
            if(Channel != "talk-to-the-bot") {
                sChannel.send('|');
            } else {
            message.channel.send("Responding").then(m => {
              let ping = m.createdTimestamp - message.createdTimestamp
              let choices = ["hi", "hello", "Good to see you!"]
              let response = choices[Math.floor(Math.random() * choices.length)]
      
              m.edit(`${response}`)

            })
        }
        }
    });
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('dumb')) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
          message.channel.send("Responding").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            let choices = ["Your fucking stupid!", "**DON'T CALL ME THAT!**", "HAVE YOU GOT ANYTHING ELSE TO DO THAN CALLING ME DUMB!"]
            let response = choices[Math.floor(Math.random() * choices.length)]
    
            m.edit(`${response}`)
          })
        }
      }
  });
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('day')) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["I'm Fine Thank You!", "How's your day?", "Got any problems?"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
        }
    });
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('update')) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["I can't remember which update it is?", "The last update was two weeks ago...", "Maybe Version 12?"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
        }
    });
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('info')) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["I am Intelligent hopefully..", "I wonder when I was created can you have a guess?", "I am a handy bot that's my job!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
        }
    });
    //HUMOUR ET MODERATION
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('hi')) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = [`Hey ${message.author.username}!`, "Hello good to to see you!", "hello!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
        }
    });
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('settings')) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
     
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["I have alot of fancy settings!", "I have +100 commands awesome", "Just type $help for settings mate!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('bot')) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["I'm a bot :)", "I'm very smart", "TODO LIST: Kill bots"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    bot.on('message', function (message) {
        const sChannel = message.guild.channels.find(c => c.name === "logs")
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('bye')) {
            if(Channel != "talk-to-the-bot") {
                sChannel.send('|');
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["cya :)", "bye!", "peace!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('EXL1')) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["Yea I am totally with EXL1", "Your my maker", "He is so smart EXL1 I wish I were as clever as him"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    bot.on('message', function (message) {
        const sChannel = message.guild.channels.find(c => c.name === "logs")
                if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('think')) {
            if(Channel != "talk-to-the-bot") {
                sChannel.send('|');
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["I'm thinking about it!", "Give me some time!", "I need to sleep!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('please')) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["Of course here you go!", "You have manners!", "I am always here to help!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('thank')) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
     
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["No Problem!", "I am always there to help!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    bot.on('message', function (message) {
        const sChannel = message.guild.channels.find(c => c.name === "logs")
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes("yes")) {
            if(Channel != "talk-to-the-bot") {
                sChannel.send('|');
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["Your going the positive direction!", "If you say yes I say Yes!", "okay!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes("fine")) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["Good to hear!", "alright anything else?", "okay!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    bot.on('message', function (message) {
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes("okay")) {
            if(Channel != "talk-to-the-bot") {
                message.channel.send('To chat to me please go to the <#703703494418497557>, ' + message.author);
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["Interesting", "let's talk about something else?", "understood"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    bot.on('message', function (message) {
        const sChannel = message.guild.channels.find(c => c.name === "logs")
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('no')) {
            if(Channel != "talk-to-the-bot") {
                sChannel.send('|');
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["nah!", "If you say no I say no!", "I don't agree with you!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
}
    });
    bot.on('message', function (message) {
        const sChannel = message.guild.channels.find(c => c.name === "logs")
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('like')) {
            if(Channel != "talk-to-the-bot") {
                sChannel.send('|');
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["Fancy!", "I like to do alot of exercise in my spare time!", "My hobbie is to code :)!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
    }
    });
    bot.on('message', function (message) {
        const sChannel = message.guild.channels.find(c => c.name === "logs")
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('how')) {
            if(Channel != "talk-to-the-bot") {
                sChannel.send('|');
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["Its going fine!", "I have mixed emotions!", "Indeed fine and if you need help just contact EXL1!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
}
    });
    bot.on('message', function (message) {
        const sChannel = message.guild.channels.find(c => c.name === "logs")
        if (message.author.bot) return;
        var Channel = message.channel.name
        if (message.content.includes ('why')) {
            if(Channel != "talk-to-the-bot") {
                sChannel.send('|');
            } else {
      
        message.channel.send("Responding").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          let choices = ["Because that's the way it is!", "I don't know?", "That's how I chose it!"]
          let response = choices[Math.floor(Math.random() * choices.length)]
  
          m.edit(`${response}`)
        })
    }
}
    });
    bot.on('message', function (message) {
      if (message.content.includes ('words')) {
        let lEmbed = new Discord.RichEmbed()
          .setColor("#daa520")
          .setTitle(`Here are all the words I can respond to ${message.author.username}!`)
          .setDescription(`Make sure to chat to me in the channel <#703703494418497557>.`)
          .setThumbnail(bot.user.avatarURL)
          .addField("**WORDS:**", `lol | hi | dumb | thank | yes | okay | no | please | think | bot | settings | day | info | update | like | how | why | hello | fine`, true)
          .setFooter(`EXLBot | Footer`, bot.user.displayAvatarURL);
      message.channel.send(lEmbed);
    }
    });
    bot.on('ready', () => {//new ready event
    setInterval(function(){
        bot.guilds.forEach(g => {
                    var role = g.roles.find(x => x.name === "Rainbow");//rainbow role name
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };
        });
    }, 30000);//the rainbow time
  });