const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Server Status")
  .setColor("#32cd32")
   .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/2000px-Rockstar_Games_Logo.svg.png')

  .addField("PC", "UP")
  .addField("PS4" , "UP")
  .addField("Xbox One" , "UP")
  .addField("PS3" , "UP")
  .addField("Xbox 360" , "UP")
  .addField("Social Club" , "UP");
  return message.channel.send(botembed)

}


module.exports.help = {
    name: "pc",
    description: "```Server Status```"
  }