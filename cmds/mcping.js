let Discord = module.require("discord.js");
var request = require("request")

module.exports.run = async (bot, message, args) => {
    var mcIP = args[0]
    var mcPort = args[1] | 25565
    var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
    request(url, function(err, response, body) {
        if(err) {
            console.log(err);
            return message.reply('Error getting Minecraft server status...');
        }
        body = JSON.parse(body);
        var status = ':octagonal_sign: *Server is currently offline*';
        if(body.online) {
            status = ':white_check_mark: **Server** is online  -  ';
            if(body.players.now) {
                status += '**' + body.players.now + '** people are playing!';
            } else {
                status += '*Nobody is playing!*';
            }
        }
        let embed = new Discord.RichEmbed()
            .setColor("#2ecc71")
            .addField("Status", status)
            .setFooter(mcIP)
        message.channel.send({embed: embed});
    });
    
}

module.exports.help = {
    name: "mcping",
}
