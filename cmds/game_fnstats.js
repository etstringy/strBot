let Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  const Scout = require("@scoutsdk/server-sdk");

  await Scout.configure({
    clientId: process.env.SCOUTID,
    clientSecret: process.env.SCOUTTOKEN,
    scope: "public.read"
  });

  
  let titles = await Scout.titles.list();
  let fortnite = titles.find(t => t.slug === "fortnite");
  let search = await Scout.players.search(args[0], "epic", "pc", fortnite.id, true, true);
  
  let ninjasId = search.results[0].player.playerId;

  let ninja = await Scout.players.get(fortnite.id, ninjasId, "*");

  console.log(ninja);
  }

module.exports.help = {
    name: "fnstats",
}