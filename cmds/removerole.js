module.exports.run = async (bot, message, args) => {
  if (!message.guild.me.hasPermission('MANAGE_ROLES')) {
    message.channel.send('Bot doesn\'t have manage roles permission');
    return;
  }
  if (!message.member.hasPermission('MANAGE_ROLES')) {
    bot.permMsg(message);
    return;
  }
  if (!message.mentions.members.first() || !message.mentions.members.first()) {
    bot.errMsg(message);
    return;
  }
  let roles = message.mentions.roles.filter(role => role.calculatedPosition < message.guild.me.highestRole.calculatedPosition);
  message.mentions.members.forEach(mem => {
    mem.removeRoles(roles);
  });
}
module.exports.help = {
  name: 'role1',
  desciption: 'Removes multiple roles to multiple members `removerole [mention of roles and members]`'
}