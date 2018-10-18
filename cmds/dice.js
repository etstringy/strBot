let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args, con) => {
	var answers = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ]

	var number = answers[Math.floor(Math.random() * answers.length)];
  message.channel.send(`The number rolled is **${number}**`);
}




module.exports.help = {
    name: "dice",
}
