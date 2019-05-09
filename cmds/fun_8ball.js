let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    var textArray = [
      'Signs point to yes',
      'Nope',
      ':thinking:',
      'Yes',
      'What?',
      'I cannot confirm this'
  ];
  var randomNumber = Math.floor(Math.random()*textArray.length);
  message.channel.send(`:8ball: **${textArray[randomNumber]}**`)
}

module.exports.help = {
    name: "8ball",
}
