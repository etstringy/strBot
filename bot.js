// Import modules and variables
const Discord = require("discord.js");
const fs = require("fs");
const app = require("http")

// utils
const PORT = process.env.PORT || 3000;
const prefix = "str:";
const bot = new Discord.Client({disableEveryone: true});
const music = require("discord.js-musicbot-addon")


// Read commands
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
    console.log(`string 2 is now running`);
    // bot.user.setGame(`around in ${bot.guilds.size} Guilds | str:help`) 
    bot.user.setActivity(`${bot.guilds.size} guilds | str:help`, { type:"LISTENING" })
});

music.start(bot, {
  youtubeKey: process.env.YTKEY,
  botPrefix: prefix,
  help: {
    enabled: false,                     // True/False statement.
    exclude: true                     // Excludes the command from the help command.
  }
});

// listen for requests
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
