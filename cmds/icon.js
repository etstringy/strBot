let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating Icon...")

    if(!message.guild.iconURL) return msg.edit("No icon to display.")

    message.channel.send({files : [
        {
            attachment: message.guild.iconURL,
            name: "avatar.png"
        }
    ]});

    msg.delete();
}

module.exports.help = {
    name: "icon",
}
