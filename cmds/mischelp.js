const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
 //   .setFooter('Last Updated: 29/07/18', 'https://seeklogo.com/images/R/rockstar-games-logo-37BEDA8D5E-seeklogo.com.png');
     .setColor('#0099ff')
     .setTitle('Help and Information')
    //.setURL('https://socialclub.rockstargames.com/news/article/60501/GTA-Online-After-Hours-Out-Now')
    .setDescription('Patch Notes for Grand Theft Auto V Patch 1.44')
    .setThumbnail('https://seeklogo.com/images/R/rockstar-games-logo-37BEDA8D5E-seeklogo.com.png')
    .addField('~userinfo', 'shows users account information')
      .addField('~avatar', 'shows a mentioned users profile picture')
    .addField('~members', 'shows how many users are in the server')
      .addField('~stats', 'shows bot statistics')
    .addBlankField()
     .addField('~help', 'Show help for EVERYONE')
     .addField('~adminhelp', 'Only admins can use these')
     //.addField('', '')
    // .addField('', '')
  // .addField('Thanks to Tony’s dodgy fixer English Dave, renowned deep house titan Solomun has signed on as your first resident DJ, and some of the world’s best DJs will be swinging through town soon, looking for the right venue to bring their own unique mix of modern house and techno. Here’s a look at the lineup for the weeks ahead:', 'Solomun – July 24Tale Of Us – July 31Dixon – August 7The Black Madonna – August 14', true)
    .setTimestamp()
  return message.channel.send(botembed)

}


module.exports.help = {
  name: 'mischelp',
  description: '```Help Information```'
}  //Done YAY