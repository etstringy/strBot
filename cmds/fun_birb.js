let Discord = module.require("discord.js");
let birb = module.require("birb")

module.exports.run = async (bot, message, args, con) => {
	birb.random()
	  .then(url => {
	  	// let embed = new Discord.RichEmbed()
	   //     .setImage(url)
	   //     .setFooter(url, "etstringy.github.io/strbot.png")
	   //     .setColor("#3498db")
	   //  message.channel.send({embed:embed});
	       message.channel.send(url)
	  })
}

module.exports.help = {
    name: "birb",
}
