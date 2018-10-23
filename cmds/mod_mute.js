let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You don't have permission to use this command.");

     let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!toMute) return message.channel.sendMessage("Invalid user mention.");

     if(toMute.id === message.author.id) return message.channel.sendMessage("You cannot mute yourself.");
     if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot mute a member who is higher or has the same role as you.");

     let role = message.guild.roles.find(r => r.name === "strmute");
     if(!role) {
       try{
           role = await message.guild.createRole({
               name: "strmute",
               color: "#000000",
               permissions: []
           });

           message.guild.channels.forEach(async (channel, id) => {
               await channel.overwritePermissions(role, {
                   SEND_MESSAGES: false,
                   ADD_REACTIONS: false
               });
           });
       }catch(e) {
          console.log(e.stack);
       }
     }

     if(toMute.roles.has(role.id)) return message.channel.sendMessage("This user is already muted");

     await(toMute.addRole(role));
     message.channel.sendMessage("The user has been muted");
  }

module.exports.help = {
    name: "mute",
}
