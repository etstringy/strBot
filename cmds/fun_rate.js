let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args, con) => {
	if(!args[0]) return message.channel.send("Nothing to rate")
	var answers = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ]

	var number = answers[Math.floor(Math.random() * answers.length)];

	message.channel.send(`I rate ${args.slice(" ")[0]} a **${number}** out of 10!`);
}

module.exports.help = {
    name: "rate",
}
