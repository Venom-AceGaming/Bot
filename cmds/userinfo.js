const Discord = require('discord.js');

//Define moment
const moment = require("moment");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};

module.exports.run = async (client, message, args) => {
    	let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);
	  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
	//Discord rich embed
    const embed = new Discord.RichEmbed()
    
		.setColor(randomColor)
		
    .setThumbnail(user.avatarURL)
		
    .setTitle(`${user.username}#${user.discriminator}`)
		
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		
    .addField("Status", `${status[member.user.presence.status]}`, true)
		
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		
    .addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
    
    .addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		
 //  .addField("Last Online:", `.lastMessage
    
    .addField("Last Online:", `${moment.utc(member.lastMessage).format('dddd, MMMM Do, HH:mm:ss')}`, true)
 
    
    //.addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
 // .lastMessage
    .setFooter(`Requesed by: ${message.author.username}`, message.author.avatarURL)
    .setTimestamp()
     message.channel.send({embed});
    };


module.exports.help = {
  name: "userinfo",
  description: "Displays user's info."
}