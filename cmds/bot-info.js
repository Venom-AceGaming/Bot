const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#2457be")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Creation Date", bot.user.createdAt)
  .addField("The owner of this bot are ", "Erik")
  .addField("Current version is *V 3.2*, *© 2018 ------*")
  .addField("Website:", "None");
  return message.channel.send(botembed)

}


module.exports.help = {
    name: "botinfo",
    description: "Gives information about the bot."
  }