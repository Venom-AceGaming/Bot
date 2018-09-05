module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permission to use this command. You need manage roles.');
  
  let gS = bot.gS.get(message.guild.id) || bot.dG;
  
  if (!args[1]) {
    if (gS.autorole.role === null) message.channel.send(`Enabled: ${gS.autorole.enabled}\nRole: none`);
    else message.channel.send(`Enabled: ${gS.autorole.enabled}\nRole: ${gS.autorole.role.name}`);
  }
  else {
    if (args[1].toUpperCase() === 'ENABLE') {
      gS.autorole.enabled = true;
      bot.gS.set(message.guild.id, gS);
      message.channel.send('Successfully enabled autorole');
      return;
    }
    else if (args[1].toUpperCase() === 'DISABLE') {
      gS.autorole.enabled = false;
      bot.gS.set(message.guild.id, gS);
      message.channel.send('Successfully disabled autorole');
      return;
    }
    
    let role = message.guild.roles.get(args[1]) || message.guild.roles.find('name', args.slice(1).join(' ')) || message.mentions.roles.first();
    if (!role) return message.channel.send('It didn\'t work because the role name was incorrect.');
    
    message.channel.send(`Successfully set the autorole role to ${role.name}`);
    
    gS.autorole.role = role;
    bot.gS.set(message.guild.id, gS);
  }
}
module.exports.help = {
  name: 'autorole',
  desciption: 'Makes new members that just joined the server have a role if enabled.'
}