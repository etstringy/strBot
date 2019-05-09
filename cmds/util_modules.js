const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("I don't know what module you want to view")
    if(args[0] === "fun") {
       let embed = new Discord.RichEmbed()
           .setTitle("Fun Module")
           .addField("str:birb", "Displays a random birb")
           .addField("str:8ball", "Tells you 'accurately' what something will be")
           .addField("str:dice", "Rolls a dice for you")
           .addField("str:dog", "Displays a random dog")
           .addField("str:rate [topic]", "Rates your topic from 1 to 10")
           .addField("str:panda", "Displays a random panda")
           .setColor("#3498db")
         
       message.channel.send({embed: embed});
    };
    if(args[0] === "game") {
       let embed = new Discord.RichEmbed()
           .setTitle("Game Module")
           .addField("str:mcping [ip] [port]", "Gives you info on if a minecraft server is up")
           .setColor("#3498db")
       
         message.channel.send({embed: embed});     
    }
    if(args[0] === "moderation") {
       let embed = new Discord.RichEmbed()
           .setTitle("Moderation Module")
           .addField("str:delmsg [amount of messages - max 100]", "Deletes messages")
           .addField("str:mute [user]", "Silences a dreaded user")
           .addField("str:unmute [user]", "Unsilences an understanding user")
           .addField("str:kick [user]", "Boots someone out the door")
           .setColor("#3498db")
       
         message.channel.send({embed: embed});     
    }
    if(args[0] === "utility") {
       let embed = new Discord.RichEmbed()
           .setTitle("Utility Module")
           .addField("str:userinfo [user]", "Gives you information about different users")
           .addField("str:icon", "Gives you the current servers icon")
           .addField("str:avatar [user]", "Gives you a users avatar")
           .addField("str:info", "Displays info about the bot")
           .addField("str:help", "Gives you information about modules")
           .addField("str:module [module]", "Gives you all the commands in a module")
           .setColor("#3498db")
       
         message.channel.send({embed: embed});     
    }
    if(args[0] === "music") {
       let embed = new Discord.RichEmbed()
           .setTitle("Music Module")
           // .addField("str:birb", "Displays a random birb")
           .addField("str:play [url/search term]", "Add a song to the queue")
           .addField("str:search [search term]", "Searches for the top 10 videos of the search term")
           .addField("str:skip [number]", "Skip a song thats in the queue")
           .addField("str:queue {position}", "View the queue and a song in a position")
           .addField("str:pause", "Pauses the current song")
           .addField("str:resume", "Resumes the current song")
           .addField("str:volume", "Adjust the volume of the current track")
           .addField("str:leave", "Makes the bot leave the current channel")
           .addField("str:clearqueue", "Clears the song queue")
           .addField("str:np", "Shows what's playing")
           .addField("str:lyrics [song]", "Find lyrics for a song")
           .setFooter("Coded by DarkoPendragon")
           .setColor("#3498db")
         
       message.channel.send({embed: embed});
    }
}

module.exports.help = {
    name: "module",
}
