module.exports.run = (client, message, args, tools) => {

  const Discord = require("discord.js");
    const os = require('os');
    const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    const arch = os.arch()
    const CAPS1 = {
  linux: "Linux",
  windows: "Windows",
  mac: "Mac",
  macintosh: "Macintosh"
};
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);
  
    var ping = client.ping

   let botembed = new Discord.RichEmbed()
  .setDescription("Bot Statistics")
   .setThumbnail('https://images-ext-2.discordapp.net/external/Z8nn-6M8S3wxFHkEhwdVHJKTfonuP2SCiB0IpGGdQpA/https/cdn3.iconfinder.com/data/icons/databases/512/repair_database-512.png?width=400&height=400')
  .setColor(randomColor)
  //.setColor("#e60000")
  .addField(":hammer_pick: Memory usage:" , `${Math.round(used * 100) / 100}MB`, true)
  .addField(":tools: Node:", `${process.version}`, true)
  .addField(":books: Library:", `discord.js`, true)
  .addField(":hammer: ARCH:", `${arch}`, true)
  .addField(":timer: Ping" , `Ping: ${ping} ms`, true)
  .addField(":desktop: Platform:", `${CAPS1[os.platform]}`, true)
  .addField(":computer: Server Count:", `${client.guilds.size}`, true)
  .addField(":family_mwgb: User Count:", `${client.users.size}`, true)
 .addField(":alarm_clock: Uptime:", `Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}`,true)
  .setFooter(`Requesed by: ${message.author.username}`, message.author.avatarURL)
  .setTimestamp();
  return message.channel.send(botembed)

}


module.exports.help = {
name: 'stats',
description: 'Shows the stats of the bot.'

}  

