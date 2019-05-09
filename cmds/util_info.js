const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
           .setTitle("string by Stringy#0001")
           .setDescription("Here is a list of things that were used in the project")
           .addField("Based on strFrame", "http://github.com/etstringy/strFrame")
           .addField("Using discord.js", "http://npmjs.com/discord.js")
           .addField("Using Glitch to host", "http://glitch.com")
           .addField("Made by Stringy#0001", "DM me if you like the bot!")
           .setColor("#3498db")
       message.channel.sendEmbed(embed);

}

module.exports.help = {
    name: "info",
}
