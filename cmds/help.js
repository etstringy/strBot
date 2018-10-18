const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
           .setDescription("Commands: \n\
           __General__ :blue_book: \n\
           str:help - You're looking at it, buddy\n\
           str:userinfo @(user) - Displays info about a user \n\
           str:avatar @(user) - Displays the avatar of a user\n\
           str:icon - Displays the guild's icon\n\
           str:info - Shows the bot's info\n\
           \n\
           __Fun__ :stuck_out_tongue_winking_eye: \n\
           str:birb - Displays a borb\n\
           str:dog - Displays a doggo\n\
           str:rate [topic] - Rates a topic 0 - 10\n\
           str:dice - Rolls a dice\n\
           str:8ball - Picks a random 8 ball response.\n\
           \n\
           __Moderation__ :hammer: \n\
           str:mute @(user)(requires permissions) - Swipes the mute hammer over a member\n\
           str:unmute @(user) (requires permissions) - Rips the tape off of the muted members mouth\n\
           str:kick @(user)(requires permissions) - Boots a user outa' the door\n\
           \n\
           __Soundbytes__ :speaker: \n\
           str:shrekd - Kills your ears with Smash Mouth\n\
           str:wiisports - Kills your ears with Nintendo\n\
           str:alia - Kills your ears with Epic Games\n\
           str:waiting - Play when you are waiting on that one friend to join your splatteam \n\
           str:waiting - Play when you are annoyed about your friend never joining \n\
           \n\
           __Music__ :musical_note: \n\
           str:play <search term> | <url> \n\
           str:skip [number] \n\
           str:queue \n\
           str:pause \n\
           str:resume \n\
           str:volume <number> \n\
           str:leave \n\
           str:join \n\
           str:clearqueue")
           .setColor("#3498db")

       message.channel.send({embed: embed});
}

module.exports.help = {
    name: "help",
}
