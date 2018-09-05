module.exports.run = async (bot, message, args) => {
  message.channel.send(`Pong! \`${bot.ping}ms\``);
}
module.exports.help = {
  name: 'ping',
  description: 'Displays the ping of the bot'
}