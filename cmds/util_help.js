const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
           .setTitle("string Modules")
           .setDescription("Welcome to string 2, Every single command has been rewritten to be easier to use.")
           .setURL("Github", "http://github.com/etstringy/strbot")
           .setColor("#3498db")
         
       message.channel.send({embed: embed});
}

module.exports.help = {
    name: "help",
}
