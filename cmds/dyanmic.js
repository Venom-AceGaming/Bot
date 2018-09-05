const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Menu Info")
  .setColor("#ff8000")
  .setThumbnail('https://discordapp.com/channels/481527293747920912/481527637240709129')
  //.setThumbnail(bot.user.displayAvatarURL)
 // .addField("", bot.user.username)
  .addField("Dynamic Status:" , "ONLINE")
      .addField("Detected:" , "NO")
  .addField("Reason:", "---------------------")
  .addField("Website:" , " https://dynamic.cx")
  .addField("Discord:" , "Members Only.");
  return message.channel.send(botembed)

}


module.exports.help = {
    name: "dynamic",
    description: "```Dynamic Menu information.```"
  }