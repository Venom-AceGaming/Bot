const Discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {

   
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have the right permission to use this command.");
 let botmessage = args.slice(1).join('')
   message.delete().catch();
   //message.channel.send(botmessage);
 }

  module.exports.help = {
  name: 'say',
  description: 'Make the bot say what ever you say!'
 }   