const fs = require('fs');
module.exports.run = async (bot, message, args) => {
	if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
		message.channel.send('Bot doesn\'t have permissions to ban members');
		return;
	}
	if (!message.member.hasPermission('BAN_MEMBERS')) {
		message.channel.permMsg('BAN_MEMBERS');
		return;
	}
	if (!message.mentions.members.first()) {
		message.channel.errMsg('No member to ban specified');
		return;
	}
  let num = parseInt(args[2]);
  if (!args[2] || isNaN(args[2]) || !Number.isInteger(num) || num <= 0) {
    message.channel.send('No integer specified');
    return;
  }
	if (!args[3]) {
		message.channel.errMsg('No reason for ban specified');
		return;
	}
	let member = message.mentions.members.first();
	let reason = args.slice(3).join(' ');
	
	if (!member.bannable) {
		message.channel.send('Member is not bannable by the bot');
		return;
	}
  fs.readFile('./bans.json', (err, content) => {
    if (err) throw err;
    
    let parseJson = JSON.parse(content);
    
    if (!parseJson[member.guild.id]) parseJson[member.guild.id] = {};
    
    parseJson[member.guild.id][member.user.id] = num*60000+Date.now();
    
    fs.writeFile('./bans.json', JSON.stringify(parseJson, null, '\t'), (err) => {
      if (err) throw err;
    });
  });
  message.channel.send(`Temporarily banned ${member} for ${num} minutes`);
	member.ban(reason);
}
module.exports.help = {
	name: 'tempban',
  description: 'Temporarily bans a member for *x* minutes with a reason [Example: M>tempban @Savitar50#1938 60 He did something] {Permissions: BAN_MEMBERS}'
}