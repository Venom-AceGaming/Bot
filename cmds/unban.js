module.exports.run = async (bot, message, args) => {
  if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
    message.channel.send('Bot cannot uban members');
    return;
  }
  if (!message.member.hasPermission('BAN_MEMBERS')) {
    bot.permMsg(message);
    return;
  }
  if (!args[1]) {
    message.channel.send('Provide ID of who to unban');
    return;
  }
  bot.fetchUser(args[1]).then(user => {
    if (user == undefined) {
      message.channel.send('Provide ID of who to unban');
      return;
    }
    if (!user.bot) user.send(`You have been unbanned from ${message.guild.name} (message.guild.id)`);
    message.channel.send(`Unbanned ${user}`);
    message.guild.unban(user);
  });
}
module.exports.help = {
  name: 'unban',
  description: 'Unbans a member `unban [id of member]`'
}