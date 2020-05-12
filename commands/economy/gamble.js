module.exports = { 
    config: {
        name: "gamble",
        description: "Test your Luck",
        category: "economy",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        if(!message.member.roles.some(r=>["Gambling"].includes(r.name)) )
        return message.channel.send({embed: {
            color: 15406156,
            description: "You need the `Gambling` role to run this command. You need to pay $1 to have access https://www.paypal.me/pixeldude41",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL
            }
        }});
    message.channel.send("Randomizing").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Roll again!", "Roll again!", "Rainbow role", "Rainbow role", "Rainbow role", "Rainbow role","Whitelist", "Image Permissions", "Image Permissions", "Image Permissions","Image Permissions", "Your Own Channel","Your Own Channel","Your Own Channel","Your own custom role","Your own custom role","Your own custom role","Your own emoji","Your own emoji","Your own emoji","Premium Casino","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything","You didn't win anything"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`Fetching Resources...`)
    
    
     message.channel.send({embed: {
        color: 8117429,
        description: `Reward: **${response}!**\nYour Gambling Ticket has Now Expired\n\nIf you won please DM the owners to reward you.`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL
            
        }}});
        let sChannel = message.guild.channels.find(c => c.name === "buyer-logs")
        
        sChannel.send({embed: {
            color: 8117429,
            description: `Reward: **${response}!**\n\nPlease Reward the user above.`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL
            }}});
    })
    
    
    const role1 = message.member.roles.find(role => role.name === 'Gambling');
        if (role1) await message.member.removeRole(role1);
  }};