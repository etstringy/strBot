let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    var textArray = [
      'Signs point to yes',
      'Nope',
      'I cannot confirm this'
  ];
  var randomNumber = Math.floor(Math.random()*textArray.length);
  message.channel.send(textArray[randomNumber])
}

module.exports.help = {
    name: "8ball",
}
