const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {
	if (args[1]) {
		message.channel.errMsg('Unnecessary arguments');
		return;
	}
  
	const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
	let channels = Array.from(message.guild.channels.values()).filter(channel => channel.type !== null).length;
	let region = message.guild.region.replace(/-/g, ' ').capitalize(true);
  let members = Array.from(message.guild.members.values()).filter(mem => !mem.user.bot).length;
	let onlineMembers = Array.from(message.guild.members.values()).filter(mem => mem.user.presence.status !== 'offline' && !mem.user.bot).length;
  let bots = Array.from(message.guild.members.values()).filter(mem => mem.user.bot).length;

  let sicon = message.guild.iconURL;
	let msg = new Discord.RichEmbed()
	.setTitle(`The ${message.guild.name}'s Icon:`)
	.setColor(randomColor)
	.setThumbnail(sicon)
    .setFooter(`Requesed by: ${message.author.username}`, message.author.avatarURL)
  .setTimestamp()

	message.channel.send(msg);
}
module.exports.help = {
	name: 'icon',
	description: 'Displays the member count'
}