let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first();
    if(!user) return message.channel.send("Invalid user mention.")

    let msg = await message.channel.send("Generating Avatar...")


    message.channel.send({files : [
        {
            attachment: user.avatarURL,
            name: "avatar.png"
        }
    ]});

    msg.delete();
}

module.exports.help = {
    name: "avatar",
}
