let Discord = module.require("discord.js");
const random_dog = require('random.dog');
const dog = new random_dog

module.exports.run = async (bot, message, args, con) => {
	dog.getDog()
	  .then(dog => {
	  	let embed = new Discord.RichEmbed()
	       .setImage(dog)
	       .setFooter(dog, "https://cdn.glitch.com/6c46c300-b23a-46b7-98ca-6f60c54f2c08%2Fstring%20with%20background.png?1540290217996")
	       .setColor("#3498db")
	    message.channel.send({embed:embed});
	  	})
}

module.exports.help = {
    name: "dog",
}
