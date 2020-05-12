module.exports = { 
    config: {
        name: "diceroll",
        description: "Rolls a dices",
        usage: "!diceroll",
        category: "miscellaneous",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {

    message.channel.send("Rolling...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["1", "2", "3", "4", "5", "6"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`The Dice landed on ${response}!`)
    })
  }
}