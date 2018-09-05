module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    bot.permMsg(message);
    return;
  }
  if (!message.mentions.members.first() && !args[1] || !args[2]) {
    bot.errMsg(message);
    return;
  }
    
  let member = message.mentions.members.first() || message.guild.member(args[1]);
  if (!member) return message.channel.send('Cannot find the member'); //or something ??
  
  let guildSettings = bot.guildSettings.get(message.guild.id);
  if (!guildSettings) guildSettings = {};
  if  (!guildSettings.warns) guildSettings.warns = {};
  guildSettings.warns[member.user.id] = args.slice(2).join(' ');
  
  bot.guildSettings.set(message.guild.id, guildSettings);
  
  message.mentions.members.first().user.send(`Warning from ${message.guild.name} (${message.guild.id}): ${args.slice(2).join(' ')}`);
  message.channel.send(`**${member.user.tag} (${member.user.id})** has been warned`);
    
}
module.exports.help = {
  name: 'warn',
  description: 'Warns a member with a reason.'
}