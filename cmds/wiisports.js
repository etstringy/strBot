const Discord = module.require("discord.js");
const ffmpeg = module.require("ffmpeg-binaries")

module.exports.run = async (bot, message, args) => {
    var client = new Discord.Client();
    const voiceChannel = message.member.voiceChannel;

    voiceChannel.join()
    .then(connection => {
      const dispatcher = connection.playFile('./assets/aud/sports.mp3');
    })
    .catch(console.error);

}

module.exports.help = {
    name: "wiisports",
}
