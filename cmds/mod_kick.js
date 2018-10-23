let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("You don't have permission to use this command.");

     let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!toMute) return message.channel.sendMessage("Invalid user mention.");

     if(toMute.id === message.author.id) return message.channel.sendMessage("You cannot mute yourself.");
     if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot kick a member who is higher or has the same role as you.");

     toMute.kick()
       .then(() => console.log(`Kicked ${toMute.displayName}`))
       .catch(console.error);
     }

module.exports.help = {
    name: "kick",
}
