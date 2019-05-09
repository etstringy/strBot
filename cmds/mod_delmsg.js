let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  let perms = message.member.permissions;
  let has_manage = perms.has("MANAGE_MESSAGES");
  let admin = perms.has("ADMINISTRATOR");
  if(!args[0]) return message.channel.send("How many messages to delete? - `Invalid Argument`")
  
  
  if(admin) {
      message.channel.bulkDelete(args[0]).then(() => {
          message.channel.send(":white_check_mark: Deleted messages").then(msg => msg.delete(3000));
      });
    
    return
  }
  
  if(!has_manage) return message.channel.send(":x: You require Manage Messages to use this command")
  
  message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(":white_check_mark: Deleted messages").then(msg => msg.delete(3000));
  });
}

module.exports.help = {
    name: "delmsg",
}