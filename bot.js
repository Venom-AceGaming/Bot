const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);



const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const settingsProvider = new EnmapLevel({name: 'settings'});
bot.gS = new Enmap({provider: settingsProvider});
bot.dG = {autorole: {enabled: false, role: null}};

bot.config = config;

bot.commands = new Discord.Collection();

fs.readdir('./cmds/', (err, files) => {
  if (err) throw err;
  
  let jsFiles = files.filter(f => f.split('.').pop() === 'js');
  
  jsFiles.forEach(f => {
    let props = require(`./cmds/${f}`);
    bot.commands.set(props.help.name, props);
  });
  console.log(`Loaded ${jsFiles.length} commands`);
});

bot.errMsg = (message) => {
  message.channel.send('Syntax Error');
}
bot.permMsg = (message) => {
  message.channel.send('Improper permissions to use this command');
}

String.prototype.capitalize = function (allWords) {
  if (allWords) return this.split(/ +/g).map(str => str.charAt(0).toUpperCase()+str.toLowerCase().substring(1)).join(' ');
  else return this.toLowerCase().charAt()+this.toLowerCase(0).substring(1);
}

bot.prefix = '~';

bot.on('ready', () => {
  console.log(`Bot ${bot.user.username} is on`);
  bot.user.setPresence({game:{name:`Grand Theft Auto V`, type:'PLAYING'}});
}); 

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", " welcome").send(member.toString() + "Welcome to **This Awesome Server!**"); 
});

bot.on('message', (message) => {
    if (message.author.bot) return
	if (message.channel.type === 'dm') {
		let guild = bot.guilds.get('412419411454984192');
		let bot_security = guild.channels.get('422054554067009537');
		bot_security.send(`${message.author.tag} (${message.author.id}) said: **${message}**`);
	}
  else if (message.content.startsWith(bot.prefix)) {
    let args = message.content.substring(bot.prefix.length).trim().split(/ +/g);
    let cmd = bot.commands.get(args[0].toLowerCase());
    if (cmd) cmd.run(bot, message, args);
  }
});

bot.on('guildMemberAdd', (member) => {
  if (!member.guild.me.hasPermission('MANAGE_ROLES')) return;
  let gS = bot.gS.get(member.guild.id) || bot.dG;
  if (gS.autorole.role === null || gS.autorole.role.calculatedPosition >= member.guild.me.highestRole.calculatedPosition) return;
  member.addRole(member.guild.roles.get(gS.autorole.role.id));
});

bot.on('guildCreate', () => {
  bot.user.setPresence({game:{name:`Grand Theft Auto V`, type:'PLAYING'}});
});


bot.login(process.env.TOKEN);