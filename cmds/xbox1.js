const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Server Status")
  .setColor("#32cd32")
   .setThumbnail('https://cdn.discordapp.com/attachments/446423489939767296/473574479411544064/download.png')
 // .addField("", bot.user.username)
  .addField("Social Club" , "UP")
  .addField("PC", "UP")
  .addField("PS4" , "UP")
  .addField("Xbox One" , "UP")
  .addField("PS3" , "UP")
  .addField("Xbox 360" , "UP");
  //.addField("Social Club" , "UP");
  return message.channel.send(botembed)

}


module.exports.help = {
    name: "one",
    description: "```Server Status```"
  }