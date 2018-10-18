let Discord = module.require("discord.js");
var google = module.require('google')

module.exports.run = async (bot, message, args) => {
  message.channel.send(`:mag: Searching for ${args[0]}`)
  
  google.resultsPerPage = 1
  var nextCounter = 0

  google(args[0], function (err, res){
    if (err) console.error(err)

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      message.channel.send(link.title + ' - ')
      message.channel.send(link.href)
    }
  })

}

module.exports.help = {
  name: "google"
};