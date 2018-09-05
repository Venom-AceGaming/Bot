const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  let msg = new Discord.RichEmbed()
  .setColor(`2763b8`)
  .setDescription(message.content.trim().substring(bot.prefix.length).trim().substring(5).trim())
 message.channel.send(msg);
  message.delete();
}
module.exports.help = {
  name: 'meow',
  description: 'Embeds a message you put in.'
}