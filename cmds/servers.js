module.exports.run = async (bot, message, args) => {
  message.channel.send(`I am in ${bot.guilds.size} servers!`);
}
module.exports.help = {
  name: 'servers',
  description: 'Says amount of servers the bot is in.'
}