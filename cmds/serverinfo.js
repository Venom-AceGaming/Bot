const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {
	if (args[1]) {
		message.channel.errMsg('Unnecessary arguments');
		return;
	}
	
	let channels = Array.from(message.guild.channels.values()).filter(channel => channel.type !== null).length;
	let region = message.guild.region.replace(/-/g, ' ').capitalize(true);
  let members = Array.from(message.guild.members.values()).filter(mem => !mem.user.bot).length;
	let onlineMembers = Array.from(message.guild.members.values()).filter(mem => mem.user.presence.status !== 'offline' && !mem.user.bot).length;
  let bots = Array.from(message.guild.members.values()).filter(mem => mem.user.bot).length;
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })
  let sicon = message.guild.iconURL;
	let msg = new Discord.RichEmbed()
	.setTitle('Server Info')
//  .setAuthor(message.guild.icon)
	.setColor(randomColor)
	.setThumbnail(sicon)
	.addField('Name', `${message.guild.name} (${message.guild.nameAcronym})`, true)
	.addField('Server ID', message.guild.id, true)
	.addField('Owner', message.guild.owner.user.tag, true)
	.addField('Region', region, true)
	.addField('Total Members', members, true)
	.addField('Online Members', onlineMembers, true)
  .addField('Bots', bots, true)
	.addField('Channels', channels, true)
  //.addField('Creation Date', message.guild.createdAt, true)
  .addField('You Joined', message.member.joinedAt)
  .setFooter('Created On', message.guild.createdAt)
    .setFooter(`Requesed by: ${message.author.username}`, message.author.avatarURL);
  
	message.channel.send(msg);
}
module.exports.help = {
	name: 'serverinfo',
	description: 'Displays the servers info [Example: serverinfo]'
}