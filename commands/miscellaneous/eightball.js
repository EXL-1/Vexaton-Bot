module.exports = { 
    config: {
        name: "8ball",
        description: "The 8ball will show you the way!",
        usage: "!8ball",
        category: "miscellaneous",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {

    ballMessage = message.content.slice(9);
    number = 2;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send ('The 8ball says that "' + ballMessage + '" will come to pass'); break;
        case 2: message.channel.send ('The 8ball says that "' + ballMessage + '" will **not** come to pass'); break;
    }

  }
}