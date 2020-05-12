module.exports = { 
    config: {
        name: "random",
        description: "Shows a random message!",
        usage: "!random",
        category: "miscellaneous",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {

    message.channel.send("Selecting").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["I really can't see!", "Hello", "Random just comes along the way!", "For all my life, I was just a pile of cards"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`${response}`)
    })
  }
}