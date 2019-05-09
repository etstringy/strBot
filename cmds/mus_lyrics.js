let Discord = module.require("discord.js");
var api = require('some-random-api')

module.exports.run = async (bot, message, args) => {
  if (!args) return message.channel.send(":warning: Invalid Song")
  
  api.lyrics(args.join(" ").slice(0)).then(fucking_genious => {
    let lcheck = fucking_genious.lyrics.length > 2048
    if (lcheck === true) return message.channel.send(`:warning: Lyrics too long for Discord. Genius URL: <${fucking_genious.links.genius}>`)
    let embed = new Discord.RichEmbed()
        .setTitle(fucking_genious.title)
        .setDescription(fucking_genious.lyrics)
        .setFooter("string", "https://cdn.glitch.com/6c46c300-b23a-46b7-98ca-6f60c54f2c08%2Fstring%20with%20background.png?1540290217996")
    
    message.channel.send({embed: embed})
  })
}

module.exports.help = {
    name: "lyrics",
}
