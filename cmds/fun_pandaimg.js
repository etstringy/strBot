let Discord = module.require("discord.js");
var api = require('some-random-api')

module.exports.run = async (bot, message, args) => {
  
  api.pandaimg().then(img => {
    let embed = new Discord.RichEmbed()
        .setImage(img)
        .setFooter("string", "https://cdn.glitch.com/6c46c300-b23a-46b7-98ca-6f60c54f2c08%2Fstring%20with%20background.png?1540290217996")
    
    message.channel.send({embed: embed})
  })
  
}

module.exports.help = {
    name: "panda",
}
