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
  let embed = new Discord.RichEmbed()
       .setImage(`http://etstringy.github.io/dice/${number}.png`)
       .setFooter(number, "https://cdn.glitch.com/6c46c300-b23a-46b7-98ca-6f60c54f2c08%2Fstring%20with%20background.png?1540290217996")
       .setColor("#3498db")

  message.channel.send({embed: embed});
}




module.exports.help = {
    name: "dice",
}
