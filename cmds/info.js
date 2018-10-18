const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
           .setTitle("strBot by StringyMusic")
           .setDescription(
          "\n\
Coded in Javascript and discord.js. \n\
           \n\
Made by @Stringy6598 \n\
\n\
Edited in Github's Atom Code Editor. \n\
http://atom.io \n\
          \n\
Written in Discord.JS. \n\
http://discord.js.org ")

           .setColor("#3498db")
       message.channel.sendEmbed(embed);

}

module.exports.help = {
    name: "info",
}
