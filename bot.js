// Import modules and variables
const Discord = require("discord.js");
const fs = require("fs");
const prefix = "str:";
const app = require("http")
const PORT = process.env.PORT || 3000;
const bot = new Discord.Client({disableEveryone: true});
const music = module.require("discord.js-musicbot-addon")

var servers = {};

bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded`)
        bot.commands.set(props.help.name, props);
    })
})


// API login
bot.on("ready", async () => {
    console.log(`strBot build 1.7 - Running - Now with added SQL and reports!`);
    bot.user.setPresence({ status: 'streaming', game: { name: `${bot.guilds.size} guilds | str:help` } });
});


music.start(bot, {
  youtubeKey: 'AIzaSyCgVJ9af60d1olO0ITN9lMZ2zwzhF-nOz8',
  prefix: prefix,
  embedColor: `BLUE`,
  botAdmins: ["142680738645409794"]
});

app.createServer(function (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            res.writeHead(200);
            res.end(data);
        });
}).listen(process.env.PORT, '0.0.0.0');

// Command and argument seperation
bot.on("message", async message=> {
    if(message.author.bot) return;
    if(!message.guild) return;
  
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);



});

bot.login(process.env.TOKEN);
