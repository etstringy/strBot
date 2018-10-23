let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You don't have permission to use this command.");

     let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!toMute) return message.channel.sendMessage("Invalid user mention.");

     let role = message.guild.roles.find(r => r.name === "strmute");

     if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This user is not muted");

     await(toMute.removeRole(role));
     message.channel.sendMessage("The user has been unmuted");

}

module.exports.help = {
    name: "unmute",
}
