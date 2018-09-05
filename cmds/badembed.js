const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  let msg = new Discord.RichEmbed()
  .setColor(`ca1551`)
  .setDescription(message.content.trim().substring(bot.prefix.length).trim().substring(5).trim())
 message.channel.send(msg);
  message.delete();
}
module.exports.help = {
  name: 'neg',
  description: 'Embeds a message you put in.'
}