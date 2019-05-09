const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
           .setTitle("string Modules")
           .setDescription("Welcome to string 2, Every single command has been rewritten to be easier to use. To view commands for a module, run ``str:module [module name]``")
           .addField(":stuck_out_tongue_winking_eye: Fun", "Image Generators, birbs - It's here ")
           .addField(":hammer: Moderation", "Keep your server squeaky clean with these commands")
           .addField(":video_game: Game", "Commands to tell you how terrible at a game you are") 
           .addField(":wrench: Utility", "Need the server icon? Sure. Wanna stalk another user? ...")
           .addField(":musical_note: Music", "Play anything from the latest hits to earrape nonsence")
           .setColor("#3498db")
         
       message.channel.send({embed: embed});
}

module.exports.help = {
    name: "help",
}
