const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
 message.channel.send('please wait...');
let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!rUser) return message.channel.send('Couldnt find user');
let reason = args.slice(2).join(" ");


let reportEmbed = new Discord.RichEmbed()
 .setDescription("Reports")
 .setColor("#ff002b")
 .addField("USER REPORTED A BAN!", `NAME: ${rUser}\nReason: ${reason}\nReported by: ${message.author.tag}`)
 .setTimestamp(message.createdAt);

let reportchannel = message.guild.channels.find('name', "ban-reports");
if(!reportchannel) return message.channel.send('Make a channel called "ban reports"');

  reportchannel.send(reportEmbed);
}

module.exports.help = {
  name: 'banreport'
}