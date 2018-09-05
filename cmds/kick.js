module.exports.run = async (bot, message, args) => {
  if (!message.guild.me.hasPermission('KICK_MEMBERS')) {
    message.channel.send('Bot cannot kick members');
    return;
  }
  if (!message.member.hasPermission('KICK_MEMBERS')) {
    bot.permMsg(message);
    return;
  }
  if (!message.mentions.members) {
    message.channel.send('Provide who to kick as a mention');
    return;
  }
  message.mentions.members.forEach(mem => {
    if (!mem.kickable) {
      message.channel.send(`${mem} is not kickable`);
      return;
    }
    if (!mem.user.bot) mem.send(`You have been kicked from ${message.guild.name}`);
    message.channel.send(`Kicked ${mem}!`);
    mem.kick();
  });
}
module.exports.help = {
  name: 'kick',
  description: 'Kicks multiple members `kick [mention of members]`'
}