let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.reply(`You currently have ${score.points} points and are level ${score.level}!`);
}

module.exports.help = {
    name: "points",
}
