const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
 //   .setFooter('Last Updated: 29/07/18', 'https://seeklogo.com/images/R/rockstar-games-logo-37BEDA8D5E-seeklogo.com.png');
     .setColor('#0099ff')
     .setTitle('Update Notes')
    .setURL('https://socialclub.rockstargames.com/news/article/60501/GTA-Online-After-Hours-Out-Now')
    //.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'htps://seeklogo.com/images/R/rockstar-games-logo-37BEDA8D5E-seeklogo.com.png', 'https://socialclub.rockstargames.com/news/article/60501/GTA-Online-After-Hours-Out-Now')
    .setDescription('Patch Notes for Grand Theft Auto V Patch 1.44')
    .setThumbnail('https://seeklogo.com/images/R/rockstar-games-logo-37BEDA8D5E-seeklogo.com.png')
    .addField('Work your way', 'up from an empty Los Santos venue to running the hottest spot in clubland as Gay Tony rides again in GTA Online: After Hours.')
    .addBlankField()
    .addField('Get your venture off the ground with some help from the legendary Tony Prince: source a sound system',  'hit San Andreas. From the mainframe in this sprawling underground warehouse your tech team can accrue high demand contraband', true)
    .addField('Run missions to secure your club’s essentials', 'bar and security staff, equipment, and resident DJ – then promote your venue to boost your profile.', true)
   // .addField('Thanks to Tony’s dodgy fixer English Dave, renowned deep house titan Solomun has signed on as your first resident DJ, and some of the world’s best DJs will be swinging through town soon, looking for the right venue to bring their own unique mix of modern house and techno. Here’s a look at the lineup for the weeks ahead:', 'Solomun – July 24Tale Of Us – July 31Dixon – August 7The Black Madonna – August 14', true)
    .setTimestamp()
  return message.channel.send(botembed)

}


module.exports.help = {
  name: 'update',
  description: '```Shows the update notes for latest version of gta```'
}  //Done YAY