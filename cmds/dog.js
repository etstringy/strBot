let Discord = module.require("discord.js");
const random_dog = require('random.dog');
const dog = new random_dog

module.exports.run = async (bot, message, args, con) => {
	dog.getDog()
	  .then(dog => {
	  	// let embed = new Discord.RichEmbed()
	   //     .setImage(dog)
	   //     .setFooter(dog, "etstringy.github.io/strbot.png")
	   //     .setColor("#3498db")
	   //  message.channel.send({embed:embed});
	       message.channel.send(dog)
	  	})
}

module.exports.help = {
    name: "dog",
}
