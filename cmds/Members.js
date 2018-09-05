const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {
	if (args[1]) {
		message.channel.errMsg('Unnecessary arguments');
		return;
  }
  
  let members = Array.from(message.guild.members.values()).filter(mem => !mem.user.bot).length;
	let onlineMembers = Array.from(message.guild.members.values()).filter(mem => mem.user.presence.status !== 'offline' && !mem.user.bot).length;
  let bots = Array.from(message.guild.members.values()).filter(mem => mem.user.bot).length;
	let msg = new Discord.RichEmbed()
 // set sicon = message.guild.iconURL;
  
	.setTitle('**Members**')
  //.setThumbnail(sicon)
	.setColor('#ffaf24')
	.addField('Total Members', members, true)
	.addField('Online Users', onlineMembers, true)
  .addField('Bots', bots, true)   
  .addField('Total Members', message.guild.memberCount)
  .setTimestamp() //The timestamp of this embed

	
	message.channel.send(msg);
}
module.exports.help = {
	name: 'members2',
	description: 'Displays the member count  '
}