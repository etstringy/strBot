const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Invalid user mention")

    let embed = new Discord.RichEmbed()
           .setAuthor(user.username)
           .setDescription("User info:")
           .setColor("#3498db")
           .addField("Full Username", `${user}#${user.discriminator}`)
           .addField("ID", user.id)
           .addField("Creation Date", user.createdAt);

       message.channel.send({embed: embed});
}

module.exports.help = {
    name: "userinfo",
}
