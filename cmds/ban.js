module.exports.run = async (bot, message, args) => {
  if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
    message.channel.send('Bot cannot ban members');
    return;
  }
  if (!message.member.hasPermission('BAN_MEMBERS')) {
    bot.permMsg(message);
    return;
  }
  if (!message.mentions.members) {
    message.channel.send('Provide who to ban as a mention');
    return;
  }
  message.mentions.members.forEach(mem => {
    if (!mem.bannable) {
      message.channel.send(`${mem} is not bannable`);
      return;
    }
    if (!mem.user.bot) mem.send(`You have been banned from ${message.guild.name} (message.guild.id)`);
    message.channel.send(`Banned ${mem}!`);
    mem.ban();
    
    
  });
  message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
}
module.exports.help = {
  name: 'ban',
  description: 'Bans multiple members `ban [mention of members]`'
}